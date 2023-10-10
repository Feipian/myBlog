

import React from "react";
import { Card, CardContent, CardHeader } from "semantic-ui-react";


const CardExampleCard = ({ weatherData }) => {
    // console.log('CardExample:', weatherData)
    return (

        <>
            <Card>
                <CardContent>
                    <CardHeader> { weatherData.name}</CardHeader>
                    <p>asdhjwfq</p>
                </CardContent>
            </Card>
        </>
    );
}

export default CardExampleCard;