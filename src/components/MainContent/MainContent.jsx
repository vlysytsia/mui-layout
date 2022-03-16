import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import SendIcon from "@mui/icons-material/Send";

function MainContent() {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            variant="outlined"
            sx={{
              p: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Aliqua tempor ad eu tempor ipsum et eiusmod irure in. Labore ut consectetur id elit eiusmod nisi et Lorem Lorem excepteur elit
              irure dolor. Commodo laboris est consequat enim irure nostrud quis ipsum.
            </Typography>
            <Button variant="contained">Lorem</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            variant="outlined"
            sx={{
              p: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Dolore tempor aliqua magna mollit ut ipsum sint sunt consectetur reprehenderit est cupidatat occaecat. Eu id in pariatur
              cillum amet deserunt voluptate aute cupidatat labore officia enim.
            </Typography>
            <Button variant="contained">Lorem</Button>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ py: 2 }}>
        <Typography variant="h5">Lorem ipsum dolor sit amet</Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom align="center">
              Lorem ipsum dolor
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
              Lorem ipsum dolor
            </Typography>

            <CardMedia
              component="img"
              height="194"
              image="https://images.unsplash.com/photo-1554477717-cad0b36509e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Paella dish"
              sx={{ pb: 2 }}
            />

            <Button fullWidth variant="contained" endIcon={<SendIcon />}>
              Lorem
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom align="center">
              Lorem ipsum dolor
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
              Lorem ipsum dolor
            </Typography>

            <CardMedia
              component="img"
              height="194"
              image="https://images.unsplash.com/photo-1554477717-cad0b36509e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Paella dish"
              sx={{ pb: 2 }}
            />

            <Button fullWidth variant="contained" endIcon={<SendIcon />}>
              Lorem
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom align="center">
              Lorem ipsum dolor
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
              Lorem ipsum dolor
            </Typography>

            <CardMedia
              component="img"
              height="194"
              image="https://images.unsplash.com/photo-1554477717-cad0b36509e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Paella dish"
              sx={{ pb: 2 }}
            />

            <Button fullWidth variant="contained" endIcon={<SendIcon />}>
              Lorem
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom align="center">
              Lorem ipsum dolor
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
              Lorem ipsum dolor
            </Typography>

            <CardMedia
              component="img"
              height="194"
              image="https://images.unsplash.com/photo-1554477717-cad0b36509e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Paella dish"
              sx={{ pb: 2 }}
            />

            <Button fullWidth variant="contained" endIcon={<SendIcon />}>
              Lorem
            </Button>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", py: 6, justifyContent: "center" }}>
        <Button color="success" variant="contained" endIcon={<SendIcon />}>
          Lorem ipsum
        </Button>
      </Box>
    </Container>
  );
}

export default MainContent;
