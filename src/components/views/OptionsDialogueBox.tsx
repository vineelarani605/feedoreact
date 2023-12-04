import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Question } from "../models/Survey";
import { LuMinusCircle } from "react-icons/lu";

interface IPageProp {
  showModal: boolean;
  handleClose: (qtsList: Question[]) => void;
  // handleClose: () => void;
  questionToUpdate: Question;
  questionsList: Question[];
}

const options: string[] = [];
const ansCssClassName = "";
const OptionsDialogueBox: React.FC<IPageProp> = (pageProp) => {
  const {options} = pageProp.questionToUpdate;  
  const [qtsOptions, setQtsOptions] = useState(options === undefined ? []: options);
  const [opt, setOpt] = useState("");
  const [optsLimitError, setOptsLimitError] = useState(false);  

  const addOptToQuestion = () => {   
    if(qtsOptions.length <= 4){      
      if(!optsLimitError && opt && opt.length > 0){
        setQtsOptions([...qtsOptions, opt]);
        setOpt("");
      }
    }else{
      setOptsLimitError(true);
    }    
  }
  const handleSave = () => {
    const qToUpdate = pageProp.questionToUpdate;
    if (qToUpdate.options && qToUpdate.options.length > 0) {
      qToUpdate.options = [...qToUpdate.options, ...qToUpdate.options];     
      qToUpdate.options = qtsOptions;
    } else {
      qToUpdate["options"] = qtsOptions;
    }
    //Update the modified question object into the list of questions
    const tempQList = [...pageProp.questionsList];
    tempQList.forEach((qItem) => {
      if (qItem.id === qToUpdate.id) {
        qItem = qToUpdate;
      }
    });
    // console.log("updatedList from opt dialogue: "+ JSON.stringify(tempQList))
    pageProp.handleClose(tempQList);
    // pageProp.handleClose();
  }
 
  const removeOptFromQuestion = (ansIndex: number) =>{
    setQtsOptions(qtsOptions.filter((q,index) => index !== ansIndex));
    setOptsLimitError(!(qtsOptions.length <= 5));
  }

  return (
    <Modal show={pageProp.showModal} onHide={handleSave}>
      <Modal.Header closeButton>
        <Modal.Title>
          You are adding options to <br></br>
          <strong>{pageProp.questionToUpdate.name}</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>        
          {qtsOptions.map((opt, index) => (
            <div key={index} className="ansItemWdith ">
              <div className="ansItem scrolling">                
                {opt}
              </div>
              <LuMinusCircle onClick={() => removeOptFromQuestion(index)} className="margin5 iconDDim redColor"/>
            </div>
          ))}
        <br></br>
        {
          optsLimitError && <p className="errMsg">Only upto five options are allowed to add for one question.</p>
        }
        <hr></hr>        
        <div className="ansItemWdith">
          <input
            type="text"
            placeholder="Enter your option"
            value={opt}
            onChange={(e) => setOpt(e.target.value)}
            className="ansItemWdith"
            />
            <button onClick={addOptToQuestion} className="margin5 btn btn-primary btn-sm">Add</button>            
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={handleSave}>
          Close
        </Button>
        <Button variant="primary" size="sm" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default OptionsDialogueBox;
