import DashboardStats from './components/DashboardStats'
import AmountStats from './components/AmountStats'
import PageStats from './components/PageStats'

import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'
import UserChannels from './components/UserChannels'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DashboardTopBar from './components/DashboardTopBar'
import { useDispatch } from 'react-redux'
import {showNotification} from '../common/headerSlice'
import DoughnutChart from './components/DoughnutChart'
import { useState } from 'react'
import CallForPaperPaging from './components/CallForPaperPaging'
import CallForPaperFinishedPaging from './components/CallForPaperFinishedPaging'
import PaginatedItems from './components/PaginateItems'

const statsData = [
    {title : "会议", value : "34.7k", icon : <UserGroupIcon className='w-8 h-8'/>, description : ""},
    {title : "期刊", value : "345", icon : <CreditCardIcon className='w-8 h-8'/>, description : ""},
    {title : "科研人员", value : "450", icon : <CircleStackIcon className='w-8 h-8'/>, description : ""},
    {title : "页面浏览", value : "5.6k", icon : <UsersIcon className='w-8 h-8'/>, description : ""},
]



function Conference(){

    const dispatch = useDispatch()
 

    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(showNotification({message : `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status : 1}))
    }

    return(
        <>

        {/** ---------------------- User source channels table  ------------------------- */}
        
            {/* <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <PaginatedItems />
            </div> */}

            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <CallForPaperPaging />
            </div>

            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <CallForPaperFinishedPaging />
            </div>
        </>
    )
}

export default Conference