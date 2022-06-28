import React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

export const DataTable = ({ movies }) => {
  const columns = [
    { id: "title", label: "Titulo", minWidth: "100%" },
    { id: "popularity", label: "Popularidad", minWidth: "100%" },
    {
      id: "vote_average",
      label: "Promedio de votos",
      minWidth: "100%",
    },
    {
      id: "release_date",
      label: "Fecha de lanzamiento",
      minWidth: "100%",
    },
    {
      id: "original_language",
      label: "Lenguaje original",
      minWidth: "100%",
    },
  ]

  return (
    <Paper sx={{ width: "100%", overflow: "auto", marginTop: "40px" }}>
      <TableContainer sx={{ maxHeight: "68vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "rgb(51, 71, 91)",
                    color: "white",
                    borderRight: "1px solid white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {movies?.length
              ? movies.map((movie, index) => (
                  <TableRow hover key={movie.id}>
                    {columns.map((col, i) => (
                      <TableCell key={col.id}>{movie[col.id]}</TableCell>
                    ))}
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
