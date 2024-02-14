import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from 'react';
import { Col, Container, Row, Overlay, Tooltip } from 'react-bootstrap';
import { BsPlus, BsQuestion } from 'react-icons/bs';
import ActivityHover from './ActivityHover.components';

const CustomQuestionIcon = React.forwardRef((props, ref) => (
    <BsQuestion {...props} ref={ref} />
));

const ActivityOption = ({ title, imgPath, description, activityTime, activityType }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const target = useRef(null);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <Container style={{ backgroundColor: 'lightblue', borderRadius: '30px', padding: 20, marginTop:5 }}>
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
                    <div ref={target}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <CustomQuestionIcon size={30} className="ml-auto" />
                        <Overlay
                            show={showTooltip}
                            target={target.current}
                            placement="left"
                            container={document.body}
                            containerPadding={20}
                        >
                            <Tooltip
                                id="overlay-example"
                            // style={{ width: 300 }}
                            >
                                <ActivityHover title={title} imgPath={imgPath} description={description} />
                            </Tooltip>
                        </Overlay>
                    </div>
                </Col>
                <Col md={3} >
                    <BsPlus size={30} className="ml-auto" />
                </Col>
            </Row>
        </Container>
    );
};

export default ActivityOption;
