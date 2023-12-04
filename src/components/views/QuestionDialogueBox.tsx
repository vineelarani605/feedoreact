import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import { Question } from "../models/Survey";


interface IPageProp{
    qtsShowModal: boolean;
    questionToUpdate: Question;
    handleQtsUpdate : (modifiedQts: Question) => void;
    handleClose:() => void;
    // handleUpdatedQuestions : (qtsList: Question[]) => void;
}

const name : string = "";
const QuestionComponent: React.FC<IPageProp> = (pageProp) => {

    const{name} = pageProp.questionToUpdate;
    const [qtsEditing, setQtsEditing] = useState(name === undefined ? "" : name); 

    const qtsHandleSave = () => {    
        pageProp.questionToUpdate.name = qtsEditing;
        pageProp.handleQtsUpdate(pageProp.questionToUpdate);
        setQtsEditing("");      
    };

    return (
        <>
            <Modal show = {pageProp.qtsShowModal} onHide={qtsHandleSave}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        You are editing the question  <br />
                        <strong>{pageProp.questionToUpdate.name}</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="text" value={qtsEditing} 
                        onChange={(e) =>setQtsEditing(e.target.value)}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" size="sm" onClick={qtsHandleSave}>Close</Button>
                    <Button variant="primary" size="sm" onClick={qtsHandleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default QuestionComponent;