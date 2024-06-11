import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {CCF: "", fullName: "IEEE Software", specialIssue: "Creativity in Software Engineering", deadline: "2024-06-10", factor: "2.586", publisher: "IEEE", visit: 100},
    {CCF: "a", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
    {CCF: "c", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
    {CCF: "b", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
    {CCF: "a", fullName: "IEEE Software", specialIssue: "Creativity in Software Engineering", deadline: "2024-06-10", factor: "2.586", publisher: "IEEE", visit: 100},
    {CCF: "c", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
    {CCF: "b", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
    {CCF: "a", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
    {CCF: "c", fullName: "IEEE Software", specialIssue: "Creativity in Software Engineering", deadline: "2024-06-10", factor: "2.586", publisher: "IEEE", visit: 100},
    {CCF: "b", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
]

function JournalChart(){
    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>征稿</>}>
            {/** Table Data */}
            <div className="flex items-center text-sm">
                <button className="text-blue-500">CCF:</button>
                <p className="ml-2">Journal Rank (A, B, C) from China Computer Federation (2022)</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base">CCF</th>
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
                                    <td>{u.CCF ? <span className="bg-blue-500 badge px-2 text-white">{u.CCF}</span> : null }</td>
                                    <td>{u.fullName}</td>
                                    <td>{u.specialIssue}</td>
                                    <td>{u.deadline}</td>
                                    <td>{u.factor}</td>
                                    <td>{u.publisher}</td>
                                    <td>{u.visit ? <span className="bg-green-700 badge px-2 text-white">{u.visit}</span> : null }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center">
                <button className="text-blue-500"> 更多>></button>
            </div>
        </TitleCard>
    )
}

export default JournalChart