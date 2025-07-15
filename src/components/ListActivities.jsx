import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function ListActivities({ activities }) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead
            sx={{
              "& .MuiTableCell-root": { textAlign: "center" },
            }}
          >
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Usuário</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiTableCell-root": { textAlign: "center" },
            }}
          >
            {activities.map((activity) => (
              <TableRow
                className={`hover:bg-slate-200 hover:cursor-pointer ${
                  activity.id % 2 == 0 && "bg-slate-100"
                }`}
              >
                <TableCell>{activity.id}</TableCell>
                <TableCell>{activity.title}</TableCell>
                <TableCell>{activity.description}</TableCell>
                <TableCell>{activity.user}</TableCell>
                <TableCell>{activity.data}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ListActivities;
