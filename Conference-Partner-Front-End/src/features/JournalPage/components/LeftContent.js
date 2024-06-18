import { useEffect } from "react"
import CallForPaperContent from "./CallForPaperContent"
import JournalInfo from "./JournalInfo"
import Recommend from "./Recommend"
import RelatedConference from "./RelatedConference"
import RelatedJournal from "./RelatedJournal"
import SpecialIssues from "./SpecialIssues"

function LeftContent(props){

    const updateCount = props.updateCound
    useEffect(() => {
        console.log(updateCount)
    },[updateCount])

    return(
        <div>

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <JournalInfo confData={props.confData}/>
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <CallForPaperContent  confData={props.confData}/>
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <SpecialIssues confData={props.confData} />
            </div>
            {/* <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <RelatedJournal />
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <RelatedConference />
            </div> */}
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <Recommend />
            </div>
        </div>
    )
}

export default LeftContent