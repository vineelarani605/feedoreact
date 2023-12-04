import { Badge } from "react-bootstrap";
import UsersSurveySummary from "../models/mock-responses/UsersSurveySummary";
import AppEnums from "../AppEnums";

interface IPageProp {
  handlePage: (page: AppEnums) => void;
}

const SurveySummary: React.FC<IPageProp> = (pageProp) => {

  const loadCreateSurveyPage = () => {
    pageProp.handlePage(AppEnums.CREATE_SURVEY)
  }


  return (
    <div className="padding10 s-summary">
      <div className="align-left">
        <p>
          You have <Badge>{UsersSurveySummary.incompleteCount}</Badge> surveys.
          Please click <a href="#">Here</a> to complete them.
        </p>
      </div>
      <div className="align-right">
        <button className="btn btn-primary" onClick={loadCreateSurveyPage}>Create</button>
      </div>
    </div>
  );
}

export default SurveySummary;
