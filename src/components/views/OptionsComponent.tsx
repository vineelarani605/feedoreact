import { useState } from "react";
import { Button } from "react-bootstrap";
import OptionsDialogueBox from "./OptionsDialogueBox";
import { CiCircleMinus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { TbCircleCheck } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";

interface IPageProp {
  options: string[];
}

const OptionsComponent: React.FC<IPageProp> = (pageProp) => {
  const [qtsOptions, setQtsOptions] = useState(pageProp.options);
  const [isQtsOptionsEditing, setIsQtsOptionsEditing] = useState(false);
  const [optToEditObj, setOptToEditObj] = useState({ index: -1, value: "" });

  const handleDoubleClick = (index: number, optToShow: string) => {
    setOptToEditObj({ index: index, value: optToShow });
    setIsQtsOptionsEditing(true);
  };
  const handleSave = (index: number) => {
    const updatedOptions = qtsOptions;
    updatedOptions.forEach((o, oIndex) => {
      if (index === oIndex) {
        updatedOptions[index] = optToEditObj.value;
      }
    });
    setQtsOptions(updatedOptions);
    // setOptToEditObj({index: -1, value: ""});
    setIsQtsOptionsEditing(false);
  };

  const handleCancel = (index: number) => {
    setQtsOptions(qtsOptions);
    setIsQtsOptionsEditing(false);
  };
  return (
    <>
      <div>
        {qtsOptions.map((opt, index) => (
          <div key={index} className="optionView optItem">
            {isQtsOptionsEditing && optToEditObj.index === index ? (
              <div>
                <input
                  type="text"
                  value={optToEditObj.value}
                  onChange={(e) =>
                    setOptToEditObj({ index: index, value: e.target.value })
                  }
                  autoFocus
                />
                <TbCircleCheck
                  className="iconDDim optSaveIcon"
                  onClick={() => handleSave(index)}
                />
                <MdOutlineCancel
                  className="iconDDim optCanceIcon"
                  onClick={() => handleCancel(index)}
                />
              </div>
            ) : (
              <div onDoubleClick={() => handleDoubleClick(index, opt)}>
                {opt}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default OptionsComponent;
