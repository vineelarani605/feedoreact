import Survey from "../models/Survey";
import Accordion from "react-bootstrap/Accordion";

interface ISurveyProp {
  surveys: Survey[];
}

const SurveysList: React.FC<ISurveyProp> = (prop) => {
  const { surveys } = prop;
  
  return (
    <div className="padding0">
      <Accordion defaultActiveKey= "0">
      {surveys.map((survey, index) => {
        return (
          <div>   
                <Accordion.Item eventKey={index + ""} className="margin-bottom">
                  <Accordion.Header>{survey.name}</Accordion.Header>
                  <Accordion.Body className="scrolling scrollbar">
                    {survey.questions.map((item, qIndex) => (
                      <div className="questionBox">
                        <p key={item.id} className="question">
                          Question {qIndex + 1}: {item.name}
                        </p>
                        <p>
                          {item.options?.map((ans, optIntex) => (
                            <div className="">
                              <p className="options">{optIntex + 1} : {ans}</p>
                            </div>
                          ))}
                        </p>
                        <p className="answer">Answer : {item.ans}</p>
                      </div>

                    ))}
                  </Accordion.Body>
                </Accordion.Item>
          </div>
        );
      })}
       </Accordion>
    </div>
  );
};

export default SurveysList;
