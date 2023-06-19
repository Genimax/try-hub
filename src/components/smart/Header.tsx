import { useSelector } from "react-redux";
import { Logo } from "../simple/Logo";
import LangButtons from "./LangButtons";
import { RootState } from "../../store/store";

export const Header = () => {
  const streamer = useSelector((state: RootState) => state.streamer);

  const headerRender = () => {
    if (streamer.found) {
      return (
        <header className="fade-in">
          <div className="header-container">
            <Logo />
            <LangButtons />
          </div>
          <div className="streamer-container">
            <img
              className="streamer-icon"
              src={streamer.icon}
              alt="streamer icon"
            />
            <p className="streamer-nickname">{streamer.nickname}</p>
          </div>
        </header>
      );
    }
    return null;
  };

  return headerRender();
};
