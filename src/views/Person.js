import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import { Avatar, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "grid",
    borderBottom: "1px solid lightgray",
    paddingBottom: theme.spacing(3),
    gridTemplateColumns: "auto 1fr",
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: theme.spacing(2),
  },
  avatarSmall: {
    marginRight: theme.spacing(2),
  },
  personName: {
    fontWeight: "bold",
  },
  personLocation: {
    color: "#c4c4c4",
  },
  personNameSmall: {
    fontSize: 16,
    fontWeight: "bold",
  },
  personLocationSmall: {
    fontSize: 14,
    color: "#c4c4c4",
  },
}));

function Person({ username }) {
  const classes = useStyles();
  const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const [person, setPerson] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(`${BASE_URL}/users/${username}`);

      setPerson(response.data);
    }
    fetchUser();
  }, [username]);

  if (person) {
    return (
      <div>
        <div className={classes.card}>
          <Avatar
            alt={person.name}
            src={person.avatar_url}
            className={matches ? classes.avatar : classes.avatarSmall}
          />
          <div>
            <Typography variant="h6" className={matches ? classes.personName : classes.personNameSmall}>
              {person.name}
            </Typography>
            <Typography variant="body1" className={matches ? classes.personLocation : classes.personLocationSmall}>
              {person.location}
            </Typography>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Person;
