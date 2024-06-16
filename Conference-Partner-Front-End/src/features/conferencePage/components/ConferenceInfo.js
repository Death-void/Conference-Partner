import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'





function ConferenceInfo(props){

    // const confInfo = {
    //     id : 1,
    //     name: "AIR 2024: International Conference on Artificial Intelligence and Robots",
    //     website : "https://www.academicx.org/AIR/2024/",
    //     submissionDeadline: "2024-06-10",
    //     notificationDate: "",
    //     conferenceDate: "2024-08-10",
    //     location: "Shanghai, China",
    //     frequency: 1,
    //     viewCount: 100,
    //     followCount: 100,
    //     joinCount: 100,
    // }

    const confInfo = props.confData

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