import React from "react";
import { Alert, AlertTitle } from "@mui/material";

export default function MessageBox(props) {
  const { error, setError } = props;

  return (
    <Alert className={error ? "d-flex" : "d-none"} severity="error">
      <AlertTitle>Error</AlertTitle>
      <b>{error}</b> This is an error alert — check it out!
    </Alert>
  );
}
