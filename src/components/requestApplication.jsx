import { useContext } from "react";
import { DashboardDispatch } from "../contexts/DashboardContext";
import { Button } from "@mui/material";
import documentStatus from "../utils/documentStatus";

export default function ViewRequestApplication({ response }) {
  const { step } = response;
  const applicationStatus = documentStatus(step);
  const dispatch = useContext(DashboardDispatch);

  const handleOpenRequestDrawer = () => {
    dispatch({ type: "OPEN_FULL_MODAL", index: 1 });
  }

  return (
    <div className={`application__submits`}>
      <div className="application__request">
        <div className="application__request--info">
          <h3 className="submission-info">
            Заявка ID: 1249093458
          </h3>
          <p className="submission-date text-disabled">
            от 15 октября 2022 г в. 16:56
          </p>
        </div>
        <div className={'application__request--status'}>
          <Button 
            className={`status-view-button app-button circle--${applicationStatus.class}`}
            onClick={handleOpenRequestDrawer}
          >
            {applicationStatus.text}
          </Button>
        </div>
      </div>
    </div>
  );
}
