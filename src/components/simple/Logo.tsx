import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import imgLogo from "./src/assets/icons/logo.svg";

export const Logo = () => {
  const streamer = useSelector((state: RootState) => state.streamer);

  const classConstructor = () => {
    if (streamer.found) {
      return " logo-top";
    }
    return "";
  };

  return (
    <div className={"logo-container" + classConstructor()}>
      <a className="logo-ref" href="#" target="_blank">
        <img className={"logo" + classConstructor()} src={imgLogo} alt="logo" />
      </a>
    </div>
  );
};
