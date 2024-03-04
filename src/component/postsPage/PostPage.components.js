import { Col, Container, Row } from "react-bootstrap";
import SemiPage from "../../toolsComponents/SemiPage.components";
import { StartTimeTab } from "../activities/StartTimeTab";
import ChatPage from "./chat/ChatPage.components";
import UserBoxInPost from "./UserBoxInPost.components";
import ActivityHoverCreation from "../activities/ActivitiesList/ActivityHoverCreation.components";
import { ActivitiesListContext } from "../activities/ActivitiesPage.components";
import { useContext } from "react";

const DetailBox = ({ title, children }) => {
    return (
        children !== undefined ? (
            <div className="box-in-post">
                <p>{title + ' - '}</p>
                {children}
            </div>
        ) : null
    );
};


const PostPage = ({ onCancel, item }) => {
    const { activitiesList } = useContext(ActivitiesListContext);

    const getActivityData = (realActivityId) => {
        const fullActivity = realActivityId ? activitiesList.find(fullActivity => fullActivity.activity_id === realActivityId) : {};
        return fullActivity
    }

    return (
        <SemiPage onCancel={onCancel}>
            <Container>
                <Row>
                    <Col style={{ textAlign: 'center' }} className={'h2'}>
                        {item.activityData.title}
                    </Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: 'center' }} className={'h5'}>
                        {item.activityData.description}
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <div className="h5">פרטים</div>
                        <DetailBox title={'מתי יוצאים'}>
                            <StartTimeTab item={item} />
                        </DetailBox>
                        <DetailBox title={'כמה זמן הפעילות'}>
                            {item.activityData.activityTime}
                        </DetailBox>
                        <DetailBox title={'סוג הפעילות'}>
                            {item.activityData.activityType}
                        </DetailBox>
                        <ActivityHoverCreation item={getActivityData(item.activityData.activityId)} />
                    </Col>
                    <Col md={8}>
                        <div className="h5">צ'אט</div>
                        <ChatPage>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </ChatPage>
                    </Col>
                    <Col md={2}>
                        <div className="h5">חברים בקבוצה</div>
                        {item.statusData.attendencies.map((item, index) => <UserBoxInPost userData={item} key={index} />)}
                    </Col>
                </Row>
            </Container>
        </SemiPage>
    );
};

export default PostPage;
