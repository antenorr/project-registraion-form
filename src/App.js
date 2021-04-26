import React, { StrictMode } from "react";
import { render } from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
//import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import RegistrationForm from "./RegistrationForm";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "LightSalmon",
    width: "100vw",
    height: "100vh",
    border: "1px solid red",
  },
  innerAppl: {
    width: "80vw",
    height: "80vh",
    border: "1px solid green",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "WhiteSmoke",
    borderRadius: "8px",
  },

  borderSee: {
    border: "1px solid peru",
  },
  header: {
    backgroundColor: "white",
    borderBottom: "1px solid LightGray",
  },
  nav: {
    border: " 1px solid orange",
    marginLeft: "auto",
    marginRight: "auto",
  },
  registrationBody: {
    backgroundColor: "WhiteSmoke",
    border: " 1px solid blue",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.innerAppl}>
        <Grid container className={classes.header} justify="space-between">
          <Grid item className={classes.borderSee} align="center" xs={3}>
            <Typography color="">Registrar</Typography>
          </Grid>
          <Grid item className={classes.borderSee} align="center" xs={3}>
            <Typography className={classes.borderSee} color="">
              Need Help{" "}
              <span>
                <HelpOutlineIcon />
              </span>
            </Typography>
          </Grid>
        </Grid>

        <nav className={classes.nav}>
          <Grid container className={classes.header}>
            <Grid item xs={9} align="center">
              Linear Stepper
            </Grid>
            <Grid item xs align="center">
              Changing Base info
            </Grid>
          </Grid>
        </nav>

        <body className={classes.registrationBody}>
          <RegistrationForm />
        </body>
      </div>
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
