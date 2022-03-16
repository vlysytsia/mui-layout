import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";

const data = [
  {
    title: "Anim do cupidatat quis id Lorem adipisicing commodo.",
    description:
      "Veniam laboris in labore adipisicing cillum irure voluptate officia mollit eu ea sit. Duis cillum ipsum id id id et reprehenderit nisi laboris labore esse. Eiusmod Lorem do in laboris.",
  },
  {
    title: "Anim do cupidatat quis id Lorem adipisicing commodo.",
    description:
      "Veniam laboris in labore adipisicing cillum irure voluptate officia mollit eu ea sit. Duis cillum ipsum id id id et reprehenderit .",
  },
];

function Hero() {
  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1554477717-cad0b36509e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Hero"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              mb: 2,
            }}
          >
            {data.map((item) => (
              <Paper
                key={item.title}
                elevation={3}
                variant="outlined"
                sx={{
                  p: 2,
                  mb: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {isDataLoaded ? item.title : <Skeleton variant="text" />}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {isDataLoaded ? item.description : <Skeleton variant="rectangular" width="100%" height={130} />}
                </Typography>
              </Paper>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
