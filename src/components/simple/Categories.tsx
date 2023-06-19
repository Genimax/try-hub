import { useTranslation } from "react-i18next";

export const Categories = () => {
  const { t } = useTranslation();

  return (
    <div className="categories-window fade-in">
      <div className="categories-container">
        <p className="categories-title">{t("categories-title")}</p>
        <div className="options-container">
          <div className="category yes-no-container">
            <p className="yes-category">{t("yes")}</p>
            <p>{t("no")}</p>
          </div>
          <div className="category roulette-container">
            <p className="dev-print">DEVDEVDEV</p>
            <img src="\src\assets\icons\bullet.svg" />
            <p>{t("russian-roulette")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
