import { Form, Button } from "react-bootstrap";
import ResultsCard from "./ResultsCard";
import { useState } from "react";
import { cpCalc } from "../../utility/cpCalc.js";

export default function Calculator() {
    const [ cpResult, setCpResult ] = useState(0);
    // const [ unitWeight, setUnitWeight ] = useState(0);
    // const [ carbWeight, setCarbWeight ] = useState(0);
    // const [ portionWeight, setPortionWeight ] = useState(0);
    const [ formData, setFormData ] = useState({
        unitWeight: 0,
        carbWeight: 0,
        portionWeight: 0
    })

    const [ isError, setIsError ] = useState(false);
    const [ errors, setErrors ] = useState({});
    
    function handleChange(event){
        const { name, value } = event.target;
        if (value < 0){
            setErrors({...errors,
                [name]: "You must enter a number greater than zero."
            });
            console.log(errors);
        } else {
            setErrors({...errors,
                [name]: undefined
            });
            if (Object.keys(errors).length === 0) {
                setIsError(false);
            }
            setFormData({...formData,
                [name]: value
            });
            console.log(formData);
            console.log(errors);
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        setCpResult(cpCalc(formData));
    }

    return (
        <>
        <Form>
            <Form.Group>
                <Form.Label>Unit Weight (grams): </Form.Label>
                <Form.Control 
                    required
                    name="unitWeight"
                    type="number" 
                    placeholder="Unit weight of food" 
                    onChange={() => handleChange(event)}
                />
                {errors.unitWeight && <Form.Text className="error">{errors.unitWeight}</Form.Text>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Carbohydrates (grams): </Form.Label>
                <Form.Control 
                    required
                    name="carbWeight" 
                    type="number" 
                    placeholder="Carbohydrates weight" 
                    onChange={() => handleChange(event)} 
                />
                {errors.carbWeight && <Form.Text className="error">{errors.carbWeight}</Form.Text>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Portion (grams): </Form.Label>
                <Form.Control 
                    required
                    name="portionWeight" 
                    type="number" 
                    placeholder="My portion weight" 
                    onChange={() => handleChange(event)}
                />
                {errors.portionWeight && <Form.Text className="error">{errors.portionWeight}</Form.Text>}
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => {handleSubmit(event)}} >
                Calculate
            </Button>
        </Form>
        <ResultsCard 
            cpResult={cpResult}
        />
        </>
    )
}