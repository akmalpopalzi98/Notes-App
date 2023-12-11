import { Box } from "@mui/material";
import "./app.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: " #b2babb",
        height: "900px",
        width: "100%",
        overflow: "auto",
      }}
    >
      <SideBar />
    </Box>
  );
}

export default App;
