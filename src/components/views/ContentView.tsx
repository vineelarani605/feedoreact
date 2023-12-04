import SurveySummary from "./SurveySummary";
import MockSurveylist from "../models/mock-responses/MockSurveylist";
import SurveysList from "./SurveysList";
import { useState } from "react";
import AppEnums from "../AppEnums";
import SurveyPage from "./SurveyPage";

const ContentView: React.FC = () => {
    const [pageToShow, setPageToShow] = useState(AppEnums.LIST);

    const handlePage = (page: AppEnums) => {
        setPageToShow(page)
    }
    return (
        <div className="container">
            <div className="row">
                <SurveySummary handlePage={handlePage}></SurveySummary>
            </div>
            <div className="row">
                {
                    pageToShow === AppEnums.LIST && <SurveysList surveys={MockSurveylist} />
                }
                {
                    pageToShow === AppEnums.CREATE_SURVEY && <SurveyPage handlePage={handlePage} />
                }
                {
                    pageToShow === AppEnums.CREATE_QUESTION && <SurveyPage handlePage={handlePage} />
                }
                {
                    pageToShow === AppEnums.ADD_USER && <SurveyPage handlePage={handlePage} />
                }
            </div>
        </div>
    )
}

export default ContentView;