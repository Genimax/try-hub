import { Logo } from "../simple/Logo";
import { Searchline } from "../simple/Searchline";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Searchbar = () => {
  const streamer = useSelector((state: RootState) => state.streamer);

  const barRender = () => {
    if (streamer.found) {
      return null;
    }

    return (
      <>
        <Logo />
        <Searchline />
      </>
    );
  };

  return barRender();
};
