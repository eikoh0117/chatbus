import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          bus
        </Grid>
        <Grid item xs={6}>
          main
        </Grid>
        <Grid item xs={3}>
          user
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
