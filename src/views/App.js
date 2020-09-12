import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import React, { useState } from "react";
import { USERS } from "../constants";
import Home from "./Home";
import Person from "./Person";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#3b89ff",
    },
    secondary: {
      main: "#282828",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    padding: theme.spacing(2),
  },
  filler: {
    width: 84,
  },
}));

function App() {
  const classes = useStyles();
  const [person, setPerson] = useState(null);

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <AppBar position="static" color="secondary">
        <Toolbar>
          {person ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setPerson(null)}
            >
              <ArrowBackIcon /> <Typography variant="body1">Back</Typography>
            </IconButton>
          ) : null}

          <Typography variant="h6" className={classes.title}>
            {person ? "Person" : "Home"}
          </Typography>
          {person ? <div className={classes.filler} /> : null}
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          {!person ? (
            <Home users={USERS} setPerson={setPerson} />
          ) : (
            <Person username={person} />
          )}
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
