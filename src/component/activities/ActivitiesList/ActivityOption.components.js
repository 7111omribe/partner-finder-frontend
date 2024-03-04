import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './../OptionItem.css';
import ActivityHoverCreation from './ActivityHoverCreation.components';
import CreateThisActivityBotton from './CreateThisActivityBotton.components';



const ActivityOption = ({ item }) => {
    const activityId = item.activity_id
    const title = item.activity_name
    const activityTime = item.activity_time
    const activityType = item.activity_type
    return (
        <Container className={'option-item'}>
            <Row>
                <Col style={{ textAlign: 'center' }} className={'h5'}>
                    {title}
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    {activityType}
                </Col>
                <Col md={3}>
                    {activityTime}
                </Col>
                <Col md={3}>
                    <ActivityHoverCreation item={item} />
                </Col>
                <Col md={3} >
                    <CreateThisActivityBotton activityTitle={title} activityId={activityId} />
                </Col>
            </Row>
        </Container>
    );
};

export default ActivityOption;
