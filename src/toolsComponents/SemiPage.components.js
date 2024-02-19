import React from 'react';
import './SemiPage.css'
import { Col, Container, Image, Row } from 'react-bootstrap';

const SemiPage = ({ onCancel, children }) => {
    return (
        <div className="semipage-modal-overlay">
            <div className="semipage-modal">
                <Container>
                    <Row>
                        <Col md={11} />
                        <Col md={1}>
                            <Image src={require('../assets/icons/blue_x.svg.png')} style={{ height: '40px', width: '40px' }} onClick={onCancel} />
                        </Col>
                    </Row>
                    <Row>{children}</Row>
                </Container>
            </div>
        </div>
    );
};

export default SemiPage;
