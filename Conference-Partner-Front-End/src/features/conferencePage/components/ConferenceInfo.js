import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'

const confInfo = {
    id : 1,
    name: "AIR 2024: International Conference on Artificial Intelligence and Robots",
    url : "https://www.academicx.org/AIR/2024/",
    deadline: "2024-06-10",
    notifyDate: "",
    conferenceDate: "2024-08-10",
    location: "Shanghai, China",
    session: 1,
    visit: 100,
    follow: 100,
    join: 100,
}



function ConferenceInfo(){

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
                                    <a href={confInfo.url} className="hover:underline text-blue-500">{confInfo.url}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>截稿日期：</td>
                                <td></td>
                                <td>{confInfo.deadline}</td>
                            </tr>
                            <tr>
                                <td>通知日期：</td>
                                <td></td>
                                <td>{confInfo.notifyDate}</td>
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
                                <td>{confInfo.session ? <span className="bg-orange-500 badge px-2 text-white">{confInfo.session}</span> : null}</td>     
                            </tr>
                            <tr>
                                <td>浏览：{confInfo.visit ? <span className="bg-green-700 badge px-2 text-white">{confInfo.visit}</span> : null }</td>
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