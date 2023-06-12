import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/redux";

import LangButtons from "../smart/LangButtons";

const Footer = () => {
  const { t } = useTranslation();

  const { found } = useAppSelector((state) => state.streamerReducer);

  return (
    <div id="footer">
      <p id="credits">developed by GeniusOoO</p>
      {!found ? <LangButtons /> : null}
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
