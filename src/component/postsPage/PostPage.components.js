import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SemiPage from "../../toolsComponents/SemiPage.components";
import ActivityHoverCreation from "../activities/ActivitiesList/ActivityHoverCreation.components";
import { ActivitiesListContext } from "../activities/ActivitiesPage.components";
import { StartTimeTab } from "../activities/StartTimeTab";
import UserBoxInPost from "./UserBoxInPost.components";
import ChatPage from "./chat/ChatPage.components";
import ChangeMembershipStatusBotton from "./ChangeMembershipStatusBotton.components";


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

const MoreDetails = ({ item }) => {
    const { activitiesList } = useContext(ActivitiesListContext);
    const activityId = item.activityData.activityId
    if (activityId) {
        const fullActivity = activitiesList.find(fullActivity => fullActivity.activity_id === activityId)
        return (<ActivityHoverCreation item={fullActivity} />)
    } else {
        return (
            <div />
        )
    }
}

const PostPage = ({ onCancel, item, isMember }) => {
    const adminId = item['creationData']['adminId']
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
                        <MoreDetails item={item} />
                    </Col>
                    <Col md={8}>
                        <div className="h5">צ'אט</div>
                        {isMember ? <ChatPage /> : <div style={{ backgroundColor: 'red' }}>no</div>}
                    </Col>
                    <Col md={2}>
                        <div className="h5">חברים בקבוצה</div>
                        {item.statusData.attendencies.map((item, index) => <UserBoxInPost userData={item} key={index} adminId={adminId} />)}
                    </Col>
                </Row>
                <Row>
                    <ChangeMembershipStatusBotton item={item} isMember={isMember} />
                </Row>
            </Container>
        </SemiPage>
    );
};

export default PostPage;
