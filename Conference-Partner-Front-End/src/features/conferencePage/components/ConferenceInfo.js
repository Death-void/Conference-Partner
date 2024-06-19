import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";




function ConferenceInfo(){

    const [confInfo, setConfInfo] = useState({})
    const {id} = useParams();
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


    useEffect(() => {
        // Call API to get conference details
        axios.get(`/conferences/${id}`).then((res) => {
            if(res.status === 200){
                setConfInfo(res.data)
            }
        }).catch((err) => {
            setLoading(false)
            setErrorMessage("Invalid credentials")
        })
    }
    ,[])

    const [followerCount, setFollowerCount] = useState(0)

    useEffect(() => {
        const f = async () => {
            const res = await axios.get(`/conferences/getFollowersCount?conferenceId=${id}`).catch((err) => {
                console.log(err)
            })
            console.log("follower count", res.data)
        }
        f()
    },[])
            

    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>会议信息</>}>
            {/** Table Data */}

            <div className="overflow-x-auto">
                <div className="flex justify-center font-bold">
                    <p>{confInfo.name}</p>
                </div>
                <br/>
                <div className="flex justify-center">
                    <table className="flex justify-center w-auto border-0">
                        <tbody className="text-center  space-y-5">
                            <tr>
                                <td colSpan={3}>
                                    <a href={confInfo.website} className="hover:underline text-blue-500">{confInfo.website}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>截稿日期：</td>
                                <td></td>
                                <td>{confInfo.submissionDeadline}</td>
                            </tr>
                            <tr>
                                <td>通知日期：</td>
                                <td></td>
                                <td>{confInfo.notificationDate}</td>
                            </tr>
                            <tr>
                                <td>会议日期：</td>
                                <td></td>
                                <td>{confInfo.conferenceDate}</td>
                            </tr>
                            <tr>
                                <td>会议地点：</td>
                                <td></td>
                                <td>{confInfo.location}</td>    
                            </tr>
                            <tr>
                                <td>届数：</td>
                                <td></td>
                                <td>{confInfo.frequency ? <span className="bg-orange-500 badge px-2 text-white">{confInfo.frequency}</span> : null}</td>     
                            </tr>
                            <tr>
                                <td>浏览：{confInfo.viewCount ? <span className="bg-green-700 badge px-2 text-white">{confInfo.viewCount}</span> : null }</td>
                                <td>关注：{confInfo.follow ? <span className="bg-blue-700 badge px-2 text-white">{confInfo.follow}</span> : null }</td>
                                <td>参加：{confInfo.join ? <span className="bg-red-700 badge px-2 text-white">{confInfo.join}</span> : null}</td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TitleCard>
    )
}   

export default ConferenceInfo