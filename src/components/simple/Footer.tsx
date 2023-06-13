import { useTranslation } from "react-i18next";

import LangButtons from "../smart/LangButtons";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="footer">
      <p id="credits">developed by GeniusOoO</p>
      <LangButtons />
      <a
        href="https://twitch.com/igorstankevich"
        target="_blank"
        className="partner-block"
      >
        <p className="partner-desc">
          {t("partner")}
          <span className="partner-nickname">igorstankevich</span>
        </p>
        <img
          id="partner_icon"
          src=".\src\assets\icons\partner.svg"
          alt="is_icon"
        />
      </a>
    </div>
  );
};

export default Footer;
