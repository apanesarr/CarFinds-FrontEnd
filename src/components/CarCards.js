import React from 'react';
import {Card, Image, Dimmer, Loader} from 'semantic-ui-react';
import "./CarCards.css"
function CarCards(props) {

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
            ):
        
            <Dimmer active inverted>
                <Loader inverted>
                    Loading      
                </Loader>
            </Dimmer>
    
            
            
            }
        </Card.Group>
    )
    
}
export default CarCards