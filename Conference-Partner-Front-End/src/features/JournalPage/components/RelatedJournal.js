import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {ccf: "a", name: "	Artificial Intelligence", impactFactor: "9.088", publisher: "Elsevier", ISSN: "0004-3702"},
    {ccf: "a", name: "	Artificial Intelligence in Medicine", impactFactor: "5.038", publisher: "Elsevier", ISSN: "0933-3657"},
    {ccf: "a", name: "	Artificial Intelligence Review", impactFactor: "5.000", publisher: "Springer", ISSN: "0269-2821"},
    {ccf: "a", name: "	Autonomous Robots", impactFactor: "3.000", publisher: "Springer", ISSN: "0929-5593"},
    {ccf: "a", name: "	Computational Intelligence and Neuroscience", impactFactor: "2.000", publisher: "Hindawi", ISSN: "1687-5265"},
    {ccf: "a", name: "	IEEE Transactions on Evolutionary Computation", impactFactor: "9.000", publisher: "IEEE", ISSN: "1089-778X"},
]

function RelatedJournal(){
    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>相关期刊</>}>
            {/** Table Data */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base">ccf</th>
                            <th className="text-base">全称</th>
                            <th className="text-base">影响因子</th>
                            <th className="text-base">出版商</th>
                            <th className="text-base">ISSN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userSourceData.map((u, k) => {
                            return (
                                <tr key={k}>
                                    <td>{u.ccf ? <span className="bg-blue-500 badge px-2 text-white">{u.ccf}</span> : null }</td>
                                    <td>{u.name}</td>
                                    <td>{u.impactFactor}</td>
                                    <td>{u.publisher}</td>
                                    <td>{u.ISSN}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </TitleCard>
    )
}

export default RelatedJournal