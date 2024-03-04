import './UserBoxInPost.css';


const UserBoxInPost = ({ userData }) => {
    const getFriendsNumTxt = (attendenciesNum) => {
        if (attendenciesNum === 1) {
            return 'בא לבד'
        }
        if (attendenciesNum === 2) {
            return 'בא עם עוד חבר אחד'
        }
        return `בא עם עוד ${attendenciesNum - 1} אנשים`
    }
    return ( // todo add restoring when have logs. and then add sorting function
        <div className="user-box">
            <div>יוזר {userData.userNumInPost}</div>
            <div>{getFriendsNumTxt(userData.num)}</div>
        </div>
    )
}

export default UserBoxInPost;