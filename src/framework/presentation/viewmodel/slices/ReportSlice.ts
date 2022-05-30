import { createSlice } from "@reduxjs/toolkit";
import { InsertLogEvents } from "../events/InsertLogEvents";

export interface ReportState {
  logs: string[];
}

const initState: ReportState = {
  logs: [],
};

const reportSlice = createSlice({
  name: "report",
  initialState: initState,
  reducers: {
    insertLog: InsertLogEvents().handleInsertLog,
  },
});

export const { insertLog } = reportSlice.actions;
export default reportSlice.reducer;
