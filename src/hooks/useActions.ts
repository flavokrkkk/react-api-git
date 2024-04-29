import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "./hooks";
import { allActionCreators } from "../store/reducers/actions-creators/action-creators";

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
