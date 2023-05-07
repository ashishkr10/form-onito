import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

export default function ShowData() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    const dataList = async () => {
      await axios
        .get("http://localhost:7000/api/get")
        .then((response) => setTableData(response.data));
    };
    dataList();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h6">Form Data List</Typography>
      </Box>
      {tableData === null ? (
        <h4>No Data Avaliable..</h4>
      ) : (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography color="textPrimary" variant="subtitle1">
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textPrimary" variant="subtitle1">
                      Age
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textPrimary" variant="subtitle1">
                      Sex
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textPrimary" variant="subtitle1">
                      Mobile
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textPrimary" variant="subtitle1">
                      Address
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textPrimary" variant="subtitle1">
                      Guardian Details
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textPrimary" variant="subtitle1">
                      Nationality
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((data, i) => (
                    <TableRow hover key={i}>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>{data.age}</TableCell>
                      <TableCell>{data.sex}</TableCell>
                      <TableCell>
                        {data.mobile === "" ? (
                          <i>Not Available</i>
                        ) : (
                          data.mobile
                        )}
                      </TableCell>
                      <TableCell>
                        {data.address === "" ? (
                          <i>Not Available</i>
                        ) : (
                          data.address
                        )}
                      </TableCell>
                      <TableCell>
                        {data.guardLabel}{" "}
                        {data.guardName === "" ? (
                          <i>Not Available</i>
                        ) : (
                          data.guardName
                        )}
                      </TableCell>
                      <TableCell>
                        {data.nationality === "" ? (
                          <i>Not Available</i>
                        ) : (
                          data.nationality
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
}
