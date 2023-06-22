import { useState } from "react";
import { Timer } from "./timer";
import { YesNoActive } from "./YesNoActive";
import { YesNoResults } from "./YesNoResults";

export const Yesno = () => {
  const [gameStage, setGameStage] = useState(1);

  const gameStageRender = () => {
    if (gameStage === 1) {
      return <YesNoActive setGameStage={setGameStage} />;
    }

    return <YesNoResults setGameStage={setGameStage} />;
  };

  return gameStageRender();
};
