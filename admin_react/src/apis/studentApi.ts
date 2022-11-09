import { delay } from "redux-saga/effects";
import { IStudentModel } from "src/models/Student";
import axiosClient from "./axiosClient";

const studentApi = {
  getAll(): Promise<IStudentModel[]> {
    const url = "/Students";
    // const res = ;

    delay(5000);
    return axiosClient().get(url);
  },
  save(data: IStudentModel[]): Promise<IStudentModel[]> {
    const url = "/Students";
    delay(5000);
    return axiosClient().post(url, data);
  },
  delete(): Promise<any> {
    const url = "/Students";
    delay(5000);
    return axiosClient().delete(url);
  },
};

export default studentApi;
