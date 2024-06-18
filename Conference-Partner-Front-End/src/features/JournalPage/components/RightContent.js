import axios from "axios"
import BodyCard from "../../../components/Cards/BodyCard"
import TitleCard from "../../../components/Cards/TitleCard"
import Subtitle from "../../../components/Typography/Subtitle"
import CallForPaperContent from "./CallForPaperContent"
import JournalInfo from "./JournalInfo"
import Recommend from "./Recommend"
import RelatedConference from "./RelatedConference"
import RelatedJournal from "./RelatedJournal"
import {UserPlusIcon, GlobeAsiaAustraliaIcon, PencilSquareIcon, GiftIcon} from "@heroicons/react/24/outline"


function RightContent(props){

    const confInfo = props.confData

    const userFollow = async(confId, userId) => {
        const res = await axios.post("/follow/conference/follow", {conferenceId: confId, userId: userId}).catch(err => console.log(err))
        console.log(res)
    }

    return(
        <div>

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-1 mt-8">
                <button onClick={()=>userFollow(confInfo.id, localStorage.getItem("id"))}>
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
                </button>
                
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
                <TitleCard title={<><GiftIcon className="h-6 w-6 inline-block mr-2"/>惊喜</>}>
                    
                </TitleCard>
            </div>
            
        </div>
    )
}

export default RightContent