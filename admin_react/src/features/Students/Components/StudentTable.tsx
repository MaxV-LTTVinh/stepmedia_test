import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";
import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
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
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useAppDispatch();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const tableStudents = useAppSelector(selectStudentTable);
  useEffect(() => {
    console.log("tableStudents", tableStudents);
  }, [dispatch, tableStudents]);
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const theme = useTheme();

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
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100, { value: -1, label: "All" }]}
          component="div"
          count={tableStudents.pagination.totalRows}
          rowsPerPage={tableStudents.pagination.pageSize}
          page={tableStudents.pagination.pageIndex - 1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </TableContainer>
    </Paper>
  );
}
