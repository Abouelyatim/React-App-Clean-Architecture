import { ReportState } from "../slices/ReportSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export const InsertLogEvents = () => {
  const handleInsertLog = (
    state: ReportState,
    action: PayloadAction<string>
  ) => {
    state.logs.push(action.payload);
  };
  return {
    handleInsertLog,
  };
};
