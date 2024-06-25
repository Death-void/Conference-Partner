import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"
import { useState} from "react"
import axios from "axios"
import { useEffect } from "react"
import { IncrementConferenceViewCount } from "../../../GlobalFunction";

function CallForPaperChart(props){

    const userSourceData = props.callForPaperData



    

    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>会议征稿</>}>
            {/** Table Data */}
            <div className="flex items-center text-sm">
                <button className="text-blue-500">ccf:</button>
                <p className="ml-2">Conference Rank (A, B, C) from China Computer Federation (2022)</p>
            </div>
            <div className="flex items-center text-sm">
                <button className="text-blue-500">core:</button>
                <p className="ml-2">Conference Rank (A*, A, B, C) from Computing Research and Education Association of Australasia (2020)</p>
            </div>
            <div className="flex items-center text-sm">
                <button className="text-blue-500">qualis:</button>
                <p className="ml-2">Conference Rank (A1, A2, B1, B2, B3, B4, B5) from Brazilian Classification System for Conferences and Journals (2016)</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base">ccf</th>
                            <th className="text-base">core</th>
                            <th className="text-base">qualis</th>
                            <th className="text-base">简称</th>
                            <th className="text-base">全称</th>
                            <th className="text-base">isPostponed</th>
                            <th className="text-base">截稿日期</th>
                            <th className="text-base">通知日期</th>
                            <th className="text-base">会议日期</th>
                            <th className="text-base">会议地点</th>
                            <th className="text-base">届数</th>
                            <th className="text-base">浏览</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userSourceData.map((u, k) => {
                            return (
                                <tr key={k}>
                                    <td>{u.ccf ? <span className="bg-blue-500 badge px-2 text-white">{u.ccf}</span> : null }</td>
                                    <td>{u.core ? <span className="bg-blue-500 badge px-2  text-white">{u.core}</span> : null }</td>
                                    <td>{u.qualis ? <span className="bg-blue-500 badge px-2  text-white">{u.qualis}</span> : null }</td>
                                    <td>{u.abbreviation}</td>
                                    <td><button className="text-blue-500 hover:underline" onClick={() => IncrementConferenceViewCount(u.id)}>{u.name}</button></td>
                                    <td>{u.isPostponed ? <span className="bg-red-700 badge px-2 text-white">{u.isPostponed.toString()}</span> : null }</td>
                                    <td>{u.submissionDeadline}</td>
                                    <td>{u.notificationDate}</td>
                                    <td>{u.conferenceDate}</td>
                                    <td>{u.location}</td>
                                    <td>{u.frequency ? <span className="bg-orange-500 badge px-2 text-white">{u.frequency}</span> : null}</td>
                                    <td>{u.viewCount ? <span className="bg-green-700 badge px-2 text-white">{u.viewCount}</span> : null }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center">
                <button className="text-blue-500" onClick={() => window.location.href = `/app/conference`}> 更多>></button>
            </div>
        </TitleCard>
    )
}

export default CallForPaperChart