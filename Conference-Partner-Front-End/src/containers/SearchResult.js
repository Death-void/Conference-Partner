import { useDispatch } from 'react-redux'
import { showNotification } from '../features/common/headerSlice'
import CallForPaperPaging from '../features/conference/components/CallForPaperPaging'
import CallForPaperJourPaging from '../features/journal/components/CallForPaperJourPaging'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function SearchResult() {

    const {search} = useParams()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [confInCallData, setConfInCallData] = useState([])
    const [jourInCallData, setJourInCallData] = useState([])
    

    useEffect(() => {
        //ConferenceChart
        // //console.log("Conference")
        Search(search)
    }, []);

    const Search = (searchText) => {
        const searchConf = async () => {
            const res = await axios.get(`/conferences/searchConfByName?name=${searchText}`).catch((err) => {
                console.log(err)
            })
            console.log("search conf", res)
            setConfInCallData(res.data)
        }
        searchConf()

        const searchJour = async () => {
            const res = await axios.get(`/journals/searchJourByName?name=${searchText}`).catch((err) => {
                console.log(err)
            })
            console.log("search jour", res)
            setJourInCallData(res.data)
        }
        searchJour()
    }

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
                {<CallForPaperPaging confData={confInCallData} title = "会议" />}
            </div>

            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <CallForPaperJourPaging confData={jourInCallData} title = "期刊"/>
            </div>
        </>
    )
}

export default SearchResult