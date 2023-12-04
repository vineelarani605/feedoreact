import { useState } from "react";
import Button from 'react-bootstrap/Button';
import AppEnums from "../AppEnums";

interface IPageProp {
    handlePage: (page: AppEnums) => void;
    handleTabName: (tabName: string) => void;
};

interface FormData {
    title: string;
    startDate: string;
    endDate: string;
}
const SurveyCreate: React.FC<IPageProp> = (pageProp) => {

    const [formData, setFormData] = useState<FormData>({
        title: "",
        startDate: "",
        endDate: ""
    })
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    };

    const validateForm = () => {
        const newErrors: Partial<FormData> = {};

        if (!formData.title.trim()) {
            newErrors.title = "Title is reqired";
        }
        if (!formData.startDate.trim()) {
            newErrors.startDate = "Start date is required";
        }
        if (!formData.endDate.trim()) {
            newErrors.endDate = "End date is required";
        } else if (new Date(formData.endDate) < new Date(formData.startDate)) {
            newErrors.endDate = 'End date must be after start date';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, perform submission logic here
            console.log('Form submitted:', formData);
        } else {
            console.log('Form has errors. Please fix them.');
        }
    }
    const handleCancel = () => {
        pageProp.handlePage(AppEnums.LIST)
    }

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();

        const isFormValid = validateForm();
        if (isFormValid) {
            pageProp.handleTabName("second");
            console.log('Form submitted:', formData);
        }
    }

    return (

        <div className="content-border">
            <h3>Survey Details</h3>
            <div className="d-flex justify-content-center">
                <form className="input-container align-center" onSubmit={handleSubmit}>
                    <table className="table-align">
                        <tr>
                            <td><label htmlFor="title">Title <span style={{ color: 'red' }}>*</span></label></td>
                            <td>:</td>
                            <td>
                                <input type="text" id="title" name="title" placeholder="Enter survey title" className="margin5"
                                    value={formData.title} onChange={handleInputChange}
                                    style={{ borderColor: errors.title ? 'red' : '' }} />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="startDate">Start Date <span style={{ color: 'red' }}>*</span></label></td>
                            <td>:</td>
                            <td>
                                <input type="date" id="startDate" name="startDate" value={formData.startDate} className="margin5"
                                    onChange={handleInputChange} style={{ borderColor: errors.startDate ? 'red' : '' }} />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="endDate">End Date <span style={{ color: 'red' }}>*</span></label></td>
                            <td>: </td>
                            <td >
                                <input type="date" id="endDate" name="endDate" value={formData.endDate} className="margin5"
                                    onChange={handleInputChange} style={{ borderColor: errors.endDate ? 'red' : '' }} /><br />
                                {errors.endDate && <span style={{ color: "red" }}>{errors.endDate}</span>}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>{' '}
                                <Button variant="success" size="sm" type="submit" onClick={handleNext} >Next &raquo;</Button>{" "}
                                {/* <Button variant="primary" type="submit" size="sm" >Create</Button> */}
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default SurveyCreate;