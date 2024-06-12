import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'

const jourInfo = {
    id : 1,
    name: "IEEE Software",
    url : "https://www.computer.org/csdl/magazine/so",
    factor: "9.088",
    publisher: "IEEE",
    ISSN: "0740-7459",
    visit: 100,
    follow: 100,

}



function JournalInfo(){

    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>期刊信息</>}>
            {/** Table Data */}

            <div className="overflow-x-auto">
                <div className="flex justify-center font-bold">
                    <p>{jourInfo.name}</p>
                </div>
                <br/>
                <div className="flex justify-center">
                    <table className="flex justify-center w-auto border-0">
                        <tbody className="text-center">
                            <tr>
                                <td colSpan={3}>
                                    <a href={jourInfo.url} className="hover:underline text-blue-500">{jourInfo.url}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>影响因子：</td>
                                <td></td>
                                <td>{jourInfo.factor}</td>
                            </tr>
                            <tr>
                                <td>出版商：</td>
                                <td></td>
                                <td>{jourInfo.publisher}</td>
                            </tr>
                            <tr>
                                <td>ISSN：</td>
                                <td></td>
                                <td>{jourInfo.ISSN}</td>
                            </tr>
                            <tr>
                                <td>浏览：</td>
                                <td></td>
                                <td>{jourInfo.visit ? <span className="bg-green-700 badge px-2 text-white">{jourInfo.visit}</span> : null }</td>    
                            </tr>
                            <tr>
                                <td>关注：</td>
                                <td></td>
                                <td>{jourInfo.follow ? <span className="bg-blue-700 badge px-2 text-white">{jourInfo.follow}</span> : null }</td>     
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TitleCard>
    )
}   

export default JournalInfo