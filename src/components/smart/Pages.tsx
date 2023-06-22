import { ConnectionLoader } from "./ConnectionLoader";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { Categories } from "../simple/Categories";
import { Category } from "../../models/ICategory";
import { Yesno } from "../simple/Yesno";
import tmi, { client } from "tmi.js";
import { useActions } from "../../hooks/store/useActions";

export const Pages = () => {
  const [loading, setLoading] = useState(false);
  const streamer = useSelector((state: RootState) => state.streamer);
  const category = useSelector((state: RootState) => state.category);

  const { setNewAnswer, setReset } = useActions();

  function checkCategory() {
    console.log(category);
    if (category === Category.YESNO) {
      return true;
    }
    return false;
  }

  /////////////////////////////////////////
  // Chat Connection //
  useEffect(() => {
    if (loading) {
      const client = new tmi.Client({
        options: { debug: true },
        channels: [streamer.nickname!],
      });

      client.connect();

      client.on("connected", () => {
        setLoading(false), setReset();
      });

      client.on("message", (channel, tags, message) => {
        const messageFixed = message.toLowerCase().trim();

        ////////////////////////////////////
        //// Categories Chat Dependencies

        if (messageFixed === "!yes" || messageFixed === "!да") {
          setNewAnswer({
            answer: true,
            isSubscriber: Boolean(tags["subscriber"]),
            username: tags["display-name"] || tags["username"]!,
          });
        }

        if (messageFixed === "!no" || messageFixed === "!нет") {
          setNewAnswer({
            answer: false,
            isSubscriber: Boolean(tags["subscriber"]),
            username: tags["display-name"] || tags["username"]!,
          });
        }
      });
    }
  }, [loading]);

  /////////////////////////////////////////
  // Loader Setting //
  useEffect(() => {
    if (streamer.found) {
      setLoading(true);
    }
  }, [streamer]);

  const pagesRender = () => {
    if (!streamer.found) {
      return null;
    }

    const categoriesRender = () => {
      if (loading) return null;

      if (category === Category.YESNO) {
        return <Yesno />;
      }

      if (category === Category.RUSSIANROULETTE) {
        return <div>RUSSIANROULETTE</div>;
      }

      if (!loading && !category) return <Categories />;
    };

    return (
      <>
        <ConnectionLoader loading={loading} />
        {categoriesRender()}
      </>
    );
  };

  return pagesRender();
};
