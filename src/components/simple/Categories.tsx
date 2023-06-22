import { useTranslation } from "react-i18next";
import { useActions } from "../../hooks/store/useActions";
import { Category } from "../../models/ICategory";

import bulletIMG from "../../assets/icons/bullet.svg";

export const Categories = () => {
  const { t } = useTranslation();
  const { setCategory } = useActions();

  return (
    <div className="categories-window">
      <div className="categories-container fade-in">
        <p className="categories-title">{t("categories-title")}</p>
        <div className="options-container">
          <div
            className="category yes-no-container"
            onClick={() => setCategory(Category.YESNO)}
          >
            <p className="yes-category">{t("yes")}</p>
            <p>{t("no")}</p>
          </div>

          <div className="category roulette-container">
            <p className="dev-print">DEVDEVDEV</p>
            <img src={bulletIMG} />
            <p>{t("russian-roulette")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
