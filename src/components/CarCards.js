import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import "./CarCards.css"
function CarCards(props) {
    console.log(props.cars)
    return (
        <Card.Group className="card-columns">
            {props.isLoaded ? props.cars.map((car)=>
            <Card>
                <Image className="center-cropped" src={car.img}/>
                <Card.Content>
                <Card.Header className = "txt">{car.name}</Card.Header>
                <Card.Description>
                    <b>Price: </b> {car.price}
                    <br/>
                    <b>Mileage: </b>{car.mileage}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href={car.link}>{car.site}</a>
                </Card.Content>
            </Card>
            ):<h3>Loading</h3>}
        </Card.Group>
    )
    
}
export default CarCards