import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../../components/Cards/TitleCard";
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'
import axios from 'axios'



function BasicInfo(){

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [basicInfo, setBasicInfo] = useState({})

    useEffect(() => {
        // //console.log("BasicInfo")
        const f = async () => {
            const res = await axios.get(`/user/getUserInfo/${localStorage.getItem("id")}`).catch((err) => {
                setLoading(false)
                setErrorMessage("Invalid credentials")
            })
            setBasicInfo(res.data)
            //console.log("basic info", res.data)
        }
        f()
    }
    ,[])


    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>基本信息</>}>
            {/** Table Data */}

            <div className="overflow-x-auto">
                <div className="flex justify-center">
                    <table className="flex justify-center w-auto border-0">
                        <tbody className="text-center">

                            <tr>
                                <td>姓名：</td>
                                <td className="w-20"></td>
                                <td>{basicInfo.userName}</td>
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
                                <td>{basicInfo.registrationTime}</td>
                            </tr>
                            {/* <tr>
                                <td>活跃度：</td>
                                <td></td>
                                <td>{basicInfo.liveness}</td>    
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </TitleCard>
    )
}   

export default BasicInfo