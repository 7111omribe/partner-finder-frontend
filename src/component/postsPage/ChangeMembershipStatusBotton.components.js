import { Button } from "react-bootstrap";


const ChangeMembershipStatusBotton = ({ item, isMember }) => {
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

export default ChangeMembershipStatusBotton;