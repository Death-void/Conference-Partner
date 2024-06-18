import { useDispatch } from 'react-redux'
import { showNotification } from '../common/headerSlice'
import CallForPaperPaging from './components/CallForPaperPaging'
import CallForPaperFinishedPaging from './components/CallForPaperFinishedPaging'
import { useEffect, useState } from 'react'
import axios from 'axios'


function Conference() {

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [confInCallData, setConfInCallData] = useState([])
    const [confFinishedData, setConfFinishedData] = useState([])

    useEffect(() => {
        //ConferenceChart
        // //console.log("Conference")
        const f = async () => {
            try {
                const { data } = await axios.get(`/conferences/getConfInCall`);
                setConfInCallData(data)

            } catch (err) {
                setLoading(false)
                setErrorMessage("Invalid credentials")
            }
        }
        f()

        const f2 = async () => {
            try {
                const { data } = await axios.get(`/conferences/getConfFinished`);
                setConfFinishedData(data)

            } catch (err) {
                setLoading(false)
                setErrorMessage("Invalid credentials")
            }
        }
        f2()

    }, []);

    const dispatch = useDispatch()


    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(showNotification({ message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status: 1 }))
    }

    return (
        <>

            {/** ---------------------- User source channels table  ------------------------- */}

            {/* <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <PaginatedItems />
            </div> */}

            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                {<CallForPaperPaging confData={confInCallData} />}
            </div>

            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <CallForPaperFinishedPaging confFinishedData={confFinishedData}/>
            </div>
        </>
    )
}

export default Conference