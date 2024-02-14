import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import './ActivityHover.css';



const ActivityHover = ({ title, imgPath, description }) => {
    return (
        <div
            id="overlay-example"
            // style={{ width: 300 }}
        >
            <Container>
                <Row style={{ textAlign: 'center', fontSize: 20 }} className='hover-title text-center'>
                    <div>{title}</div>
                </Row>
                <Row >
                    <Image src={require(`./../../assets/activities/${imgPath}`)} alt="Card image" id='image' />
                </Row>
                <Row style={{ textAlign: 'center', fontSize: 10 }}>
                    <div>{description}</div>
                </Row>

            </Container>
        </div>

    );
};

export default ActivityHover;
