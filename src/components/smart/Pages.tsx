import { ConnectionLoader } from "./ConnectionLoader";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { TwitchConnection } from "../../utils/TwitchConnection";
import { Categories } from "../simple/Categories";
import { Category } from "../../models/ICategory";
import { Yesno } from "../simple/Yesno";

export const Pages = () => {
  const [loading, setLoading] = useState(false);
  const streamer = useSelector((state: RootState) => state.streamer);
  const category = useSelector((state: RootState) => state.category);

  /////////////////////////////////////////
  // Chat Connection //
  useEffect(() => {
    if (loading) {
      TwitchConnection(streamer.nickname!, () => setLoading(false));
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
