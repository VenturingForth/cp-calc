import { Form, Button } from "react-bootstrap";
import ResultsCard from "./ResultsCard";
import { useEffect, useState } from "react";
import { cpCalc } from "../../utility/cpCalc.js";
import { checkFormValidity } from "../../utility/checkFormValidity.js";

export default function Calculator() {
    const [ cpResult, setCpResult ] = useState(0);
    const [ formData, setFormData ] = useState({
        unitWeight: 0,
        carbWeight: 0,
        portionWeight: 0
    })

    const [ validated, setValidated ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        const validityCheck = checkFormValidity(formData);
        setIsError(validityCheck.isError);
        setErrors(validityCheck.errors);
    },[formData])

    function handleChange(event){
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: parseFloat(value)
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        const form = event.currentTarget;
        if (isError){
            event.stopPropagation();
        } else {
            setValidated(true);
            setCpResult(cpCalc(formData));
        }
    }

    return (
        <section>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="formInput">
                <Form.Label>Unit Weight (grams): </Form.Label>
                <Form.Control 
                    required
                    name="unitWeight"
                    type="number" 
                    step="0.1"
                    placeholder="Unit weight of food" 
                    onChange={(event) => handleChange(event)}
                    isInvalid={ errors.unitWeight }
                />
                <Form.Control.Feedback type="invalid">{ errors.unitWeight }</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="formInput">
                <Form.Label>Carbohydrates (grams): </Form.Label>
                <Form.Control 
                    required
                    name="carbWeight" 
                    type="number" 
                    step="0.1"
                    placeholder="Carbohydrates weight" 
                    onChange={(event) => handleChange(event)}
                    isInvalid={ errors.carbWeight }
                />
                <Form.Control.Feedback type="invalid">{ errors.carbWeight }</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="formInput portionInput">
                <Form.Label>Portion (grams): </Form.Label>
                <Form.Control 
                    required
                    name="portionWeight" 
                    type="number" 
                    step="0.1"
                    placeholder="My portion weight" 
                    onChange={(event) => handleChange(event)}
                    isInvalid={ errors.portionWeight }
                />
                <Form.Control.Feedback type="invalid">{ errors.portionWeight }</Form.Control.Feedback>
            </Form.Group>
            <div className="d-grid">
                <Button variant="primary" type="submit" className="btn-calculate">
                    Calculate
                </Button>
            </div>
        </Form>
        <ResultsCard 
            cpResult={cpResult}
            isError={isError}
        />
        </section>
    )
}