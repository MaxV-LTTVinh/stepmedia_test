import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "src/app/hooks";
import { InputField } from "src/components/FormFields/InputField";
import Text from "src/components/Text";
import { IBaseAddOrUpdateBodyRequest } from "src/models/Bases";
import { IStudentModel } from "src/models/Student";
import * as yup from "yup";
import { useAppSelector } from "../../app/hooks";
import {
  selectFormDataStudentSubmitIsSuccessful,
  studentActions,
} from "./studentSlice";
export interface IStudentAddProps {}
export type IStudentAddParams = {
  id?: string;
};
const schema = yup.object().shape({
  // data: yup.object().shape({
  //   code: yup.string().required("Please enter code."),
  //   name: yup.string().required("Please enter name."),
  //   icon: yup.string().required("Please enter icon."),
  // }),
});

export default function StudentAdd(props: IStudentAddProps) {
  const { id } = useParams<IStudentAddParams>();
  const navigate = useNavigate();
  const [count, setCount] = useState([crypto.randomUUID()]);
  const [students, setStudents] = useState<IStudentModel[]>([
    { id: crypto.randomUUID(), fullName: "" },
  ]);
  const [formBody, setFormBody] = useState<React.ReactNode>();
  const {
    control,
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm<IBaseAddOrUpdateBodyRequest<IStudentModel[]>, object>({
    defaultValues: {
      data: students,
    },
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
  const onSubmit = (object: IBaseAddOrUpdateBodyRequest<IStudentModel[]>) => {
    dispatch(studentActions.saveStudents(object.data));
  };
  const isSuccessful = useAppSelector(selectFormDataStudentSubmitIsSuccessful);
  useEffect(() => {
    console.log("isSuccessful", isSuccessful);
    if (isSuccessful === true) navigate(-1);
  }, [isSuccessful]);

  useEffect(() => {
    reset({ data: students });
    console.log("students", students);
    let children = students.map((student, i) => {
      return (
        <Grid key={i}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>{i}</Text>
            <InputField
              id={`data.${i}.fullName`}
              name={`data.${i}.fullName`}
              control={control}
              label={`fullName`}
            />
            <InputField
              id={`data.${i}.dob`}
              name={`data.${i}.dob`}
              control={control}
              type="date"
            />
            <Button
              size="small"
              color="error"
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </Button>
          </Box>
          <Divider />
        </Grid>
      );
    });

    setFormBody(children);
  }, [students]);

  const deleteStudent = (id) => {
    let formData = getValues();
    // formData.data.filter((f) => f.id != id);
    let newData = formData.data.filter((f) => f.id != id);
    setStudents(newData);
  };
  const addStudent = () => {
    let formData = getValues().data;
    console.log("before add", formData);
    formData.push({
      id: crypto.randomUUID(),
      fullName: "",
    });
    console.log("Add", formData);
    setStudents(formData);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={3}
          style={{ textAlign: "center" }}
        >
          <Box justifyContent="center">
            <Typography variant="h3" component="h3" gutterBottom>
              StudentAdd {id}
            </Typography>
          </Box>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formBody}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button color="success" onClick={() => addStudent()}>
              new Student
            </Button>
            <Button type="submit">Submit</Button>
          </Box>
        </form>
      </Container>
    </>
  );
}
