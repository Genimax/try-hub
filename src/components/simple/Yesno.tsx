import { useTranslation } from "react-i18next";

export const Yesno = () => {
  const { t } = useTranslation();

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
        <h1 className="timer">00:00</h1>
        <div className="total-players-container">
          <p>{t("total-players")}:</p>
          <p>0</p>
        </div>
        <h1 className="question-title">
          {t("question")} #{1}
        </h1>
        <div className="yesno-buttons-container">
          <button className="big-button">{t("yes")}</button>
          <button className="big-button">{t("no")}</button>
        </div>

        <div className="top-3-main-container">
          <p>{t("top-3")}:</p>
          <div className="top3-places-container">
            <div className="places-container">
              <p>-</p>
              <p>-</p>
              <p>-</p>
            </div>
            <div className="names-container">
              <p>------------</p>
              <p>------------</p>
              <p>------------</p>
            </div>
            <div className="scores-container">
              <p>-</p>
              <p>-</p>
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
      <button className="big-button button-results">{t("show-results")}</button>
    </div>
  );
};
