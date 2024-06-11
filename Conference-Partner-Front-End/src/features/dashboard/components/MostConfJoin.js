import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {shortName: "ICRA", join: 99},
    {shortName: "IROS", join: 123456},
    {shortName: "CVPR", join: 123456},
    {shortName: "ICCV", join: 123456},
    {shortName: "ECCV", join: 123456},
    {shortName: "ICML", join: 123456},
    {shortName: "NeurIPS", join: 123456},
    {shortName: "AAAI", join: 123456},
    {shortName: "ACL", join: 123456},
    {shortName: "ICLR", join: 123456},
]

function MostConfJoin(){
    return(
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>最多参加</>}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th className="text-base">#</th>
                        <th className="text-base">会议</th>
                        <th className="text-base">参加</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userSourceData.map((u, k) => {
                                return(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <td>{u.shortName}</td>
                                        <td>{u.join ?  <span className="bg-green-700 badge px-2 text-white">{u.join}</span> : null}</td>
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

export default MostConfJoin