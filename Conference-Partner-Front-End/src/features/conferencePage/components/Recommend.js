import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {ccf: "a", name: "	Artificial Intelligence", impactFactor: "9.088", publisher: "Elsevier", issn: "0004-3702"},
    {ccf: "a", name: "	Artificial Intelligence in Medicine", impactFactor: "5.038", publisher: "Elsevier", issn: "0933-3657"},
    {ccf: "a", name: "	Artificial Intelligence Review", impactFactor: "5.000", publisher: "Springer", issn: "0269-2821"},
    {ccf: "a", name: "	Autonomous Robots", impactFactor: "3.000", publisher: "Springer", issn: "0929-5593"},
    {ccf: "a", name: "	Computational Intelligence and Neuroscience", impactFactor: "2.000", publisher: "Hindawi", issn: "1687-5265"},
    {ccf: "a", name: "	IEEE Transactions on Evolutionary Computation", impactFactor: "9.000", publisher: "IEEE", issn: "1089-778X"},
]

function Recommend(){
    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>推荐</>}>
            {/** Table Data */}
            <div className="overflow-x-auto">
                
            </div>
        </TitleCard>
    )
}

export default Recommend