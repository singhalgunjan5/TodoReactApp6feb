import React from "react";
import Typography from "@mui/joy/Typography";

export default function Header() {
  return (
    <div>
      <Typography level="h1" align="center" color="neutral">
        TodoList
      </Typography>
    </div>
  );
}

// export default function Header() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Typography variant="h1" align="center" component="div">
//         TodoList
//       </Typography>
//     </ThemeProvider>
//   );
// }
