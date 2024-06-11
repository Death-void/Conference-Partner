import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {shortName: "ICRA", visit: 1423534},
    {shortName: "IROS", visit: 123456},
    {shortName: "CVPR", visit: 123456},
    {shortName: "ICCV", visit: 123456},
    {shortName: "ECCV", visit: 123456},
    {shortName: "ICML", visit: 123456},
    {shortName: "NeurIPS", visit: 123456},
    {shortName: "AAAI", visit: 123456},
    {shortName: "ACL", visit: 123456},
    {shortName: "ICLR", visit: 123456},
]

function MostConfVisit(){
    return(
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>最多浏览</>}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th className="text-base">#</th>
                        <th className="text-base">会议</th>
                        <th className="text-base">浏览</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userSourceData.map((u, k) => {
                                return(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <td>{u.shortName}</td>
                                        <td>{u.visit ?  <span className="bg-green-700 badge px-2 text-white">{u.visit}</span> : null}</td>
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

export default MostConfVisit