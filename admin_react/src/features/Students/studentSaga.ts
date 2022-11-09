import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import studentApi from "src/apis/studentApi";
import { IFilterBodyRequest } from "src/models/Bases";
import { IStudentModel } from "src/models/Student";
import { studentActions } from "./studentSlice";

function* fetchStudents(action: PayloadAction<IFilterBodyRequest>) {
  try {
    let res: IStudentModel[] = yield call(studentApi.getAll);
    yield put(studentActions.fetchStudentsSuccess(res));
  } catch (error) {
    console.error("error", error);
  }
}

function* deleteStudents() {
  try {
    let res: IStudentModel[] = yield call(studentApi.delete);
    yield put(studentActions.deleteStudentsSuccess());
    yield put(studentActions.fetchStudents());
  } catch (error) {
    console.error("error", error);
  }
}
function* saveStudents(action: PayloadAction<IStudentModel[]>) {
  try {
    let res = yield call(studentApi.save, action.payload);
    yield put(studentActions.saveStudentsSuccess(res));
    yield put(studentActions.fetchStudents());
  } catch (error) {
    console.error("error", typeof error, error);
    yield put(studentActions.saveStudentsError(error.response.data));
  }
}

export default function* studentSaga() {
  yield takeLatest(studentActions.fetchStudents, fetchStudents);
  yield takeLatest(studentActions.saveStudents, saveStudents);
  yield takeLatest(studentActions.deleteStudents, deleteStudents);
}
