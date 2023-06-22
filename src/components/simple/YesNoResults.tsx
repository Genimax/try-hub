import { IYesNoActiveProps } from "../../models/IYesNo";
import React from "react";
import { useTranslation } from "react-i18next";
import filter from "../../utils/filtration";
import { useActions } from "../../hooks/store/useActions";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const YesNoResults = (props: IYesNoActiveProps) => {
  const { t } = useTranslation();

  const { setCategory, setReset } = useActions();

  const results = useSelector((state: RootState) => state.results);

  const resultsRender = (
    top: { [key: string]: number },
    subs: { [key: string]: boolean }
  ) => {
    const classRender = (elem: typeof top) => {
      if (subs[Object.keys(elem)[0]]) {
        return " subcolor";
      }
      return "";
    };

    const sorted = filter(top);
    return sorted.map((elem, index) => {
      return (
        <div className="top-result" key={Object.keys(elem)[0]}>
          <p className={classRender(elem)}>{index + 1}</p>
          <p className={"nickname" + classRender(elem)}>
            {Object.keys(elem)[0]}
          </p>
          <p className={classRender(elem)}>{Object.values(elem)[0]}</p>
        </div>
      );
    });
  };

  return (
    <div className="window-big fade-in">
      <div className="window-container-big results-window">
        <div className="window-title-container">
          <p>{t("game-results")}:</p>
        </div>
        <div className="results-title-container">
          <p>{t("place")}</p>
          <p className="nickname-title">{t("nickname")}</p>
          <p>{t("scores")}</p>
        </div>
        <div className="overflow-y">
          <div className="top-container">
            {resultsRender(results.stats, results.isSubscriber)}{" "}
            <div className="stats">
              <p className="stats-title">{t("stats")}:</p>
              <div>
                <p>{t("fastest-player")}:</p>
                <p>{t("laziest-player")}:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="yesno-buttons-container game-results-buttons">
        <button
          className="big-button restart-btn"
          onClick={() => {
            setReset();
            props.setGameStage(1);
          }}
        >
          {t("restart")}
        </button>
        <button
          className="big-button"
          onClick={() => {
            props.setGameStage(1);
            setReset();
            setCategory(null);
          }}
        >
          {t("change-mode")}
        </button>
      </div>
    </div>
  );
};
