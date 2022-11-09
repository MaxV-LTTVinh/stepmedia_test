import { all } from "redux-saga/effects";
import studentSaga from "src/features/Students/studentSaga";

function* helloSaga() {
  console.log("hello saga");
  yield 1;
}

export default function* rootSaga() {
  yield all([helloSaga(), studentSaga()]);
}
