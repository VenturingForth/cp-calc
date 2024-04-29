import { Form, Button } from "react-bootstrap";
import ResultsCard from "./ResultsCard";

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
            <Button variant="primary">
                Calculate
            </Button>
        </Form>
        <ResultsCard />
        </>
    )
}