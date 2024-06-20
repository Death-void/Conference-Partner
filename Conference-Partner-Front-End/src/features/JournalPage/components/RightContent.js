import axios from "axios"
import BodyCard from "../../../components/Cards/BodyCard"
import TitleCard from "../../../components/Cards/TitleCard"
import Subtitle from "../../../components/Typography/Subtitle"
import CallForPaperContent from "./CallForPaperContent"
import JournalInfo from "./JournalInfo"
import Recommend from "./Recommend"
import RelatedConference from "./RelatedConference"
import RelatedJournal from "./RelatedJournal"
import {UserPlusIcon, GlobeAsiaAustraliaIcon, PencilSquareIcon, GiftIcon} from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { showNotification } from '../../common/headerSlice'
import { useParams } from "react-router-dom"



function RightContent(props){


    const jourInfo = props.confData
    const dispatch = useDispatch()
    const {id} = useParams()

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [journalObj, setJournalObj] = useState({})
    const [followers, setFollowers] = useState([])
    const [isFollowed, setIsFollowed] = useState(false)

    useEffect(() => {
        setJournalObj(props.confData)
        const f = async () => {
            const res = await axios.get(`/journals/getFollowersInJournal?journalId=${id}`, ).catch((err) => {
                console.log(err)
            })
            setFollowers(res.data)
            for (let i = 0; i < res.data.length; i++) {
                if(res.data[i].id.toString() === localStorage.getItem("id")){
                    setIsFollowed(true)
                    break
                }
            }
        }
        f()
        console.log("confData", props.confData)
    }, [isFollowed])

    const updateFormValue = (updateType, value) => {
        setErrorMessage("")
        setJournalObj({...journalObj, [updateType] : value})
    }

    const updateJournal = () => {   
        setErrorMessage("")
        console.log(journalObj)
        if(journalObj.name.trim() === "")return setErrorMessage("Name is required! (use any value)")
        if(journalObj.impactFactor.trim() === "")return setErrorMessage("Impact Factor is required! (use any value)")
        if(journalObj.ccf.trim() === "")return setErrorMessage("CCF is required! (use any value)")
        if(journalObj.issn.trim() === "")return setErrorMessage("ISSN is required! (use any value)")
        if(journalObj.publisher.trim() === "")return setErrorMessage("Publisher is required! (use any value)")
        if(journalObj.submissionDeadline.trim() === "")return setErrorMessage("Submission Deadline is required! (use any value)")
        if(journalObj.website.trim() === "")return setErrorMessage("Website is required! (use any value)")
        if(journalObj.callForPapers.trim() === "")return setErrorMessage("Call For Papers is required! (use any value)")
        if(journalObj.specialIssue.trim() === "")return setErrorMessage("Special Issue is required! (use any value)")
        else {
            setLoading(true)
            const f = async () => {
                const res = await axios.put(`/journals/${jourInfo.id}`, journalObj).catch((err) => {
                    setLoading(false)
                    dispatch(showNotification({message : "Failed to add conference", status : 0}))
                })
                console.log("update journal", res)
            }
            f()
            dispatch(showNotification({message : "Journal Updated", status : 1}))
            window.location.reload()
        }
    }

    const userFollow = async(confId, userId) => {
        const res = await axios.post("/follow/journal/follow", {journalId: confId, userId: userId}).catch(err => console.log(err))
        window.location.reload()
    }

    return(
        <div>

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-1 mt-8">
                <button onClick={()=>userFollow(jourInfo.id, localStorage.getItem("id"))}>
                <BodyCard>
                    <div className="flex justify-between" >
                        <div className="flex justify-start space-x-3">
                            <UserPlusIcon className="h-6 w-6"/>
                            <p className="">{isFollowed?"已关注":"我要关注"}</p>
                        </div>
                        <div>
                            {jourInfo.follow ? <span className="bg-blue-500 badge px-2 text-white">{jourInfo.follow}</span> : null }
                        </div>
                    </div>
                </BodyCard>
                </button>
                
            </div>

            {localStorage.getItem("role") === "ROLE_ADMIN" && <div>
                    <BodyCard>
                        <div className="flex justify-between" >
                            <div className="flex justify-start space-x-3">
                                <PencilSquareIcon className="h-6 w-6"/>
                                <button className="" onClick={()=>document.getElementById('add_conference_modal').showModal()}>编辑CFP</button>
                            </div>
                        </div>
                    </BodyCard>
                
            </div>}


            <dialog id="add_conference_modal" className="modal">
                <div>
                    <TitleCard title="更新会议">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>全称</span>
                            </label>
                            <input type={"text"} value={journalObj.name} onChange={(e) => updateFormValue("name", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                    </div>  
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>影响因子</span>
                            </label>
                            <input type={"text"} value={journalObj.impactFactor} onChange={(e) => updateFormValue("impactFactor", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>CCF</span>
                            </label>
                            <input type={"text"} value={journalObj.ccf} onChange={(e) => updateFormValue("ccf", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>ISSN</span>
                            </label>
                            <input type={"text"} value={journalObj.issn} onChange={(e) => updateFormValue("issn", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>出版商</span>
                            </label>
                            <input type={"text"} value={journalObj.publisher} onChange={(e) => updateFormValue("publisher", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>截稿日期</span>
                            </label>
                            <input type={"text"} value={journalObj.submissionDeadline} onChange={(e) => updateFormValue("submissionDeadline", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>网址</span>
                            </label>
                            <input type={"text"} value={journalObj.website} onChange={(e) => updateFormValue("website", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        {/* <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>延期</span>
                            </label>
                            <input type={"text"} value={journalObj.isPostponed} onChange={(e) => updateFormValue("isPostponed", e.target.value)}className="input  input-bordered w-full " />
                        </div> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>征稿</span>
                            </label>
                            <textarea value={journalObj.callForPapers} onChange={(e) => updateFormValue("callForPapers", e.target.value)}className="textarea textarea-bordered w-full " />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>SpecialIssue</span>
                            </label>
                            <textarea value={journalObj.specialIssue} onChange={(e) => updateFormValue("specialIssue", e.target.value)}className="textarea textarea-bordered w-full " />
                        </div>
                    </div>

                    <form method="dialog" className="modal-backdrop">
                    <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateJournal()}>Confirm</button></div>
                    </form>
                    
                    </TitleCard>
                </div>
            </dialog>


            <div className="mt-10">
                <BodyCard>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>关注者</th>
                            </tr>   
                        </thead>
                        <tbody>
                            {followers && followers.map((f, k) => {
                                return (
                                    <tr key={k}>
                                        <td>{f.userName}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </BodyCard>
            </div>
            
            <div className="mt-10">
                <TitleCard title={<><GiftIcon className="h-6 w-6 inline-block mr-2"/>惊喜</>}>
                    
                </TitleCard>
            </div>
            
        </div>
    )
}

export default RightContent