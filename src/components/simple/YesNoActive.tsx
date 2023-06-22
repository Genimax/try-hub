import { Timer } from "./timer";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useActions } from "../../hooks/store/useActions";
import React, { useEffect, useState } from "react";
import filter from "../../utils/filtration";
import { IYesNoActiveProps } from "../../models/IYesNo";

export const YesNoActive = (props: IYesNoActiveProps) => {
  const { setGameStage } = props;
  const { t } = useTranslation();
  const resultsState = useSelector((state: RootState) => state.results);
  const { setNextRound } = useActions();
  const [seconds, setSeconds] = useState(0);

  const playersCounter = () => {
    return Math.max(
      Object.keys(resultsState.currentAnswers).length,
      Object.keys(resultsState.stats).length
    );
  };

  const topRender = (resultState: typeof resultsState) => {
    const top3 = filter(resultState.stats).slice(0, 3);

    const topPlayers = top3.map((user, index) => {
      const subscriber = resultState.isSubscriber[Object.keys(user)[0]];

      const classRender = () => {
        return subscriber ? " subcolor" : "";
      };

      return (
        <div key={Object.keys(user)[0]} className={"places-container"}>
          <p className={"top3-places" + classRender()}>{index + 1}</p>
          <p className={classRender()}>{Object.keys(user)[0]}</p>
          <p className={"top3-scores" + classRender()}>
            {Object.values(user)[0]}
          </p>
        </div>
      );
    });

    if (top3.length > 0)
      return (
        <div className="top-3-main-container">
          <p>{t("top-3")}:</p>
          <div className="top3-places-container">{topPlayers}</div>
        </div>
      );
  };

  ////////////////////////////////////
  //// TIMER
  useEffect(() => {
    const timer = setInterval(
      () => setSeconds((prevState) => prevState + 1),
      1000
    );
    return () => clearInterval(timer);
  }, []);
  ////////////////////////////////////////

  return (
    <div className="window-big fade-in">
      <div className="window-container-big">
        <div className="window-title-container">
          <p>{t("yesno-title-1")}</p>
          <p>
            {t("answer")}
            <span> !{t("yes")} </span>
            {t("or")}
            <span> !{t("no")}</span>
          </p>
        </div>
        <Timer seconds={seconds} />
        <div className="total-players-container">
          <p>{t("total-players")}:</p>
          <p>{playersCounter()}</p>
        </div>
        <h1 className="question-title">
          {t("question")} #{resultsState.question}
        </h1>
        <div className="yesno-buttons-container">
          <button
            className="big-button"
            onClick={() => {
              setNextRound(true);
              setSeconds(0);
            }}
          >
            {t("yes")}
          </button>
          <button
            className="big-button"
            onClick={() => {
              setNextRound(false);
              setSeconds(0);
            }}
          >
            {t("no")}
          </button>
        </div>

        {topRender(resultsState)}
      </div>
      <button
        className="big-button button-results"
        onClick={() => setGameStage(0)}
      >
        {t("show-results")}
      </button>
    </div>
  );
};
