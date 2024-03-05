import { useContext } from 'react';
import './PostPage.css';
import { UserDataContext } from '../../App';


const UserBoxInPost = ({ userData }) => {
    const { userData: myUserData } = useContext(UserDataContext)

    const getUserNameTxt = () => {
        const myUserId = myUserData['user_id']
        if (userData.userId == myUserId) {
            return 'את/ה'
        } else {
            return ` יוזר ${userData.userNumInPost}`
        }
    }
    const getFriendsNumTxt = () => {
        const attendenciesNum = userData.num;
        if (attendenciesNum === 1) {
            return 'בא לבד'
        }
        if (attendenciesNum === 2) {
            return 'בא עם עוד חבר אחד'
        }
        return `בא עם עוד ${attendenciesNum - 1} אנשים`
    };
    return ( // todo add restoring when have logs. and then add sorting function
        <div className="box-in-post">
            <div>{getUserNameTxt()}</div>
            <div>{getFriendsNumTxt()}</div>
        </div>
    )
}

export default UserBoxInPost;