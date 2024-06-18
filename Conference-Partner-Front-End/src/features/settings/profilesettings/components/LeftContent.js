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
        //console.log(updateType)
    }

    return(
        <>
            <BasicInfo />
            <FollowedConference />
            <JoinedConference />
            <FollowedJournal />
            {/* <VisitedConference />
            <VisitedJournal /> */}

        </>
    )
}


export default LeftContent