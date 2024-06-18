import BodyCard from "../../../components/Cards/BodyCard"
import TitleCard from "../../../components/Cards/TitleCard"
import Subtitle from "../../../components/Typography/Subtitle"
import CallForPaperContent from "./CallForPaperContent"
import ConferenceInfo from "./ConferenceInfo"
import Recommend from "./Recommend"
import RelatedConference from "./RelatedConference"
import RelatedJournal from "./RelatedJournal"
import {UserPlusIcon, GlobeAsiaAustraliaIcon, PencilSquareIcon, GiftIcon} from "@heroicons/react/24/outline"

const confInfo = {
    id : 1,
    name: "AIR 2024: International Conference on Artificial Intelligence and Robots",
    url : "https://www.academicx.org/AIR/2024/",
    submissionDeadline: "2024-06-10",
    notificationDate: "",
    conferenceDate: "2024-08-10",
    location: "Shanghai, China",
    frequency: 1,
    viewCount: 100,
    follow: 100,
    join: 100,
    followers: ["张三", "李四", "王五", "赵六"],
    joiners: [
        {name: "张三", time: "2024"},
        {name: "李四", time: "2024"},
        {name: "王五", time: "2024"},
        {name: "赵六", time: "2024"},
    ],
}

function RightContent(){


    return(
        <div>

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-1 mt-8">
                <BodyCard>
                    <div className="flex justify-between" >
                        <div className="flex justify-start space-x-3">
                            <UserPlusIcon className="h-6 w-6"/>
                            <p className="">我要关注</p>
                        </div>
                        <div>
                            {confInfo.follow ? <span className="bg-blue-500 badge px-2 text-white">{confInfo.follow}</span> : null }
                        </div>
                    </div>
                </BodyCard>
            </div>

            <div>
                <BodyCard>
                    <div className="flex justify-between" >
                        <div className="flex justify-start space-x-3">
                            <GlobeAsiaAustraliaIcon className="h-6 w-6"/>
                            <p className="">我要参加</p>
                        </div>
                        <div>
                            {confInfo.join ? <span className="bg-green-500 badge px-2 text-white">{confInfo.join}</span> : null }
                        </div>
                    </div>
                </BodyCard>
            </div>

            {localStorage.getItem("isAdmin") === "true" && <div>
                <BodyCard>
                    <div className="flex justify-between" >
                        <div className="flex justify-start space-x-3">
                            <PencilSquareIcon className="h-6 w-6"/>
                            <p className="">编辑CFP</p>
                        </div>
                    </div>
                </BodyCard>
            </div>}

            <div className="mt-10">
                <BodyCard>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>关注者</th>
                            </tr>   
                        </thead>
                        <tbody>
                            {confInfo.followers && confInfo.followers.map((f, k) => {
                                return (
                                    <tr key={k}>
                                        <td>{f}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </BodyCard>
            </div>

            <div className="mt-10"> 
                <BodyCard>
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th>参加者</th>
                                <th>时间</th>
                            </tr>   
                        </thead>
                        <tbody>
                            {confInfo.joiners && confInfo.joiners.map((f, k) => {
                                return (
                                    <tr key={k}>
                                        <td>{f.name}</td>
                                        <td>{f.time}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </BodyCard>
            </div>

            <div className="mt-10">
                <TitleCard title={<><GiftIcon className="h-6 w-6 inline-block mr-2"/>惊喜</>}>
                    
                </TitleCard>
            </div>
            
        </div>
    )
}

export default RightContent