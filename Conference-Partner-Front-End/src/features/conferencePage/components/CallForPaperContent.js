import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";


function CallForPaperContent(){

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

    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>征稿</>}>
            {/** Table Data */}

            <div className="overflow-x-auto">
                <pre className="border-2 p-4 overflow-auto whitespace-pre-wrap rounded-lg">{confInfo.callForPapers}</pre>
            </div>
            <br/>
            <div className="overflow-x-auto">
                <pre className="border-2 p-4 overflow-auto whitespace-pre-wrap rounded-lg bg-yellow-50 text-blue-500">最后更新 {confInfo.lastModifiedUser} 在 {confInfo.lastModifiedDate}</pre>
            </div>
        </TitleCard>
    )
}   

export default CallForPaperContent