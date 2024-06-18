import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

import { useState} from "react"
import axios from "axios"
import { useEffect } from "react"

function  MostJourVisit(){

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

    return(
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>最多浏览</>}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th className="text-base">#</th>
                        <th className="text-base">期刊</th>
                        <th className="text-base">浏览</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userSourceData.map((u, k) => {
                                return(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <td>{u.name}</td>
                                        <td>{u.viewCount ?  <span className="bg-green-700 badge px-2 text-white">{u.viewCount}</span> : null}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center">
                <button className="text-blue-500" onClick={() => window.location.href = `/app/journal/jourSortByVisit`}> 更多>></button>
            </div>
        </TitleCard>
    )
}

export default MostJourVisit