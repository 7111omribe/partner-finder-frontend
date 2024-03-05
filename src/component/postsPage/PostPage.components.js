import { Button, Col, Container, Row } from "react-bootstrap";
import SemiPage from "../../toolsComponents/SemiPage.components";
import { StartTimeTab } from "../activities/StartTimeTab";
import ChatPage from "./chat/ChatPage.components";
import UserBoxInPost from "./UserBoxInPost.components";
import ActivityHoverCreation from "../activities/ActivitiesList/ActivityHoverCreation.components";
import { ActivitiesListContext } from "../activities/ActivitiesPage.components";
import { useContext } from "react";

const JoinGroupBotton = ({ item, isMember }) => {
    const joinGroup = async () => {
        try {
            const response = await fetch('http://localhost:4000/posts/joinGroup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: 1, //todo change
                    postId: item._id,
                    friendsNum: 0 // todo change
                }),
            });

            if (response.status === 201) {
                console.log('yeyy')
            }
            else { console.log('error') } // todo create setErrorMessage
        } catch (error) {
            console.error('Error during login:', error);
        }
    }
    const leaveGroup = async () => {
        try {
            const response = await fetch('http://localhost:4000/posts/leaveGroup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: 1, //todo change
                    postId: item._id,
                }),
            });

            if (response.status === 201) {
                console.log('yeyy')
            }
            else { console.log('error') } // todo create setErrorMessage
        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    const onClick = async () => {
        if (isMember) {
            leaveGroup();
        } else {
            joinGroup();
        }
    }

    return (
        <Button onClick={onClick}>
            {isMember ? 'עזוב קבוצה' : 'הצטרפות לקבוצה'}
        </Button>
    )
}

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
                        {item.statusData.attendencies.map((item, index) => <UserBoxInPost userData={item} key={index} />)}
                    </Col>
                </Row>
                <Row>
                    <JoinGroupBotton item={item} isMember={isMember} />
                </Row>
            </Container>
        </SemiPage>
    );
};

export default PostPage;
