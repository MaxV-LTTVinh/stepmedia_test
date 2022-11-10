import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import StudentTable from "./Components/StudentTable";
import { selectStudentTableIsLoading, studentActions } from "./studentSlice";

export interface IStudentPageProps {}
const mockData = [
  {
    id: "c1ec0a23-bcb5-439d-063c-08dac26a4dc7",
    fullName: "Full name 11",
    dob: "1990-01-11T00:00:00",
  },
  {
    id: "79c111bb-3695-4386-063d-08dac26a4dc7",
    fullName: "Full name 12 ",
    dob: "1990-01-12T00:00:00",
  },
  {
    id: "8ad8b75d-ff0c-467a-063e-08dac26a4dc7",
    fullName: "Full name 13 ",
    dob: "1990-01-13T00:00:00",
  },
  {
    id: "de808844-8a25-4fd9-063f-08dac26a4dc7",
    fullName: "Full name 14 ",
    dob: "1990-01-14T00:00:00",
  },
  {
    id: "8f222361-78e6-4249-0640-08dac26a4dc7",
    fullName: "Full name 15 ",
    dob: "1990-01-15T00:00:00",
  },
  {
    id: "0fab2d01-3ea9-4185-0641-08dac26a4dc7",
    fullName: "Full name 16 ",
    dob: "1990-01-16T00:00:00",
  },
  {
    id: "20648f4d-3c17-45d0-0642-08dac26a4dc7",
    fullName: "Full name 17 ",
    dob: "1990-01-17T00:00:00",
  },
  {
    id: "a4ed9b88-d6cd-468a-0643-08dac26a4dc7",
    fullName: "Full name 18 ",
    dob: "1990-01-18T00:00:00",
  },
  {
    id: "c6f9eb68-7add-47ef-0644-08dac26a4dc7",
    fullName: "Full name 19 ",
    dob: "1990-01-19T00:00:00",
  },
  {
    id: "b7789f78-cc12-41e1-0645-08dac26a4dc7",
    fullName: "Full name 20 ",
    dob: "1990-01-20T00:00:00",
  },
  {
    id: "6a0aadef-24d5-40ff-0650-08dac26a4dc7",
    fullName: "Full name 31",
    dob: "2023-02-01T00:00:00",
  },
  {
    id: "bd266d26-f4d2-4ff8-0651-08dac26a4dc7",
    fullName: "Full name 32 ",
    dob: "2023-02-02T00:00:00",
  },
  {
    id: "a1a4136e-8197-44cf-0652-08dac26a4dc7",
    fullName: "Full name 33 ",
    dob: "2023-02-03T00:00:00",
  },
  {
    id: "49e2362c-d9c0-4253-0655-08dac26a4dc7",
    fullName: "Full name 36",
    dob: "2023-02-06T00:00:00",
  },
  {
    id: "73fdbed5-8098-4f37-0659-08dac26a4dc7",
    fullName: "Full name 40 ",
    dob: "2023-02-10T00:00:00",
  },
  {
    id: "49e82891-9051-49aa-0632-08dac26a4dc7",
    fullName: "Full name 1",
    dob: "1990-01-01T00:00:00",
  },
  {
    id: "b60e87ef-b209-4ffd-0633-08dac26a4dc7",
    fullName: "Full name 2 ",
    dob: "1990-01-02T00:00:00",
  },
  {
    id: "c0d8c2d5-80ca-4898-0634-08dac26a4dc7",
    fullName: "Full name 3 ",
    dob: "1990-01-03T00:00:00",
  },
  {
    id: "912ae7a6-9b14-4dd4-0635-08dac26a4dc7",
    fullName: "Full name 4 ",
    dob: "1990-01-04T00:00:00",
  },
  {
    id: "7cd2a3cd-a69a-496c-0636-08dac26a4dc7",
    fullName: "Full name 5 ",
    dob: "1990-01-05T00:00:00",
  },
  {
    id: "9628a09c-4b55-4314-0637-08dac26a4dc7",
    fullName: "Full name 6 ",
    dob: "1990-01-06T00:00:00",
  },
  {
    id: "4f037e7b-812a-4f5e-0638-08dac26a4dc7",
    fullName: "Full name 7 ",
    dob: "1990-01-07T00:00:00",
  },
  {
    id: "006605dc-98bd-4561-0639-08dac26a4dc7",
    fullName: "Full name 8 ",
    dob: "1990-01-08T00:00:00",
  },
  {
    id: "a04d3bef-630c-4689-063a-08dac26a4dc7",
    fullName: "Full name 9 ",
    dob: "1990-01-09T00:00:00",
  },
  {
    id: "90b84cc3-f585-4672-063b-08dac26a4dc7",
    fullName: "Full name 10 ",
    dob: "1990-01-10T00:00:00",
  },
  {
    id: "ff1b5518-0e25-4b3d-0654-08dac26a4dc7",
    fullName: "Full name 35 ",
    dob: "2024-02-05T00:00:00",
  },
  {
    id: "1c6ddb1f-9a3c-44f9-0653-08dac26a4dc7",
    fullName: "Full name 34 ",
    dob: "2025-02-04T00:00:00",
  },
  {
    id: "2d0c0f83-a888-422f-0656-08dac26a4dc7",
    fullName: "Full name 37 ",
    dob: "2025-02-07T00:00:00",
  },
  {
    id: "a6f4f68e-370e-4967-0657-08dac26a4dc7",
    fullName: "Full name 38 ",
    dob: "2025-02-08T00:00:00",
  },
  {
    id: "ce9c0d08-c100-43d1-0658-08dac26a4dc7",
    fullName: "Full name 39 ",
    dob: "2026-02-09T00:00:00",
  },
  {
    id: "5a362961-bb28-4a1b-0646-08dac26a4dc7",
    fullName: "Full name 21",
    dob: "1990-01-21T00:00:00",
  },
  {
    id: "dbda72cf-fb2b-40a8-0647-08dac26a4dc7",
    fullName: "Full name 22 ",
    dob: "1990-01-22T00:00:00",
  },
  {
    id: "7eeb2fd9-725b-4907-0648-08dac26a4dc7",
    fullName: "Full name 23 ",
    dob: "1990-01-23T00:00:00",
  },
  {
    id: "6754e92a-4c22-4ca8-0649-08dac26a4dc7",
    fullName: "Full name 24 ",
    dob: "1990-01-24T00:00:00",
  },
  {
    id: "b5d631d7-fc7c-410b-064a-08dac26a4dc7",
    fullName: "Full name 25 ",
    dob: "1990-01-25T00:00:00",
  },
  {
    id: "99b42e40-a598-4789-064b-08dac26a4dc7",
    fullName: "Full name 26 ",
    dob: "1990-01-26T00:00:00",
  },
  {
    id: "69e3baea-afb3-49cd-064c-08dac26a4dc7",
    fullName: "Full name 27 ",
    dob: "1990-01-27T00:00:00",
  },
  {
    id: "0d16901b-fe1a-43f0-064d-08dac26a4dc7",
    fullName: "Full name 28 ",
    dob: "1990-01-28T00:00:00",
  },
  {
    id: "bfb7f94f-2bc1-4564-064e-08dac26a4dc7",
    fullName: "Full name 29 ",
    dob: "1990-01-29T00:00:00",
  },
  {
    id: "732ffbe0-caed-4ac4-064f-08dac26a4dc7",
    fullName: "Full name 30 ",
    dob: "1990-01-30T00:00:00",
  },
];

export default function StudentPage(props: IStudentPageProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(studentActions.fetchStudents(null));
  }, [dispatch]);
  const navigate = useNavigate();
  const deleteAll = () => {
    dispatch(studentActions.deleteStudents());
  };
  const create29 = () => {
    dispatch(studentActions.saveStudents(mockData.slice(0, 29)));
  };
  const create40 = () => {
    dispatch(studentActions.saveStudents(mockData));
  };
  const tableIsLoading = useAppSelector(selectStudentTableIsLoading);
  return (
    <>
      {/* <Helmet>
        <title>Student</title>
      </Helmet> */}
      <PageTitleWrapper>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              Student header
              {/* <Box sx={{ display: "flex" }}></Box> */}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              sx={{ mt: { xs: 2, md: 0 }, ml: 1 }}
              color="error"
              variant="outlined"
              startIcon={<AddTwoToneIcon fontSize="small" />}
              onClick={() => deleteAll()}
            >
              Delete All
            </Button>
            <Button
              sx={{ mt: { xs: 2, md: 0 }, ml: 1 }}
              variant="outlined"
              startIcon={<AddTwoToneIcon fontSize="small" />}
              onClick={() => create29()}
            >
              Create 29 students
            </Button>
            <Button
              sx={{ mt: { xs: 2, md: 0 }, ml: 1 }}
              variant="outlined"
              startIcon={<AddTwoToneIcon fontSize="small" />}
              onClick={() => create40()}
            >
              Create 40 students
            </Button>
            <Button
              sx={{ mt: { xs: 2, md: 0 }, ml: 1 }}
              variant="outlined"
              startIcon={<AddTwoToneIcon fontSize="small" />}
              onClick={() => navigate(`add`)}
            >
              Create Student manual
            </Button>
          </Grid>
        </Grid>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} display="flex" justifyContent="center">
            {tableIsLoading ? <CircularProgress /> : <StudentTable />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
