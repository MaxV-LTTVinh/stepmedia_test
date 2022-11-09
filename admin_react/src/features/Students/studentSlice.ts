import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "src/app/store";
import { IBaseLoading, IFilterBodyRequest } from "src/models/Bases";
import { IStudentModel } from "src/models/Student";

export interface IStudentTable {
  data: IStudentModel[];
}

export interface StudentState {
  isLoading: boolean;
  table: IBaseLoading & IStudentTable;
  formDataSubmit: IBaseLoading & IStudentTable;
}
const initialState: StudentState = {
  isLoading: false,
  table: {
    isLoading: false,
    data: [],
  },
  formDataSubmit: {
    isLoading: false,
    data: [],
  },
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    fetchStudents(state, action: PayloadAction<IFilterBodyRequest>) {
      state.table.isLoading = true;
      state.formDataSubmit.isSuccessful = false;
    },
    fetchStudentsSuccess(state, action: PayloadAction<IStudentModel[]>) {
      state.table.data = action.payload;
      state.table.isLoading = false;
      state.formDataSubmit.isSuccessful = false;
    },
    deleteStudents(state) {
      state.table.isLoading = true;
      state.formDataSubmit.isSuccessful = false;
    },
    deleteStudentsSuccess(state) {
      // state.table.isLoading = false;
      toast.success("Deleted Students successfully!");
    },
    saveStudents(state, action: PayloadAction<IStudentModel[]>) {
      state.formDataSubmit.isLoading = true;
      state.formDataSubmit.isSuccessful = false;
    },
    saveStudentsSuccess(state, action: PayloadAction<IStudentModel[]>) {
      state.formDataSubmit.isLoading = false;
      state.formDataSubmit.isSuccessful = true;
      toast.success("Save Students successfully!");
    },
    saveStudentsError(state, action: PayloadAction<any>) {
      state.formDataSubmit.isSuccessful = false;
      state.formDataSubmit.isLoading = false;
      console.error(action.payload);
      toast.error(action.payload);
    },
  },
});
// Actions
export const studentActions = studentSlice.actions;

// Reducer
const studentReducer = studentSlice.reducer;
export default studentReducer;

// Selectors
export const selectStudentTable = createSelector(
  [
    (state: RootState) => state.student.table,
    (state: RootState) => state.student.table.data,
    (state: RootState) => state.student.table.isLoading,
  ],
  (table) => {
    return table;
  }
);
export const selectStudentTableIsLoading = createSelector(
  [(state: RootState) => state.student.table.isLoading],
  (isLoading) => {
    return isLoading;
  }
);
export const selectFormDataStudentSubmitIsSuccessful = createSelector(
  [(state: RootState) => state.student.formDataSubmit.isSuccessful],
  (isSuccessful) => {
    return isSuccessful;
  }
);
export const selectStudentTableLoading = (state: RootState) =>
  state.student.isLoading;
