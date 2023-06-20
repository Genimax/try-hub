import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { actions } from "../../store/slices/streamerSlice";
import { actions as categoryActions } from "../../store/slices/gameSlice";
import { useMemo } from "react";

export const useActions = () => {
  const dispatch = useDispatch();

  const rootActions = {
    ...actions,
    ...categoryActions,
  };

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
