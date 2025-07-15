import { Paper, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
  borderRadius: "5px",
  padding: "ipx 20px",
  backgroundColor: "#1976d2",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#115293",
  },
});

function NavegationBar() {
  return (
    <Paper
      elevation={1}
      sx={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: 2,
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: 1,
          minWidth: "max-content",
        }}
      >
        <CustomButton variant="contained"> Daily Activities</CustomButton>
        <CustomButton variant="contained"> Portfolio Maintenance</CustomButton>
        <CustomButton variant="contained"> Product Development</CustomButton>
        <CustomButton variant="contained"> Operational Excellence</CustomButton>
        <CustomButton variant="contained"> Research</CustomButton>
        <CustomButton variant="contained"> Extra Activities</CustomButton>
      </Box>
    </Paper>
  );
}

export default NavegationBar;
