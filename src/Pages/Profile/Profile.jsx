import UserInfo from "../../Hooks/UserInfo"
import Pagetitle from "../../SharePages/pageTitle/Pagetitle"

const Profile = () => {
    const userInfo = UserInfo()
    return (
        <div>
            <Pagetitle title='Your Profile' page='Profile'></Pagetitle>
            <div className="md:w-3/4 bg-base-100 mx-auto mt-6 p-4 rounded-lg">
                <h4 className="text-center text-2xl">Your Profile Info</h4>
                <div className="avatar flex justify-center my-2">
                    <div className="w-24 rounded">
                        <img src={userInfo?.profilePic} />
                    </div>
                </div>
                <p className="text-center mt-4"><span className="mr-2 font-bold">Name:</span> {userInfo?.name}</p>
                <p className="text-center my-2"><span className="mr-2 font-bold">Email:</span> {userInfo?.email}</p>
                <p className="text-center"><span className="mr-2 font-bold">Profession:</span> {userInfo?.profession}</p>
            </div>
        </div>
    )
}

export default Profile