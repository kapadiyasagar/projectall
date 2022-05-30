import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function Medicine({ data }) {
    return (
        data.map((d, i) =>

            <div className='col-lg-4'>
                <Card>
                    <CardBody>
                        <CardTitle>{d.name}</CardTitle>
                        <CardSubtitle>{d.price}</CardSubtitle>
                        <CardText>{d.expiry}</CardText>
                        <Button>Delete</Button>
                    </CardBody>
                </Card>
            </div>
        )
    );
}

export default Medicine;