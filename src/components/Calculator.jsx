import { Form, Button } from "react-bootstrap";
import ResultsCard from "./ResultsCard";
import { useState } from "react";
import { cpCalc } from "../../utility/cpCalc.js";

export default function Calculator() {
    const [ cpResult, setCpResult ] = useState(0);
    const [ unitWeight, setUnitWeight ] = useState(100);
    const [ carbWeight, setCarbWeight ] = useState(0);
    const [ portionWeight, setPortionWeight ] = useState(0);

    function handleButtonClick(){
        event.preventDefault();
        setCpResult(cpCalc(unitWeight, carbWeight, portionWeight));
    }

    return (
        <>
        <Form>
            <Form.Group>
                <Form.Label>Unit Weight (grams): </Form.Label>
                <Form.Control 
                    id="unitWeightInput" 
                    size="lg" 
                    type="text" 
                    placeholder="Unit weight of food" 
                    onChange={e => setUnitWeight(e.target.value)} 
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Carbohydrates (grams): </Form.Label>
                <Form.Control 
                    id="carbInput" 
                    size="lg" 
                    type="text" 
                    placeholder="Carbohydrates weight" 
                    onChange={e => setCarbWeight(e.target.value)} 
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Portion (grams): </Form.Label>
                <Form.Control 
                    id="portionInput" 
                    size="lg" 
                    type="text" 
                    placeholder="My portion weight" 
                    onChange={e => setPortionWeight(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => {handleButtonClick()}} >
                Calculate
            </Button>
        </Form>
        <ResultsCard 
            cpResult={cpResult}
        />
        </>
    )
}