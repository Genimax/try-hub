import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import LangButtons from "../../components/smart/LangButtons";

const useFooter = () => {
  const { t } = useTranslation();
  const streamer = useSelector((state: RootState) => state.streamer);

  const langButtonsRender = () => {
    if (streamer.found) return null;

    return <LangButtons />;
  };

  return { t, langButtonsRender };
};

export default useFooter;
