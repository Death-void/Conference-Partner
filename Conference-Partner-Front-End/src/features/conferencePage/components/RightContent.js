import BodyCard from "../../../components/Cards/BodyCard"
import TitleCard from "../../../components/Cards/TitleCard"
import Subtitle from "../../../components/Typography/Subtitle"
import CallForPaperContent from "./CallForPaperContent"
import ConferenceInfo from "./ConferenceInfo"
import Recommend from "./Recommend"
import RelatedConference from "./RelatedConference"
import RelatedJournal from "./RelatedJournal"
import {UserPlusIcon, GlobeAsiaAustraliaIcon, PencilSquareIcon, GiftIcon} from "@heroicons/react/24/outline"
import axios from "axios"
import {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import { showNotification } from '../../common/headerSlice'
import InputText from "../../../components/Input/InputText"
import TextAreaInput from "../../../components/Input/TextAreaInput"


function RightContent(props){
    const confData = props.confData
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [conferenceObj, setConferenceObj] = useState({})
    const [followers, setFollowers] = useState([])
    const [joiners, setJoiners] = useState([])

    useEffect(() => {
        setConferenceObj(props.confData)
        const f = async () => {
            const res = await axios.get(`/conferences/getFollowersInConference?conferenceId=${props.confData.id}`, ).catch((err) => {
                console.log(err)
            })
            setFollowers(res.data)
        }
        f()

        const f2 = async () => {
            const res = await axios.get(`/conferences/getJoinersInConference?conferenceId=${props.confData.id}`, ).catch((err) => {
                console.log(err)
            })
            setJoiners(res.data)
            console.log("joiners", res.data)
        }
        f2()
    }, [props.confData])

    const updateFormValue = (updateType, value) => {
        setErrorMessage("")
        setConferenceObj({...conferenceObj, [updateType] : value})
    }

    const updateConference = () => {   
        setErrorMessage("")
        console.log(conferenceObj)
        if(conferenceObj.name.trim() === "")return setErrorMessage("Name is required! (use any value)")
        if(conferenceObj.abbreviation.trim() === "")return setErrorMessage("Abbreviation is required! (use any value)")
        if(conferenceObj.frequency === 0)return setErrorMessage("Frequency is required! (use any value)")
        if(conferenceObj.conferenceDate.trim() === "")return setErrorMessage("Conference Date is required! (use any value)")
        if(conferenceObj.location.trim() === "")return setErrorMessage("Location is required! (use any value)")
        if(conferenceObj.notificationDate.trim() === "")return setErrorMessage("Notification Date is required! (use any value)")
        if(conferenceObj.submissionDeadline.trim() === "")return setErrorMessage("Submission Deadline is required! (use any value)")
        if(conferenceObj.website.trim() === "")return setErrorMessage("Website is required! (use any value)")
        // if(conferenceObj.lastModifiedDate.trim() === "")return setErrorMessage("Last Modified Date is required! (use any value)")
        // if(conferenceObj.lastModifiedUser.trim() === "")return setErrorMessage("Last Modified User is required! (use any value)")
        if(conferenceObj.callForPapers.trim() === "")return setErrorMessage("Call For Papers is required! (use any value)")
        else {
            setLoading(true)
            const f = async () => {
                const res = await axios.post('/conferences', conferenceObj).catch((err) => {
                    setLoading(false)
                    dispatch(showNotification({message : "Failed to add conference", status : 0}))
                })
                //console.log("addCOnference", res)
            }
            f()
            dispatch(showNotification({message : "Conference Added", status : 1}))
        }
    }



    const userFollow = async(confId, userId) => {
        const res = await axios.post("/follow/conference/follow", {conferenceId: confId, userId: userId}).catch(err => console.log(err))
    }

    const userPaticipated = async(confId, userId) => {
        const res = await axios.post("/participate/conference/participate", {conferenceId: confId, userId: userId}).catch(err => console.log(err))
    }

    return(
        <div>

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-1 mt-8">
            <button onClick={()=>userFollow(confData.id, localStorage.getItem("id"))}>
                <BodyCard>
                    <div className="flex justify-between" >
                        <div className="flex justify-start space-x-3">
                            <UserPlusIcon className="h-6 w-6"/>
                            <p className="">我要关注</p>
                        </div>
                        {/* <div>
                            {conferenceObj.follow ? <span className="bg-blue-500 badge px-2 text-white">{conferenceObj.follow}</span> : null }
                        </div> */}
                    </div>
                </BodyCard>
            </button>
            </div>

            <div className="grid lg:grid-cols-1 mt-1">
                <button onClick={()=>userPaticipated(confData.id, localStorage.getItem("id"))}>
                <BodyCard>
                    <div className="flex justify-between" >
                        <div className="flex justify-start space-x-3">
                            <GlobeAsiaAustraliaIcon className="h-6 w-6"/>
                            <p className="">我要参加</p>
                        </div>
                        {/* <div>
                            {conferenceObj.join ? <span className="bg-green-500 badge px-2 text-white">{conferenceObj.join}</span> : null }
                        </div> */}
                    </div>
                </BodyCard>
                </button>
            </div>

            

            {localStorage.getItem("isAdmin") === "true" && <div>
                
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
                            <input type={"text"} value={conferenceObj.name} onChange={(e) => updateFormValue("name", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                    </div>  
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>简称</span>
                            </label>
                            <input type={"text"} value={conferenceObj.abbreviation} onChange={(e) => updateFormValue("abbreviation", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>CCF</span>
                            </label>
                            <input type={"text"} value={conferenceObj.ccf} onChange={(e) => updateFormValue("ccf", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>CORE</span>
                            </label>
                            <input type={"text"} value={conferenceObj.core} onChange={(e) => updateFormValue("core", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>Qualis</span>
                            </label>
                            <input type={"text"} value={conferenceObj.qualis} onChange={(e) => updateFormValue("qualis", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>界数</span>
                            </label>
                            <input type={"text"} value={conferenceObj.frequency} onChange={(e) => updateFormValue("frequency", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>会议日期</span>
                            </label>
                            <input type={"text"} value={conferenceObj.conferenceDate} onChange={(e) => updateFormValue("conferenceDate", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>地点</span>
                            </label>
                            <input type={"text"} value={conferenceObj.location} onChange={(e) => updateFormValue("location", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>通知日期</span>
                            </label>
                            <input type={"text"} value={conferenceObj.notificationDate} onChange={(e) => updateFormValue("notificationDate", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>截稿日期</span>
                            </label>
                            <input type={"text"} value={conferenceObj.submissionDeadline} onChange={(e) => updateFormValue("submissionDeadline", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>网址</span>
                            </label>
                            <input type={"text"} value={conferenceObj.website} onChange={(e) => updateFormValue("website", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>延期</span>
                            </label>
                            <input type={"text"} value={conferenceObj.isPostponed} onChange={(e) => updateFormValue("isPostponed", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>征稿</span>
                            </label>
                            <textarea value={conferenceObj.callForPapers} onChange={(e) => updateFormValue("callForPapers", e.target.value)}className="textarea textarea-bordered w-full " />
                        </div>
                    </div>

                    <form method="dialog" className="modal-backdrop">
                    <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateConference()}>Update</button></div>
                    </form>
                    
                    </TitleCard>
                </div>
            </dialog>

            <div className="mt-10">
                <BodyCard>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>关注者ID</th>
                            </tr>   
                        </thead>
                        <tbody>
                            {followers && followers.map((f, k) => {
                                return (
                                    <tr key={k}>
                                        <td>{f}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </BodyCard>
            </div>

            <div className="mt-10"> 
                <BodyCard>
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th>参加者ID</th>
                            </tr>   
                        </thead>
                        <tbody>
                            {joiners && joiners.map((f, k) => {
                                return (
                                    <tr key={k}>
                                        <td>{f}</td>
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