import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { BsPlus, BsQuestion } from 'react-icons/bs';

const ActivitiesList = (params) => {
    return (

        <Container style={{
            backgroundColor: 'lightblue', borderRadius: '30px', padding: 20
        }}  >
            <Row>
                <Col style={{ textAlign: 'center' }} className={'h5'}>
                    {' סיור אוכל עם ליאת בעמק הקדוש'}
                </Col>

            </Row>
            <Row>
                <Col md={3}>
                    {'סיור'}
                </Col>
                <Col md={3}>
                    {'יום'}
                </Col>
                <Col md={3}>
                    <BsQuestion size={30} className="ml-auto" />
                </Col>
                <Col md={3} className="d-flex justify-content-end" style={{ alignItems: 'end' }}>
                    <BsPlus size={30} className="ml-auto" />
                </Col>
            </Row>
        </Container >
    );
};

export default ActivitiesList;
