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
import MessageChart from './components/MessageChart'
import CallForPaperChart from './components/CallForPaperChart'
import ConferenceChart from './components/ConferenceChart'
import JournalChart from './components/JournalChart'
import MostConfVisit from './components/MostConfVisit'
import MostConfFollow from './components/MostConfFollow'
import MostConfJoin from './components/MostConfJoin'
import MostJourVisit from './components/MostJourVisit'
import MostJourFollow from './components/MostJourFollow'
import axios from 'axios'

const statsData = [
    {title : "会议", value : "34.7k", icon : <UserGroupIcon className='w-8 h-8'/>, description : ""},
    {title : "期刊", value : "345", icon : <CreditCardIcon className='w-8 h-8'/>, description : ""},
    {title : "科研人员", value : "450", icon : <CircleStackIcon className='w-8 h-8'/>, description : ""},
    {title : "页面浏览", value : "5.6k", icon : <UsersIcon className='w-8 h-8'/>, description : ""},
]



function Dashboard(){

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    axios.get('/api/getPageVisitedNum').then((res) => {
        console.log(res)
        
        if(res.status === 200){
           
        }
    }).catch((err) => {
        setLoading(false)
        setErrorMessage("Invalid credentials")
    })

    const dispatch = useDispatch()

   
 

    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(showNotification({message : `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status : 1}))
    }

    return(
        <>
        {/** ---------------------- Select Period Content ------------------------- */}
            {/* <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/> */}
        
        {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k}/>
                        )
                    })
                }
            </div>



        {/** ---------------------- Different charts ------------------------- */}
            {/* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <LineChart />
                <BarChart />
            </div> */}
            
        {/** ---------------------- Different stats content 2 ------------------------- */}
        
            {/* <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
                <AmountStats />
                <PageStats />
            </div> */}

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid mt-4 grid-cols-1 gap-6">
                <MessageChart />
                {/* <DoughnutChart /> */}
            </div>

            <div className="grid mt-4 grid-cols-1 gap-6">
                <CallForPaperChart />
                {/* <DoughnutChart /> */}
            </div>

            <div className="grid mt-4 grid-cols-1 gap-6">
                < ConferenceChart/>
                {/* <DoughnutChart /> */}
            </div>

            <div className="grid mt-4 grid-cols-1 gap-6">
                <JournalChart />
                {/* <DoughnutChart /> */}
            </div>

            <div className="grid lg:grid-cols-3 mt-10 grid-cols-3 gap-6">
                <MostConfVisit />
                <MostConfFollow />
                <MostConfJoin />
            </div>

            <div className="grid lg:grid-cols-2 mt-10 grid-cols-2 gap-6">
                <MostJourVisit />
                <MostJourFollow />
            </div>
        </>
    )
}

export default Dashboard