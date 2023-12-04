import AppEnums from "../AppEnums";
import TabPage from "./TabPage"

interface IPageProp {
    handlePage: (page: AppEnums) => void;
  }

const SurveyPage: React.FC<IPageProp> = (pageProps) => {

    return (
        <div>
            <TabPage handlePage={pageProps.handlePage}/>
        </div>
    )
}
export default SurveyPage;