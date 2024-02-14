import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';

const ActivitiesList = (params) => {
    return (
        <Card>
            <Card.Header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card.Title style={{ textAlign: 'center', marginRight: 'auto' }}>{'סיור בעמק הקדוש'}</Card.Title>
                <BsPlus style={{ marginRight: 'auto' }} size={30} />
            </Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col md={10}>
                            <Card.Img src={require('./../../assets/activities/liat.jpg')} alt="Card image"/>
                        </Col>
                        <Col md={2}>
                            <Row style={{ height: '25%', padding: 0 }}>
                            <Card.Img variant="top" src={require('./../../assets/icons/plus.png')} alt="Card image" style={{ margin: 0 }} />
                            </Row>
                            <Row style={{ height: '25%' }}>
                                <BsPlus style={{ height: '100%' }} />
                            </Row>
                            <Row style={{ height: '25%' }}>
                                <BsPlus style={{ height: '100%' }} />
                            </Row>
                            <Row style={{ height: '25%' }}>
                                <BsPlus style={{ height: '100%' }} />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default ActivitiesList;
