import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'

const specialIssuesInfo = {
    content : `Special Issue on Creativity in Software Engineering
截稿日期: 2024-06-13

Creativity is considered an antecedent to the innovation necessary for software companies to survive and thrive, so companies are keen to embed creativity into their organizational culture and processes. Yet creativity remains a nebulous topic for many, and it isn’t always clear how to best support creativity in a software team while still delivering on business goals. This special issue seeks to bring together a diverse perspective on creativity in software development, i.e., what creativity means, what impactFactors help set an environment in which creativity can thrive, how teams can best be supported toward creative endeavors, and more.

The recent emergence of Artificial Intelligence (AI) and Large Language Models (LLMs) such as ChatGPT, Bard, and Bing Chat has major implications for companies and creativity. On the one hand, AI can enhance and rapidly speed up creative activities. On the other hand, , in a future where writing code is increasingly rote and automated due to the influx of AI, creativity is precisely what is left as the primary organizational differentiator and competitive advantage. For these reasons, we believe that now is a timely moment to consider creativity within software development.

Creativity is a diverse subject and intersects with the role of the individual, social, team, and organizational context, techniques and technologies for producing creative work, and the nature of the work itself. We seek papers covering a broad range of creativity-related topics and encourage submissions from academics as well as practitioners on any aspects of creativity, including but not limited to:

- Perspectives or approaches for fostering a creative environment within a team or organization
- Role of management/leadership in supporting creativity in teams
- Creativity within the product discovery phase
- The role of creativity in software innovation
- Novel techniques for inducing creativity in some aspect of software development, such as requirements, user experience, user interface design, software design, coding, testing, or architecture
- Experiences in using collaborative techniques to foster creativity (e.g., design thinking, domain-driven design, mob programming, pair programming, hackathons)
- Involving clients/customers in creative exercises such as participatory design, crowdsourcing, or other approaches
- Creativity within constrained environments, e.g., regulatory, legal, start-ups
- Creativity and legacy or complex software (constraints)
- Experience in creativity within different team working modes (e.g., hybrid, remote, co-located)
- Examining relationships between creativity, complexity, productivity, and other aspects of software engineering (e.g., developer experience, well-being, productivity)
- Creativity and legacy code/systems
- Examples and case studies of tools aiding creativity
- The use of AI to support or enhance creativity
- The future of creativity in AI-driven software engineering`,
    lastModifiedDate : "2024-06-10",
    lastModifiedUser : "Dou Sun",
}



function SpecialIssues(){

    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>Special Issues</>}>
            {/** Table Data */}

            <div className="overflow-x-auto">
                <pre className="border-2 p-4 overflow-auto whitespace-pre-wrap rounded-lg">{specialIssuesInfo.content}</pre>
            </div>
            <br/>
            <div className="overflow-x-auto">
                <pre className="border-2 p-4 overflow-auto whitespace-pre-wrap rounded-lg bg-yellow-50 text-blue-500">最后更新 {specialIssuesInfo.lastModifiedUser} 在 {specialIssuesInfo.lastModifiedDate}</pre>
            </div>
        </TitleCard>
    )
}   

export default SpecialIssues