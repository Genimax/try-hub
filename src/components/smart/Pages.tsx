import { ConnectionLoader } from "./ConnectionLoader";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { TwitchConnection } from "../../utils/TwitchConnection";
import { Categories } from "../simple/Categories";

export const Pages = () => {
  const [loading, setLoading] = useState(false);
  const streamer = useSelector((state: RootState) => state.streamer);

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
    return (
      <>
        <ConnectionLoader loading={loading} />
        <Categories />
      </>
    );
  };

  return pagesRender();
};
