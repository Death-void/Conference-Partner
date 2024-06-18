import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'


function SpecialIssues(props){
    const specialIssuesInfo = props.confData

    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>Special Issues</>}>
            {/** Table Data */}

            <div className="overflow-x-auto">
                <pre className="border-2 p-4 overflow-auto whitespace-pre-wrap rounded-lg">{specialIssuesInfo.specialIssue}</pre>
            </div>
            <br/>
            <div className="overflow-x-auto">
                <pre className="border-2 p-4 overflow-auto whitespace-pre-wrap rounded-lg bg-yellow-50 text-blue-500">最后更新 {specialIssuesInfo.lastModifiedUser} 在 {specialIssuesInfo.lastModifiedDate}</pre>
            </div>
        </TitleCard>
    )
}   

export default SpecialIssues