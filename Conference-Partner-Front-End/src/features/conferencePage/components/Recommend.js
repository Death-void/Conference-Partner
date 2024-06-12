import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {CCF: "a", fullName: "	Artificial Intelligence", factor: "9.088", publisher: "Elsevier", ISSN: "0004-3702"},
    {CCF: "a", fullName: "	Artificial Intelligence in Medicine", factor: "5.038", publisher: "Elsevier", ISSN: "0933-3657"},
    {CCF: "a", fullName: "	Artificial Intelligence Review", factor: "5.000", publisher: "Springer", ISSN: "0269-2821"},
    {CCF: "a", fullName: "	Autonomous Robots", factor: "3.000", publisher: "Springer", ISSN: "0929-5593"},
    {CCF: "a", fullName: "	Computational Intelligence and Neuroscience", factor: "2.000", publisher: "Hindawi", ISSN: "1687-5265"},
    {CCF: "a", fullName: "	IEEE Transactions on Evolutionary Computation", factor: "9.000", publisher: "IEEE", ISSN: "1089-778X"},
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