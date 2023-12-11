import { Box } from "@mui/material";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: "20%",
        margin: "20px",
        padding: "20px",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <input placeholder="Title" style={{ width: "100%" }} />

      <textarea
        placeholder="Content"
        rows={10}
        required
        style={{ maxWidth: "100%", maxHeight: "40%" }}
      />
      <button>Add Note</button>
    </Box>
  );
};

export default SideBar;
