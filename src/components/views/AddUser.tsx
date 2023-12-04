import Button from 'react-bootstrap/Button';
import React from "react";
import AppEnums from "../AppEnums";

interface IPageProp {
    handlePage: (page: AppEnums) => void;
    handleTabName: (tabName: string) => void;
};

const AddUser: React.FC<IPageProp> = (pageProp) => {

    const handleCreateQuestion =() =>{
        pageProp.handleTabName("second")
    }
    const handleCancel = () => {
        pageProp.handlePage(AppEnums.LIST)
    }
    return (
        <div className="content-border">
            <h3 >Add Users</h3>
            <p></p><br /><br />
            <div>
                <Button variant="secondary" size="sm" onClick={handleCancel}> Cancel</Button>{' '}
                <Button variant="success" size="sm" onClick={handleCreateQuestion}>&laquo; Previous</Button>{' '}
                <Button variant="primary" size="sm" >Save</Button>
            </div>
        </div>
    )
}
export default AddUser;