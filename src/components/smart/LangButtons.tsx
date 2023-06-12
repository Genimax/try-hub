import { useTranslation } from "react-i18next";

const LangButtons = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const btnStyleSet = (language: string) => {
    return `${language} lang-button${
      i18n.language === language ? " active" : ""
    }`;
  };

  return (
    <div className="lang-buttons">
      <button
        className={btnStyleSet("ru")}
        onClick={() => changeLanguage("ru")}
      >
        RU
      </button>
      <button
        className={btnStyleSet("en")}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LangButtons;
