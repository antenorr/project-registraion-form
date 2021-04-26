import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RegistrationInputs from "./RegistrationInputs";
import RegistrationDomain from "./RegistrationDomain";

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={5} align="left">
          <RegistrationDomain />
        </Grid>
        <Grid item xs={7} align="center">
          <RegistrationInputs />
        </Grid>
      </Grid>
    </div>
  );
};

export default RegistrationForm;
