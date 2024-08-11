import React from "react";
import { Backdrop as MuiBackdrop } from "@mui/material";

const Backdrop = (props) => {
  return <MuiBackdrop open={true} onClick={props.onClose} />;
};

export default Backdrop;
