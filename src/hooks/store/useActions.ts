import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { actions } from "../../store/slices/streamerSlice";
import { useMemo } from "react";

export const useActions = () => {
  const dispatch = useDispatch();

  const rootActions = {
    ...actions,
  };

  return useMemo(
    () => bindActionCreators(rootActions, dispatch),
    [dispatch]
  );
};
