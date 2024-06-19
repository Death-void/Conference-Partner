import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'

import { useParams } from 'react-router-dom'
import ConferenceInfo from './components/ConferenceInfo'
import CallForPaperContent from './components/CallForPaperContent'
import RelatedConference from './components/RelatedConference'
import RelatedJournal from './components/RelatedJournal'
import Recommend from './components/Recommend'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'



function ConferencePage(){

    

    return(
        <>

        {/** ---------------------- User source channels table  ------------------------- */}
        
        <div className="flex justify-between space-x-8">
            <div className="w-4/5">
                <LeftContent  />
            </div>
            <div className="w-1/5">
                <RightContent/>
            </div>
        </div>
        </>
    )
}

export default ConferencePage