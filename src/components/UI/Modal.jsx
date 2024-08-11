import React from "react";
import ReactDOM from "react-dom";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const Modal = (props) => {
  const { open, onClose, title, children, actions } = props;

  return ReactDOM.createPortal(
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {actions && (
        <DialogActions>
          {actions.map((action, index) => (
            <Button key={index} onClick={action.onClick} color="primary">
              {action.label}
            </Button>
          ))}
        </DialogActions>
      )}
    </Dialog>,
    document.getElementById("overlays")
  );
};

export default Modal;
