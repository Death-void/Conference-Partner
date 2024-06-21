import BodyCard from "../../../../components/Cards/BodyCard"
import TitleCard from "../../../../components/Cards/TitleCard"
import {UserPlusIcon, GlobeAsiaAustraliaIcon, PencilSquareIcon, GiftIcon} from "@heroicons/react/24/outline"
import InputText from "../../../../components/Input/InputText"
import TextAreaInput from "../../../../components/Input/TextAreaInput"
import { useDispatch } from "react-redux"
import { showNotification } from '../../../common/headerSlice'
import axios from 'axios'
import {useState} from 'react'
import { useEffect } from 'react'


function RightContent(){

    const dispatch = useDispatch()

    const CONFERENCE_DATA = {
        name: "",
        abbreviation: "",
        ccf: "",
        core: "",
        qualis: "",
        frequency: 0,
        conferenceDate: "",
        location: "",
        notificationDate: "",
        submissionDeadline: "",
        website: "",
        isPostponed: true,
        // lastModifiedDate: "",
        // lastModifiedUser: "",
        callForPapers: ""
    }

    const JOURNAL_DATA = {
        name: "",
        ccf: "",
        impactFactor: 0,
        issn: "",
        publisher: "",
        submissionDeadline: "",
        website: "",
        specialIssue: "",
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [conferenceObj, setConferenceObj] = useState(CONFERENCE_DATA)
    const [journalObj, setJournalObj] = useState(JOURNAL_DATA)
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

    // Call API to update profile settings changes
    const updateProfile = () => {
        const f = async () => {
            const res = await axios.put(`/user/updateUserInfo/${localStorage.getItem("id")}`, basicInfo).catch((err) => {
                setLoading(false)
                dispatch(showNotification({message : "Failed to update profile", status : 0}))
            })
            console.log("updateProfile", res)
        }
        f()
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const addConference = () => {   
        setErrorMessage("")

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
            //setLoading(true)
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

    const addJournal = () => {
        setErrorMessage("")
        if(journalObj.name.trim() === "")return setErrorMessage("Name is required! (use any value)")
        if(journalObj.ccf.trim() === "")return setErrorMessage("ccf is required! (use any value)")
        if(journalObj.impactFactor === 0)return setErrorMessage("Impact Factor is required! (use any value)")
        if(journalObj.issn.trim() === "")return setErrorMessage("issn is required! (use any value)")
        if(journalObj.publisher.trim() === "")return setErrorMessage("Publisher is required! (use any value)")
        if(journalObj.submissionDeadline.trim() === "")return setErrorMessage("Submission Deadline is required! (use any value)")
        if(journalObj.website.trim() === "")return setErrorMessage("Website is required! (use any value)")
        if(journalObj.specialIssue.trim() === "")return setErrorMessage("Special Issue is required! (use any value)")
        else {
            //setLoading(true)
            const f = async () => {
                const res = await axios.post('/journals', journalObj).catch((err) => {
                    setLoading(false)
                    dispatch(showNotification({message : "Failed to add journal", status : 0}))
                })
                console.log("addJournal", res)
            }
            f()
            dispatch(showNotification({message : "Journal Added", status : 1}))
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setConferenceObj({...conferenceObj, [updateType] : value})
        setJournalObj({...journalObj, [updateType] : value})
    }

    const updateInputValue = (updateType, value) => {
        setErrorMessage("")
        setBasicInfo({...basicInfo, [updateType] : value})
    }

    return(
        <div>

        {/** ---------------------- User source channels table  ------------------------- */}

            <div className="mt-6">
                <BodyCard>
                    <div className="flex justify-between" >
                        <div className="flex justify-start space-x-3">
                            <PencilSquareIcon className="h-6 w-6"/>
                            <button className="" onClick={()=>document.getElementById('update_profile_modal').showModal()}>编辑账户</button>
                        </div>
                    </div>
                </BodyCard>
            </div>

            <dialog id="update_profile_modal" className="modal">
                <div>
                    <TitleCard title="Profile Settings">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>姓名</span>
                            </label>
                            <input type={"text"} value={basicInfo.userName} onChange={(e) => updateInputValue("userName", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>电子邮箱</span>
                            </label>
                            <input type={"text"} value={basicInfo.email} onChange={(e) => updateInputValue("email", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>科研机构</span>
                            </label>
                            <input type={"text"} value={basicInfo.institution} onChange={(e) => updateInputValue("institution", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                        <div className={`form-control w-full`}>
                            <label className="label">
                                <span className={"label-text text-base-content "}>更改密码</span>
                            </label>
                            <input type={"text"}  onChange={(e) => updateInputValue("password", e.target.value)}className="input  input-bordered w-full " />
                        </div>
                    </div>

                    <form method="dialog" className="modal-backdrop">
                    <div className="mt-16"><button className="btn btn-primary float-right" onClick={()=> updateProfile()}>Confirm</button></div>
                    </form>
                    
                    </TitleCard>
                </div>
            </dialog>

            { localStorage.getItem("role") === "ROLE_ADMIN" && <div className="mt-6">
                <BodyCard>
                    <div className="flex justify-between" >
                        <div className="flex justify-start space-x-3">
                            <PencilSquareIcon className="h-6 w-6"/>
                            <button className="" onClick={()=>document.getElementById('add_conference_modal').showModal()}>添加会议</button>
                        </div>
                    </div>
                </BodyCard>
            </div>}

            {localStorage.getItem("role") === "ROLE_ADMIN" && <dialog id="add_conference_modal" className="modal">
                <div>
                    <TitleCard title="添加会议">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <InputText labelTitle="全称" updateType="name" placeholder="Public Key Cryptography" updateFormValue={updateFormValue}/>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <InputText labelTitle="简称" updateType="abbreviation" placeholder="PKC" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="ccf" updateType="ccf" placeholder="A" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="core" updateType="core" placeholder="B" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="qualis" updateType="qualis" placeholder="C" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="界数" updateType="frequency" placeholder="1" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="会议日期" updateType="conferenceDate" placeholder="2024-10-10" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="地点" updateType="location" placeholder="Shanghai, China" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="通知日期" updateType="notificationDate" placeholder="2024-09-10" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="截稿日期" updateType="submissionDeadline" placeholder="2024-06-10" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="网址" updateType="website" placeholder="http://infocomm.com" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="延期" updateType="isPostponed" placeholder="true" updateFormValue={updateFormValue}/>
                        {/* <InputText labelTitle="最后修改日期" updateType="lastModifiedDate" placeholder="2024-01-01" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="最后修改者" updateType="lastModifiedUser" placeholder="Tom" updateFormValue={updateFormValue}/> */}
                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <TextAreaInput labelTitle="征稿" updateType="callForPapers" placeholder="Call For Papers" updateFormValue={updateFormValue}/>
                    </div>

                    <form method="dialog" className="modal-backdrop">
                    <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => addConference()}>Confirm</button></div>
                    </form>
                    
                    </TitleCard>
                </div>
            </dialog> }

            <div className="mt-6">
                <BodyCard>
                    <div className="flex justify-between" >
                        <div className="flex justify-start space-x-3">
                            <PencilSquareIcon className="h-6 w-6"/>
                            <button className="" onClick={()=>document.getElementById('add_journal_modal').showModal()}>添加期刊</button>
                        </div>
                    </div>
                </BodyCard>
            </div>

            <dialog id="add_journal_modal" className="modal">
                <div>
                    <TitleCard title="添加期刊">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <InputText labelTitle="全称" updateType="name" placeholder="Public Key Cryptography" updateFormValue={updateFormValue}/>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <InputText labelTitle="ccf" updateType="ccf" placeholder="A" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="影响因子" updateType="impactFactor" placeholder="9.001" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="issn" updateType="issn" placeholder="0972-796X" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="出版商" updateType="publisher" placeholder="IEEE" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="截稿日期" updateType="submissionDeadline" placeholder="2024-06-10" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="网址" updateType="website" placeholder="http://infocomm.com" updateFormValue={updateFormValue}/>
                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <InputText labelTitle="callForPapers" updateType="callForPapers" placeholder="callForPapers..." updateFormValue={updateFormValue}/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <TextAreaInput labelTitle="SpecialIssue" updateType="specialIssue" placeholder="Special Issue ..." updateFormValue={updateFormValue}/>
                    </div>

                    <form method="dialog" className="modal-backdrop">
                    <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => addJournal()}>Confirm</button></div>
                    </form>
                    
                    </TitleCard>
                </div>
            </dialog>
            
            <div className="mt-4">
                <TitleCard title={<><GiftIcon className="h-6 w-6 inline-block mr-2"/>惊喜</>}>
                    
                </TitleCard>
            </div>
            
        </div>
    )
}

export default RightContent