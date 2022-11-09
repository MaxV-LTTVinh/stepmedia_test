import { IBaseModel } from "./Bases";

export interface IStudentModel extends IBaseModel<string> {
  fullName: string;
  dob?: string;
}
