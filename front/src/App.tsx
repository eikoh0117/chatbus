import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  makeStyles,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import SendIcon from "@material-ui/icons/Send";

interface Props {}

const useStyles = makeStyles((theme) => ({
  red: {
    // marginTop: theme.spacing(8),
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    backgroundColor: red[500],
  },
}));

const App: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.red}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <SendIcon />
                hitchhikers
              </ListSubheader>
            }
          >
            <ListItem button>
              <ListItemText primary="username" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
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
