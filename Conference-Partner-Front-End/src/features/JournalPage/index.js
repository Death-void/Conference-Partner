import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'

import { useParams } from 'react-router-dom'
import JournalInfo from './components/JournalInfo'
import CallForPaperContent from './components/CallForPaperContent'
import RelatedConference from './components/RelatedConference'
import RelatedJournal from './components/RelatedJournal'
import Recommend from './components/Recommend'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'



function JournalPage(){

    const {id} = useParams();

    const [confData, setConfData] = useState({})
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [updateCound, setUpdateCount] = useState(0)



    useEffect(() => {
        // Call API to get conference details
        axios.get(`/journals/${id}`).then((res) => {
            if(res.status === 200){
                setConfData(res.data)
            }
        }).catch((err) => {
            setLoading(false)
            setErrorMessage("Invalid credentials")
        })
    }
    ,[])

    

    return(
        <>

        {/** ---------------------- User source channels table  ------------------------- */}
        
        <div className="flex justify-between space-x-8">
            <div className="w-4/5">
                <LeftContent confData={confData}/>
            </div>
            <div className="w-1/5">
                <RightContent confData={confData}/>
            </div>
        </div>
        </>
    )
}

export default JournalPage