import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent/MainContent";

// Define theme settings
const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { xs: "block", md: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Stack direction="row" spacing={2}>
              <Button variant="text" color="warning">
                Lorem{" "}
              </Button>
              <Button variant="contained">Lorem</Button>
              <Button variant="contained">Lorem</Button>
            </Stack>
          </Box>

          <Box component="span" sx={{ p: 2 }}>
            <IconButton sx={{ ml: 1 }} onClick={changeTheme} color="inherit">
              {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ backgroundColor: "primary.dark", py: 2 }}>
        <Container>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              flexDirection: "row",
              justifyContent: "flex-end",
              mb: 3,
            }}
          >
            <Link href="#" color="inherit">
              Link
            </Link>
            <Link href="#" color="inherit">
              Link
            </Link>
            <Link href="#" color="inherit">
              Link
            </Link>
          </Box>
        </Container>

        <Hero />
      </Box>

      <MainContent />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
