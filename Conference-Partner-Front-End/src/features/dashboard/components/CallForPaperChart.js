import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {CCF: "", CORE: "c", QUALIS: "", shortName: "AIR", fullName: "International Conference on Artificial Intelligence and Robots", delay: "Delay", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
    {CCF: "a", CORE: "a", QUALIS: "A1", shortName: "ICML", fullName: "International Conference on Machine Learning", delay: "", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
    {CCF: "c", CORE: "b", QUALIS: "B2", shortName: "ICCV", fullName: "International Conference on Computer Vision", delay: "", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
    {CCF: "b", CORE: "c", QUALIS: "B3", shortName: "ICRA", fullName: "International Conference on Robotics and Automation", delay: "Delay", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
    {CCF: "a", CORE: "a", QUALIS: "A2", shortName: "CVPR", fullName: "Computer Vision and Pattern Recognition", delay: "", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
    {CCF: "c", CORE: "b", QUALIS: "B4", shortName: "ICML", fullName: "International Conference on Machine Learning", delay: "", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
    {CCF: "b", CORE: "c", QUALIS: "B5", shortName: "ICCV", fullName: "International Conference on Computer Vision", delay: "Delay", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
    {CCF: "a", CORE: "a", QUALIS: "A1", shortName: "ICRA", fullName: "International Conference on Robotics and Automation", delay: "", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
    {CCF: "c", CORE: "b", QUALIS: "B2", shortName: "CVPR", fullName: "Computer Vision and Pattern Recognition", delay: "", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
    {CCF: "b", CORE: "c", QUALIS: "B3", shortName: "ICML", fullName: "International Conference on Machine Learning", delay: "Delay", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
]

function CallForPaperChart(){
    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>征稿</>}>
            {/** Table Data */}
            <div className="flex items-center text-sm">
                <button className="text-blue-500">CCF:</button>
                <p className="ml-2">Conference Rank (A, B, C) from China Computer Federation (2022)</p>
            </div>
            <div className="flex items-center text-sm">
                <button className="text-blue-500">CORE:</button>
                <p className="ml-2">Conference Rank (A*, A, B, C) from Computing Research and Education Association of Australasia (2020)</p>
            </div>
            <div className="flex items-center text-sm">
                <button className="text-blue-500">QUALIS:</button>
                <p className="ml-2">Conference Rank (A1, A2, B1, B2, B3, B4, B5) from Brazilian Classification System for Conferences and Journals (2016)</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base">CCF</th>
                            <th className="text-base">CORE</th>
                            <th className="text-base">QUALIS</th>
                            <th className="text-base">简称</th>
                            <th className="text-base">全称</th>
                            <th className="text-base">Delay</th>
                            <th className="text-base">截稿日期</th>
                            <th className="text-base">通知日期</th>
                            <th className="text-base">会议日期</th>
                            <th className="text-base">会议地点</th>
                            <th className="text-base">届数</th>
                            <th className="text-base">浏览</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userSourceData.map((u, k) => {
                            return (
                                <tr key={k}>
                                    <td>{u.CCF ? <span className="bg-blue-500 badge px-2 text-white">{u.CCF}</span> : null }</td>
                                    <td>{u.CORE ? <span className="bg-blue-500 badge px-2  text-white">{u.CORE}</span> : null }</td>
                                    <td>{u.QUALIS ? <span className="bg-blue-500 badge px-2  text-white">{u.QUALIS}</span> : null }</td>
                                    <td>{u.shortName}</td>
                                    <td><button className="text-blue-500 hover:underline" onClick={() => window.location.href = `/app/conferencePage/${100}`}>{u.fullName}</button></td>
                                    <td>{u.delay ? <span className="bg-red-700 badge px-2 text-white">{u.delay}</span> : null }</td>
                                    <td>{u.deadline}</td>
                                    <td>{u.notifyDate}</td>
                                    <td>{u.conferenceDate}</td>
                                    <td>{u.location}</td>
                                    <td>{u.session ? <span className="bg-orange-500 badge px-2 text-white">{u.session}</span> : null}</td>
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

export default CallForPaperChart