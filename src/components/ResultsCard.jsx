import { useEffect } from "react";
import { Card } from "react-bootstrap";

export default function ResultsCard({ cpResult, isError }){
    return (
        <Card className="card-results" >
            <Card.Body>
                This meal has {cpResult} CP.
            </Card.Body>
        </Card>
    )
}