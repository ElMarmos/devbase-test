import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function Home({ users, setPerson }) {
  const classes = useStyles();

  return (
    <div>
      {users.map((username) => (
        <Button
          key={username}
          variant="contained"
          color="primary"
          className={classes.button}
          value={username}
          onClick={() => setPerson(username)}
        >
          {username}
        </Button>
      ))}
    </div>
  );
}

export default Home;
