import { Form, Button } from "react-bootstrap";
import ResultsCard from "./ResultsCard";
import { useState } from "react";
import { cpCalc } from "../../utility/cpCalc.js";

const [unitWeight, setUnitWeight] = useState(100);
const [carbs, setCarbs] = useState(0);
const [portion, setPortion] = useState(0);
const [cpResult, setCpResult] = useState(0);

function calculateButton(){
    
}

export default function Calculator() {
    return (
        <>
        <Form>
            <Form.Group className="">
                <Form.Label>Unit Weight: </Form.Label>
                <Form.Control size="lg" type="text" placeholder="Unit weight of food" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Carbohydrates: </Form.Label>
                <Form.Control size="lg" type="text" placeholder="Carbohydrates weight" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Portion: </Form.Label>
                <Form.Control size="lg" type="text" placeholder="My portion weight" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => calculateButton()}>
                Calculate
            </Button>
        </Form>
        <ResultsCard cpResult={cpResult} />
        </>
    )
}