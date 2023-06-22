import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { actions } from "../../store/slices/streamerSlice";
import { actions as categoryActions } from "../../store/slices/gameSlice";
import { actions as resultsActions } from "../../store/slices/resultsSlice";
import { useMemo } from "react";

export const useActions = () => {
  const dispatch = useDispatch();

  const rootActions = {
    ...actions,
    ...categoryActions,
    ...resultsActions,
  };

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
