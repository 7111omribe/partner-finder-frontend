import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OptionItem.css';
import { StartTimeTab } from './StartTimeTab';
import PostPage from '../postsPage/PostPage.components';

function createCurrentAtendenciesTxt(item) {
    let attendenciesNum = 0;
    for (const attData of item['statusData']['attendencies']) {
        attendenciesNum = attendenciesNum + attData['num'];
    }
    const currentAttendenciesTxt = `${attendenciesNum} הצטרפו`;
    return currentAttendenciesTxt;
}
function createParticipantsRangeTxt(item) {
    const minVal = item['postData']['minParticipantes'] ?? null;
    const maxVal = item['postData']['maxParticipants'] ?? null;
    if ((minVal === null) & (maxVal === null)) {
        return 'אין הגבלת מקום'
    }
    if (minVal === null) {
        return `עד ${maxVal} מקומות`
    }
    if (maxVal === null) {
        return `${minVal}+ מקומות`
    }
    if (minVal == maxVal) {
        return `${maxVal} מקומות`
    }
    return `${minVal} - ${maxVal} מקומות`

}

const GroupOption = ({ item, style, isMember }) => {
    const title = item['activityData']['title'];
    const description = item['activityData']['description'];

    const currentAttendenciesTxt = createCurrentAtendenciesTxt(item);
    const participantsRange = createParticipantsRangeTxt(item);
    const timeAmount = item['activityData']['activityTime'] ?? '';

    const [openPostPage, setOpenPostPage] = useState(false);
    return (
        <div>
            <Container style={style} className={'option-item'}>
                <Row onClick={() => { setOpenPostPage(true) }}>
                    <Col style={{ textAlign: 'center' }} className={'h5'}>
                        {title}
                    </Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        {description}
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        {currentAttendenciesTxt}
                    </Col>
                    <Col md={3}>
                        {participantsRange}
                    </Col>
                    <Col md={3}>
                        <StartTimeTab item={item} />
                    </Col>
                    <Col md={3} >
                        {timeAmount}
                    </Col>
                </Row>
            </Container>
            {openPostPage && <PostPage onCancel={() => { setOpenPostPage(false) }} item={item} isMember={isMember} />}
        </div>
    );


};

export default GroupOption;
