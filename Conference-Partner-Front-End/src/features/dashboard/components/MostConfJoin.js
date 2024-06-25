import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

import { useState} from "react"
import axios from "axios"
import { useEffect } from "react"

function MostConfJoin(){

    const [confData, setConfData] = useState({})
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [userSourceData, setUserSourceData] = useState([])


    useEffect(() => {
        // Call API to get conference details
        axios.get(`/participate/conference/allParticipate`).then((res) => {
            if(res.status === 200){
                setUserSourceData(res.data.length > 10 ? res.data.slice(0, 10) : res.data)
            }
        }).catch((err) => {
            setLoading(false)
            setErrorMessage("Invalid credentials")
        })
    }
    ,[])

    return(
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>最多参加</>}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th className="text-base">#</th>
                        <th className="text-base">会议</th>
                        <th className="text-base">参加</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userSourceData.map((u, k) => {
                                return(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <td><button className="text-blue-500" onClick={() => window.location.href = `/app/conferencePage/${u.id}`}>{u.conference.abbreviation}</button></td>
                                        <td>{u.participateNum ?  <span className="bg-green-700 badge px-2 text-white">{u.participateNum}</span> : null}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center">
                <button className="text-blue-500" onClick={() => window.location.href = `/app/conference/confSortByJoin`}> 更多>></button>
            </div>
        </TitleCard>
    )
}

export default MostConfJoin