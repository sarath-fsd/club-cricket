import { createSelector } from "reselect";

import { AppState } from "../reducers/index";





const getError = (state: AppState) => state;


export const getErrorSelector = createSelector(getError, (error) => error);