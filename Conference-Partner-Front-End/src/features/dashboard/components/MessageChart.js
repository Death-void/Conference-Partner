import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {date : "2024-06-10", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
    {date : "2024-06-09", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
    {date : "2024-06-08", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
    {date : "2024-06-07", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
    {date : "2024-06-06", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
    {date : "2024-06-05", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
    {date : "2024-06-04", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
    {date : "2024-06-03", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
    {date : "2024-06-02", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
    {date : "2024-06-01", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
]

function MessageChart(){
    return(
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>最新消息</>}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th className="text-base">#</th>
                        <th className="text-base">日期</th>
                        <th className="text-base">类型</th>
                        <th className="text-base">内容</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userSourceData.map((u, k) => {
                                return(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <td>{u.date}</td>
                                        <td>{u.type}</td>
                                        <td>{u.content} <button className="text-blue-500">详细信息...</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center">
                <button className="text-blue-500"> 更多>></button>
            </div>
        </TitleCard>
    )
}

export default MessageChart