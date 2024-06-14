import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../../components/Cards/TitleCard"
import { showNotification } from '../../../common/headerSlice'
import InputText from "../../../../components/Input/InputText"
import TextAreaInput from "../../../../components/Input/TextAreaInput"
import BasicInfo from "./BasicInfo"
import FollowedConference from "./FollowedConference"
import JoinedConference from "./JoinedConference"
import FollowedJournal from "./FollowedJournal"
import VisitedConference from "./VisitedConference"
import VisitedJournal from "./VisitedJournal"

function LeftContent(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            <BasicInfo />
            <FollowedConference />
            <JoinedConference />
            <FollowedJournal />
            <VisitedConference />
            <VisitedJournal />
            <TitleCard title="Profile Settings" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="First Name" defaultValue="Yian" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Last Name" defaultValue="Yang" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Email Id" defaultValue="alex@Conference Partner.com" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Institution" defaultValue="ECNU" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="New Password" defaultValue="" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Verify New Password" defaultValue="" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Old Password" defaultValue="" updateFormValue={updateFormValue}/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <TextAreaInput labelTitle="My Cv" defaultValue="Doing what I love, part time traveller" updateFormValue={updateFormValue}/>
                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>Update</button></div>
            </TitleCard>
        </>
    )
}


export default LeftContent