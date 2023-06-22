import { ILoader } from "../../models/ILoader";
import { useTranslation } from "react-i18next";

import loadingIMG from "../../assets/icons/loading-main.svg";

export const ConnectionLoader = (props: ILoader) => {
  const { t } = useTranslation();
  const loading = props.loading;

  const loaderRender = (loadStatus: boolean) => {
    if (loadStatus) {
      return (
        <div className="loading-container fade-in">
          <p>{t("loading")}</p>
          <img src={loadingIMG} />
        </div>
      );
    }

    return null;
  };
  return loaderRender(loading);
};
