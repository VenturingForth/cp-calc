import { Accordion, Table } from "react-bootstrap";

export default function Instructions(){
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Instructions</Accordion.Header>
                <Accordion.Body>
                    <h6>Entering information from a food nutrition label.</h6>
                    <p>
                        This tool is designed to assist Type 1 Diabetics who have completed the DAFNE training course, and will help you calculate the number of carbohydrate portions in a meal using information found in Carbs & Cals or on a nutrition label.
                    </p>                        
                    <p>
                        Unit Weight refers to the serving size or 100g column on the nutrition label. Only use information from ONE of these columns.
                    </p>
                    <p>
                        Carbohydrates refers to the weight of the carbohydrates within that unit weight column. This weight should never be higher than the unit weight.
                    </p>
                    <p>
                        You will need to weigh your portion and enter this into the portion weight for the most accurate result. Alternatively, if you have a good idea of what your serving size will be, you can also enter that here.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Examples</Accordion.Header>
                <Accordion.Body>
                    <h6>Example 1: Snickers Bar (Using Serving Size)</h6>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="td td--example-hilight">Typical Values</th>
                                <th>Per 100g</th>
                                <th className="td td--example-hilight">Per Serving Size (48g)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Energy</td>
                                <td>2072kJ</td>
                                <td>994kJ</td>
                            </tr>
                            <tr>
                                <td>Fat</td>
                                <td>25g</td>
                                <td>12g</td>
                            </tr>
                            <tr>
                                <td>of which saturates</td>
                                <td>8.4g</td>
                                <td>4.0g</td>
                            </tr>
                            <tr>
                                <td className="td td--example-hilight">Carbohydrates</td>
                                <td>58g</td>
                                <td className="td td--example-hilight">28g</td>
                            </tr>
                            <tr>
                                <td>of which sugars</td>
                                <td>49g</td>
                                <td>23g</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p>
                        Assuming we're having one serving of the Snickers bar (48g), we need only the information from this column. You would put 48 in the Unit Weight, 28 into the Carbohydrates and 48 into the Portion (resulting in 3 CP). If you decided to eat 2 Snickers bars, double the portion size to give yourself 96g of Snickers (which would calculate to 5½ CP).
                    </p>
                    <h6>Example 2: Tesco Beef Lasagne (Using 100g)</h6>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="td td--example-hilight">Typical Values</th>
                                <th>Per 100g</th>
                                <th className="td td--example-hilight">Per Serving Size (375g)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Energy</td>
                                <td>566kJ</td>
                                <td>2121kJ</td>
                            </tr>
                            <tr>
                                <td>Fat</td>
                                <td>6.6g</td>
                                <td>24.7g</td>
                            </tr>
                            <tr>
                                <td>of which saturates</td>
                                <td>3.2g</td>
                                <td>12.0g</td>
                            </tr>
                            <tr>
                                <td className="td td--example-hilight">Carbohydrates</td>
                                <td>11.1g</td>
                                <td className="td td--example-hilight">41.6g</td>
                            </tr>
                            <tr>
                                <td>of which sugars</td>
                                <td>2.1g</td>
                                <td>7.9g</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p>
                        Because we can never trust ourselves to have the recommended serving size, we're just going to scoop it out of the dish and hurl it into our bowl which has already been zeroed on the scales. Our portion size comes to 515g. Using the 100g table, you put 100 into the Unit Weight, 11.1 into Carbohydrates and 515 into the portion size. Once you hit calculate, this gives you 5½ CP for that bowl of lasagne.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Help with your diabetes.</Accordion.Header>
                <Accordion.Body>
                    <p>
                        This tool is not meant to be a replacement for the support you can obtain from your local healthcare professionals and the DAFNE program.
                    </p>
                    <p>
                        As a solo junior developer, I will not be implementing any features that will calculate insulin doses for you (at least not without consultation with trained medical staff, and under the guidance of a senior developer). 
                    </p>
                    <p>
                        If you are uncertain as to your insulin to carbohydrate ratio, please talk to your specialist diabetic nursing team and consult your DAFNE blood glucose diary and training materials.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}