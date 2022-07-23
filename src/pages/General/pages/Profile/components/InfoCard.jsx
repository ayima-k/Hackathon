import React from 'react';
import {Button} from "@mui/material";
import {FiEdit} from "react-icons/fi";

function InfoCard({title, text}) {
  return (
    <>
        <div className="d-flex ">
          <div className="col-md-4">
            <h5>{title}</h5>
          </div>
          <div className="col-md-6 text-secondary">
            {text}
          </div>
          <Button>
            <FiEdit/>
          </Button>
        </div>
        <hr/>
    </>
  );
}

export default InfoCard;