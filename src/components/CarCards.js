import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import "./CarCards.css"
function CarCards(props) {
    console.log(props.cars)
    return (
        <Card.Group centered >
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
                <a href={car.link}>
                <Card.Content className="card-footer" extra>
                    <font color={car.site==='Kijiji'? "blue":"red"}> {car.site}</font>
                </Card.Content>
                </a>
            </Card>
            ):<h3>Loading</h3>}
        </Card.Group>
    )
    
}
export default CarCards