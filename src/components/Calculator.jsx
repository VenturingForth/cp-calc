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
        <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Unit Weight (grams): </Form.Label>
                <Form.Control 
                    required
                    name="unitWeight"
                    type="number" 
                    placeholder="Unit weight of food" 
                    onChange={(event) => handleChange(event)}
                    isInvalid={ errors.unitWeight }
                />
                <Form.Control.Feedback type="invalid">{ errors.unitWeight }</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Carbohydrates (grams): </Form.Label>
                <Form.Control 
                    required
                    name="carbWeight" 
                    type="number" 
                    placeholder="Carbohydrates weight" 
                    onChange={(event) => handleChange(event)}
                    isInvalid={ errors.carbWeight }
                />
                <Form.Control.Feedback type="invalid">{ errors.carbWeight }</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Portion (grams): </Form.Label>
                <Form.Control 
                    required
                    name="portionWeight" 
                    type="number" 
                    placeholder="My portion weight" 
                    onChange={(event) => handleChange(event)}
                    isInvalid={ errors.portionWeight }
                />
                <Form.Control.Feedback type="invalid">{ errors.portionWeight }</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" >
                Calculate
            </Button>
        </Form>
        <ResultsCard 
            cpResult={cpResult}
            isError={isError}
        />
        </>
    )
}