import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import './ActivityHover.css';



const ActivityHover = ({ title, imgPath, description, agents }) => {
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
                    {imgPath &&
                        <Image src={require(`./../../../assets/activities/${imgPath}`)} alt="Card image" id='image' />
                    }
                </Row>
                <Row style={{ textAlign: 'center', fontSize: 10 }}>
                    <div>{description}</div>
                </Row>
                {agents.length > 0 &&
                    (
                        <Row style={{ textAlign: 'right', fontSize: 10 }}>
                            <div style={{ textDecoration: 'underline' }}>
                                לפרטים
                            </div>
                            {
                                agents.map((item, index) => (
                                    <div key={index}>{item.agent_name + ' - ' + item.agent_phone}</div>
                                ))
                            }
                        </Row>
                    )
                }


            </Container>
        </div>

    );
};

export default ActivityHover;
