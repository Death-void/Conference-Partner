import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {CCF: "", CORE: "a",aQUALIS: "", shortName: "JELIA", fullName: "	European Conference On Logics In Artificial Intelligence", deadline: "2020-12-16", notifyDate: "2021-02-15", conferenceDate: "2021-05-17"},
    {CCF: "", CORE: "b", QUALIS: "", shortName: "ICML", fullName: "International Conference on Machine Learning", deadline: "2021-01-16", notifyDate: "2021-03-15", conferenceDate: "2021-06-17"},
    {CCF: "", CORE: "c", QUALIS: "", shortName: "ICCV", fullName: "International Conference on Computer Vision", deadline: "2021-02-16", notifyDate: "2021-04-15", conferenceDate: "2021-07-17"},
    {CCF: "", CORE: "a", QUALIS: "", shortName: "ICRA", fullName: "International Conference on Robotics and Automation", deadline: "2021-03-16", notifyDate: "2021-05-15", conferenceDate: "2021-08-17"},
    {CCF: "", CORE: "b", QUALIS: "", shortName: "CVPR", fullName: "Computer Vision and Pattern Recognition", deadline: "2021-04-16", notifyDate: "2021-06-15", conferenceDate: "2021-09-17"},
    {CCF: "", CORE: "c", QUALIS: "", shortName: "ICML", fullName: "International Conference on Machine Learning", deadline: "2021-05-16", notifyDate: "2021-07-15", conferenceDate: "2021-10-17"},
]

function RelatedConference(){
    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>相关会议</>}>
            {/** Table Data */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base">CCF</th>
                            <th className="text-base">CORE</th>
                            <th className="text-base">QUALIS</th>
                            <th className="text-base">简称</th>
                            <th className="text-base">全称</th>
                            <th className="text-base">截稿日期</th>
                            <th className="text-base">通知日期</th>
                            <th className="text-base">会议日期</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userSourceData.map((u, k) => {
                            return (
                                <tr key={k}>
                                    <td>{u.CCF ? <span className="bg-blue-500 badge px-2 text-white">{u.CCF}</span> : null }</td>
                                    <td>{u.CORE ? <span className="bg-blue-500 badge px-2 text-white">{u.CORE}</span> : null }</td>
                                    <td>{u.QUALIS ? <span className="bg-blue-500 badge px-2 text-white">{u.QUALIS}</span> : null }</td>
                                    <td>{u.shortName}</td>
                                    <td>{u.fullName}</td>
                                    <td>{u.deadline}</td>
                                    <td>{u.notifyDate}</td>
                                    <td>{u.conferenceDate}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </TitleCard>
    )
}

export default RelatedConference