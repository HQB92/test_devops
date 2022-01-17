import React, {useState,useEffect} from 'react';
import { Container, Card, Row } from 'react-bootstrap';



const CallAPI = () =>{
     const [datos, setDatos] = useState([]);
    const call = async()=>{
        
        const data = await fetch('https://dn8mlk7hdujby.cloudfront.net/interview/insurance/58')
        const datosReguistro = await data.json();
        setDatos(datosReguistro);
        
    }
    useEffect(()=>{
        console.log(datos);
        call();
        // eslint-disable-next-line
    },[])

    return(
        <Container >
            <Row>
                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={datos.insurance?.image} />
                    <Card.Body>
                        <Card.Title>{datos.insurance?.name}</Card.Title>
                        <Card.Text>{datos.insurance?.description}</Card.Text>
                        <Card.Title>${datos.insurance?.price}</Card.Title>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default CallAPI;