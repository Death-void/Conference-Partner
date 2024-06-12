import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'

const callForPaperInfo = {
    content : "IEEE Software's mission is to build the community of leading and future software practitioners. The magazine delivers reliable, useful, leading-edge software development information to keep engineers and managers abreast of rapid technology change. The authority on translating software theory into practice, the magazine positions itself between pure research and pure practice, transferring ideas, methods, and experiences among researchers and engineers. Peer-reviewed articles, topical interviews, and columns by seasoned practitioners illuminate all aspects of the industry, including process improvement, project management, development tools, software maintenance, Web applications and opportunities, testing,usability, and much more.",
    lastModifiedDate : "2021-04-08",
    lastModifiedUser : "Dou Sun",
}



function CallForPaperContent(){

    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>征稿</>}>
            {/** Table Data */}

            <div className="overflow-x-auto">
                <pre className="border-2 p-4 overflow-auto whitespace-pre-wrap rounded-lg">{callForPaperInfo.content}</pre>
            </div>
            <br/>
            <div className="overflow-x-auto">
                <pre className="border-2 p-4 overflow-auto whitespace-pre-wrap rounded-lg bg-yellow-50 text-blue-500">最后更新 {callForPaperInfo.lastModifiedUser} 在 {callForPaperInfo.lastModifiedDate}</pre>
            </div>
        </TitleCard>
    )
}   

export default CallForPaperContent