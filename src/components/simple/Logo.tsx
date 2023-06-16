import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

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
        <img
          className={"logo" + classConstructor()}
          src=".\src\assets\icons\logo.svg"
          alt="logo"
        />
      </a>
    </div>
  );
};
