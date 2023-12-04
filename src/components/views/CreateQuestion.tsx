
// import { BsPlusSquareFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import AppEnums from "../AppEnums";
import AddQuestionPage from "./AddQuestionPage";
import { useState } from "react";

interface IPageProp {
    handlePage: (page: AppEnums) => void;
    handleTabName: (tabName: string) => void;
}

const CreateQuestion: React.FC<IPageProp> = (pageProps) => {
    const handleCancel = () => {
        pageProps.handlePage(AppEnums.LIST)
    };
    const [showContent, setShowContent] = useState(false);
    const [showContentButton, setShowContentButton] = useState(true);

    const handleCreateSurveyPage = () => {
        pageProps.handleTabName("first")
    };

    const handleAddUserPage = () => {
        pageProps.handleTabName("third");
    };
    const handleQuesButtonClick = () => {
        setShowContent(true)
    }
    const handleQuestionShowButtonClick = () => {
        setShowContentButton(false)
    }
    return (
        <div className="content-border">
            <h3>Create questions</h3>
            <div onClick={handleQuestionShowButtonClick}>
                {showContentButton &&
                    (<div><Button className="quesBtn">Load from templates</Button>
                        &nbsp; or &nbsp;
                        <Button className="quesBtn" onClick={handleQuesButtonClick}>Add your own questions</Button>
                    </div>)}
            </div><br />

            <div>
                {
                    showContent && (<AddQuestionPage />)
                }
            
            <div>
                <Button variant="secondary" size="sm" onClick={handleCancel}> Cancel</Button>{' '}
                <Button variant="success" size="sm" onClick={handleCreateSurveyPage}>&laquo; Previous</Button>{' '}
                <Button variant="success" size="sm" onClick={handleAddUserPage}>Next  &raquo;</Button>
            </div>
        </div>
        </div>
    )
}

export default CreateQuestion;