import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export default function ResultsCard({ cpResult, isError }){
    const [resultMessage, setResultMessage] = useState(`This meal has ${cpResult} CP in it.`);
    useEffect(() => {
        if (isError){
            setResultMessage(`Please check you have filled in the form correctly.`)
        } else {
            setResultMessage(`This meal has ${cpResult} CP in it.`);
        }
    }, [isError, cpResult])

    return (
        <section>
            <Card className="card-results" >
                <Card.Body>
                    <h3>Result:</h3>
                    {resultMessage}
                </Card.Body>
            </Card>
        </section>
    )
}