import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <>
      <Divider />
      <Container>
        <Box
          component="form"
          sx={{
            display: "flex",
            gap: 2,
            py: 2,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="body1" color="text.secondary" align="center">
            Lorem ipsum dolor
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <TextField id="outlined-basic" size="small" label="Name" variant="outlined" />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <TextField id="outlined-basic" size="small" label="Email" variant="outlined" type="email" />
            <Button variant="contained">Lorem</Button>
          </Box>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: "primary.dark", py: 6, borderBottom: 12, borderBottomColor: "primary.light" }}>
        <Container>
          <Typography variant="body1" color="primary.contrastText" align="center">
            Cillum consectetur ad irure deserunt velit laborum mollit non pariatur ad fugiat dolore. Ipsum dolore ipsum aliqua fugiat aute.
            Deserunt sint dolore pariatur et ea culpa officia laborum. Incididunt cillum pariatur magna eu ullamco reprehenderit in nisi
            sint.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "secondary.main", py: 6 }}>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            pb: 2,
            textAlign: "center",
            gridTemplateColumns: {
              xs: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
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
        <Container>
          <Typography variant="body1" align="center">
            Cillum consectetur ad irure deserunt velit laborum mollit non pariatur ad fugiat dolore. Ipsum dolore ipsum aliqua fugiat aute.
            Deserunt sint dolore pariatur et ea culpa officia laborum. Incididunt cillum pariatur magna eu ullamco reprehenderit in nisi
            sint.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
