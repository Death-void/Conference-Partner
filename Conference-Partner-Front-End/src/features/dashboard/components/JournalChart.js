import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

import { useState} from "react"
import axios from "axios"
import { useEffect } from "react"
import { IncrementJournalViewCount } from "../../../GlobalFunction"

function JournalChart(){

    const [confData, setConfData] = useState({})
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [userSourceData, setUserSourceData] = useState([])


    useEffect(() => {
        // Call API to get conference details
        axios.get(`/journals/visit/topTen`).then((res) => {
            if(res.status === 200){
                setUserSourceData(res.data)
            }
        }).catch((err) => {
            setLoading(false)
            setErrorMessage("Invalid credentials")
        })
    }
    ,[])

    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>征稿</>}>
            {/** Table Data */}
            <div className="flex items-center text-sm">
                <button className="text-blue-500">ccf:</button>
                <p className="ml-2">Journal Rank (A, B, C) from China Computer Federation (2022)</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base">ccf</th>
                            <th className="text-base">全称</th>
                            <th className="text-base">Special Issue</th>
                            <th className="text-base">截稿日期</th>
                            <th className="text-base">影响因子</th>
                            <th className="text-base">出版商</th>
                            <th className="text-base">浏览</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userSourceData.map((u, k) => {
                            return (
                                <tr key={k}>
                                    <td>{u.ccf ? <span className="bg-blue-500 badge px-2 text-white">{u.ccf}</span> : null }</td>
                                    <td><button className="text-blue-500 hover:underline" onClick={() => IncrementJournalViewCount(u.id)}>{u.name}</button></td>
                                    <td>{u.specialIssue}</td>
                                    <td>{u.submissionDeadline}</td>
                                    <td>{u.impactFactor}</td>
                                    <td>{u.publisher}</td>
                                    <td>{u.viewCount ? <span className="bg-green-700 badge px-2 text-white">{u.viewCount}</span> : null }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center">
                <button className="text-blue-500" onClick={() => window.location.href = `/app/journal`}> 更多>></button>
            </div>
        </TitleCard>
    )
}

export default JournalChart