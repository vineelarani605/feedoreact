import { Button } from "react-bootstrap";
import { useState } from "react";
import { Question } from "../models/Survey";
import Accordion from "react-bootstrap/Accordion";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPlusSquare } from "react-icons/lu";
import OptionsDialogueBox from "./OptionsDialogueBox";
import QuestionComponent from "./QuestionDialogueBox";
import { TbCircleCheck } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";

interface IPageProp {
  options: string[];
}

const questionsList2: Question[] = [];
let tempQobject: Question = {
  id: -1,
  name: " ",
};
const inputFldCSS = "fill-width inputFld";
const inputFldErrorCSS = "errorBorder fill-width";

const AddQuestionPage: React.FC = () => {
  const [questionsList, setQuestionsList] = useState(questionsList2);
  const [qtsName, setQtsName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [hoveredQues, setHoveredQues] = useState(null);
  const [questionToUpdate, setQuestionToUpdate] = useState(tempQobject);
  const [inputCss, setInputCss] = useState(inputFldCSS);
  const [qtsShowModal, setQtsShowModal] = useState(false);
  const [isQtsOptionsEditing, setIsQtsOptionsEditing] = useState(false);
  const [optToEditObj, setOptToEditObj] = useState({ qId: -1, index: -1, value: "" });


  const handleAddQuestionField = () => {
    //Build the question object
    const totalQuestions = questionsList.length;
    const qId = totalQuestions > 0 ? totalQuestions + 1 : 1;
    const qName = qtsName;
    const qObject = {
      id: qId, name: qName
    }
    if (qName.length !== 0) {
      setQuestionsList((p) => ([...p, qObject]))
      //Reset the entered feild after it is added to list
      setQtsName("");
      setInputCss(inputFldCSS)
    } else {
      setInputCss(inputFldErrorCSS)
    }
  };

  const handleMouseEnter = (index: any) => {
    setHoveredQues(index);
  };

  const handleMouseLeave = () => {
    setHoveredQues(null);
  };

  const handleShow = (qId: number) => {
    const question = questionsList.find((q) => q.id === qId);
    if (question) {
      setQuestionToUpdate(question);
      setShowModal(true);
    }
  }
  const handleClose = (updatedQtsList: Question[]) => {
    setQuestionsList(updatedQtsList);
    setShowModal(false);
  }

  const qtsHandleShow = (qId: number) => {
    const question = questionsList.find((q) => q.id === qId);
    if (question) {
      setQuestionToUpdate(question);
      setQtsShowModal(true);
    }
  }

  const saveModifiedQuestion = (questionTOUpdate: Question) => {
    //check the question index in list
    questionsList.forEach(qts => {
      if (qts.id === questionTOUpdate.id) {
        qts = questionTOUpdate;
      }
    });
    setQuestionsList(questionsList);
    setShowModal(false)
  }

  const handleDoubleClick = (qId: number, index: number, optToShow: string) => {
    setOptToEditObj({ qId: qId, index: index, value: optToShow });
    setIsQtsOptionsEditing(true);
  };

  const handleSave = (index: number) => {
    questionsList.forEach((q, qIndex) => {
      if (q.id === optToEditObj.qId) {
        q.options?.forEach((opt, optIndex) => {
          const indexToUpdate = optToEditObj.index;
          if (q.options && q.options.length > 0) {
            let newArray = [...q.options.slice(0, indexToUpdate), optToEditObj.value, ...q.options.slice(indexToUpdate + 1)];
            q.options = newArray;
          }
        })
      }
    });
    setQuestionsList(questionsList)
    setOptToEditObj({ qId: -1, index: -1, value: "" });
    setIsQtsOptionsEditing(false);
  };

  const handleCancel = (index: number) => {
    setIsQtsOptionsEditing(false);
  };

  return (
    <div>
      <div>
        <Accordion defaultActiveKey="0">
          {questionsList.map((q, index) => {
              return (
                <div className="word-break">
                  <Accordion.Item eventKey={index + ""} className="margin-bottom">
                    <Accordion.Header
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="quesItem">
                        <div><strong>{q.id} . {q.name}</strong></div>
                      </div>
                      <div className={`button-container ${hoveredQues === index ? "visible" : "hidden"}`}>
                        <LuPlusSquare className="icon-bg" />
                        {<CiEdit className="icon-bg" onClick={() => qtsHandleShow(q.id)} />}
                        {qtsShowModal && (
                          <QuestionComponent qtsShowModal={qtsShowModal} questionToUpdate={questionToUpdate}
                            handleQtsUpdate={() => saveModifiedQuestion(questionToUpdate)}
                            handleClose={() => handleClose(questionsList)}
                          />
                        )}

                        <RiDeleteBin6Line className="delete-button icon-bg" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {q.options && q.options.length > 0 ?
                        <div>
                          <div>
                            {q.options.map((opt, index) => (
                              <div key={index} className="optionView optItem">
                                {isQtsOptionsEditing && optToEditObj.index === index ? (
                                  <div>
                                    <input
                                      type="text"
                                      value={optToEditObj.value}
                                      onChange={(e) =>
                                        setOptToEditObj({ qId: q.id, index: index, value: e.target.value })
                                      }
                                      autoFocus
                                    />
                                    <TbCircleCheck
                                      className="iconDDim optSaveIcon"
                                      onClick={() => handleSave(index)}
                                    />
                                    <MdOutlineCancel
                                      className="iconDDim redColor"
                                      onClick={() => handleCancel(index)}
                                    />
                                  </div>
                                ) : (
                                  <div onClick={() => handleDoubleClick(q.id, index, opt)}>
                                    {opt}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                          <br></br>
                          {q.options.length < 5 &&
                            <p>Please click
                              <button className="clickHereBtn" onClick={() => handleShow(q.id)} >
                                Here
                              </button> to add more options.
                            </p>
                          }
                        </div>
                        :
                        <div>
                          <p>No options added yet. Please click{" "}
                            <button className="clickHereBtn" onClick={() => handleShow(q.id)} >
                              Here
                            </button>
                            to add.
                          </p>
                        </div>
                      }
                      {showModal && (
                        <OptionsDialogueBox
                          showModal={showModal}
                          handleClose={() => handleClose(questionsList)}
                          questionToUpdate={questionToUpdate}
                          questionsList={questionsList}
                        />
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              );
            })}          
        </Accordion>
      </div>
      <div className="quesFieldContainer">
        <div>
          <input className={inputCss}
            onChange={(e) => setQtsName(e.target.value)}
            id="qts"
            value={qtsName}
            placeholder="Enter something here to add as question to your survey"
          />
          <br />
          <Button
            variant="primary"
            size="sm"
            onClick={handleAddQuestionField}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AddQuestionPage;
