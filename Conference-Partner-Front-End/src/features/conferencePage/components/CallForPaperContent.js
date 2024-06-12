import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'

const callForPaperInfo = {
    content : "The 7th Int'l Conference on Artificial Intelligence and Robots (AIR 2024) will be held during July 19-21, 2024 in Xi'an, China. You are invited to submit papers and participate in our academic exchange. \n\nTopics: The conference is soliciting state-of-the-art research papers in the following areas of interest: \n\nMachine Learning\nNatural Language Processing\nComputer Vision\nExpert Systems\nFuzzy Systems\nData Mining and Integration\nInformation Retrieval and Fusion\nArtificial Neural Networks \nPlanning and Scheduling\nAgent-Based Systems\nMulti-Agent Systems\nArtificial Intelligence Applications\nRobot Perception and Sensing\nRobot Control and Motion Planning\nRobot Learning and Adaptation\nHuman-robot Interaction\nRobot Design and Construction\nSwarm Robotics\nRobotics for Healthcare\nAutonomous Robots\nRobot ethics and Safety\nIndustrial Robotics",
    lastModifiedDate : "2024-06-10",
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