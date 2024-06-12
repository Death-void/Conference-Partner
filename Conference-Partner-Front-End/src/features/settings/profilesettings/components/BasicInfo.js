import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../../components/Cards/TitleCard";
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'

const basicInfo = {
    id : 1,
    firstName: "Yian",
    lastName: "Yang",
    institution: "ECNU",
    email: "email@ecnu.edu.cn",
    registerTime: "2021-06-10",
    liveness: 100,
}



function BasicInfo(){

    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>基本信息</>}>
            {/** Table Data */}

            <div className="overflow-x-auto">
                <div className="flex justify-center">
                    <table className="flex justify-center w-auto border-0">
                        <tbody className="text-center">
                            <tr>
                                <td>姓名：</td>
                                <td></td>
                                <td>{basicInfo.firstName + basicInfo.lastName}</td>
                            </tr>
                            <tr>
                                <td>电子邮箱：</td>
                                <td></td>
                                <td>{basicInfo.email}</td>
                            </tr>
                            <tr>
                                <td>科研机构：</td>
                                <td></td>
                                <td>{basicInfo.institution}</td>
                            </tr>
                            <tr>
                                <td>注册时间：</td>
                                <td></td>
                                <td>{basicInfo.registerTime}</td>
                            </tr>
                            <tr>
                                <td>活跃度：</td>
                                <td></td>
                                <td>{basicInfo.liveness}</td>    
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TitleCard>
    )
}   

export default BasicInfo