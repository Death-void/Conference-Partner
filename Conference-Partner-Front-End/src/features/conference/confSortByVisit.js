import { useDispatch } from 'react-redux'
import {showNotification} from '../common/headerSlice'
import { useEffect } from 'react'
import CallForPaperPaging from './components/CallForPaperPaging'
import axios from 'axios'
import { useState } from 'react'


function ConfSourtByVisit(){

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [confData, setConfData] = useState([])

    useEffect(() => {
        //ConferenceChart
        axios.get(`/conferences/visit/all`).then((res) => {
            if(res.status === 200){
                setConfData(res.data)
                //console.log(res.data)
            }
        }).catch((err) => {
            setLoading(false)
            setErrorMessage("Invalid credentials")
        })

    }, []);


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
                <CallForPaperPaging confData={confData}/>
            </div>
        </>
    )
}

export default ConfSourtByVisit