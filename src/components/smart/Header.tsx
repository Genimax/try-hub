import { useSelector } from "react-redux";
import { Logo } from "../simple/Logo";
import LangButtons from "./LangButtons";
import { RootState } from "../../store/store";
import { useActions } from "../../hooks/store/useActions";

export const Header = () => {
  const streamer = useSelector((state: RootState) => state.streamer);
  const { setStreamer } = useActions();

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
            <button
              onClick={() => {
                location.reload();
              }}
            >
              ✖
            </button>
          </div>
        </header>
      );
    }
    return null;
  };

  return headerRender();
};
