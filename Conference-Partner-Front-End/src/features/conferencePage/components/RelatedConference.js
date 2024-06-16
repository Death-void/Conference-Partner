import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {ccf: "", core: "a",aqualis: "", abbreviation: "JELIA", name: "	European Conference On Logics In Artificial Intelligence", submissionDeadline: "2020-12-16", notificationDate: "2021-02-15", conferenceDate: "2021-05-17"},
    {ccf: "", core: "b", qualis: "", abbreviation: "ICML", name: "International Conference on Machine Learning", submissionDeadline: "2021-01-16", notificationDate: "2021-03-15", conferenceDate: "2021-06-17"},
    {ccf: "", core: "c", qualis: "", abbreviation: "ICCV", name: "International Conference on Computer Vision", submissionDeadline: "2021-02-16", notificationDate: "2021-04-15", conferenceDate: "2021-07-17"},
    {ccf: "", core: "a", qualis: "", abbreviation: "ICRA", name: "International Conference on Robotics and Automation", submissionDeadline: "2021-03-16", notificationDate: "2021-05-15", conferenceDate: "2021-08-17"},
    {ccf: "", core: "b", qualis: "", abbreviation: "CVPR", name: "Computer Vision and Pattern Recognition", submissionDeadline: "2021-04-16", notificationDate: "2021-06-15", conferenceDate: "2021-09-17"},
    {ccf: "", core: "c", qualis: "", abbreviation: "ICML", name: "International Conference on Machine Learning", submissionDeadline: "2021-05-16", notificationDate: "2021-07-15", conferenceDate: "2021-10-17"},
]

function RelatedConference(){
    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>相关会议</>}>
            {/** Table Data */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base">ccf</th>
                            <th className="text-base">core</th>
                            <th className="text-base">qualis</th>
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
                                    <td>{u.ccf ? <span className="bg-blue-500 badge px-2 text-white">{u.ccf}</span> : null }</td>
                                    <td>{u.core ? <span className="bg-blue-500 badge px-2 text-white">{u.core}</span> : null }</td>
                                    <td>{u.qualis ? <span className="bg-blue-500 badge px-2 text-white">{u.qualis}</span> : null }</td>
                                    <td>{u.abbreviation}</td>
                                    <td>{u.name}</td>
                                    <td>{u.submissionDeadline}</td>
                                    <td>{u.notificationDate}</td>
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