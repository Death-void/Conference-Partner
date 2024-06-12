import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'
import BasicInfo from "./components/BasicInfo"
import LeftContent from "./components/LeftContent"
import RightContent from "./components/RightContent"

function ProfileSettings(){




    return(
        <>

        {/** ---------------------- User source channels table  ------------------------- */}
        
        <div className="flex justify-between space-x-8">
            <div className="w-4/5">
                <LeftContent />
            </div>
            <div className="w-1/5">
                <RightContent />
            </div>
        </div>
        </>
    )
}


export default ProfileSettings