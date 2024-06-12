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



const statsData = [
    {title : "会议", value : "34.7k", icon : <UserGroupIcon className='w-8 h-8'/>, description : ""},
    {title : "期刊", value : "345", icon : <CreditCardIcon className='w-8 h-8'/>, description : ""},
    {title : "科研人员", value : "450", icon : <CircleStackIcon className='w-8 h-8'/>, description : ""},
    {title : "页面浏览", value : "5.6k", icon : <UsersIcon className='w-8 h-8'/>, description : ""},
]



function JournalPage(){

    const {id} = useParams();


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

export default JournalPage