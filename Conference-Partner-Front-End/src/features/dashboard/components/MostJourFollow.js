import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {shortName: "ICRA", follow: 9999},
    {shortName: "IROS", follow: 123456},
    {shortName: "CVPR", follow: 123456},
    {shortName: "ICCV", follow: 123456},
    {shortName: "ECCV", follow: 123456},
    {shortName: "ICML", follow: 123456},
    {shortName: "NeurIPS", follow: 123456},
    {shortName: "AAAI", follow: 123456},
    {shortName: "ACL", follow: 123456},
    {shortName: "ICRA", follow: 123456},
]

function MostJourFollow(){
    return(
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>最多浏览</>}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th className="text-base">#</th>
                        <th className="text-base">期刊</th>
                        <th className="text-base">关注</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userSourceData.map((u, k) => {
                                return(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <td>{u.shortName}</td>
                                        <td>{u.follow ?  <span className="bg-green-700 badge px-2 text-white">{u.follow}</span> : null}</td>
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

export default MostJourFollow