import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";
import { useAppSelector } from "src/app/hooks";
import { selectStudentTable } from "../studentSlice";

interface Column {
  id: "fullName" | "dob";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value?: any) => string;
}

const columns: Column[] = [
  { id: "fullName", label: "fullName" },
  {
    id: "dob",
    label: "dob",
    format: (value) => dayjs(value).format("DD/MM/YYYY"),
  },
];

export interface IStudentTableProps {}

export default function StudentTable(props: IStudentTableProps) {
  const tableStudents = useAppSelector(selectStudentTable);

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={columns.length + 1}>
                Student Table
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableStudents?.data?.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
