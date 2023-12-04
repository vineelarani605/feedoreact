import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Survey from "../models/Survey";

interface Surveys {
  surveys: Survey[];
}
const initialState: Surveys = {
  surveys: [],
};

const feedoSlice = createSlice({
  name: "surveys",
  initialState,
  reducers: {
    addSurvey: (state, action: PayloadAction<Survey>) => {
      state.surveys.push(action.payload);
      return state;
    }
  },
});
export const { addSurvey } = feedoSlice.actions;
export default feedoSlice.reducer;
