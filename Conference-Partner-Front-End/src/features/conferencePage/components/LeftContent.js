import CallForPaperContent from "./CallForPaperContent"
import ConferenceInfo from "./ConferenceInfo"
import Recommend from "./Recommend"
import RelatedConference from "./RelatedConference"
import RelatedJournal from "./RelatedJournal"

function LeftContent(props){

    return(
        <div>

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <ConferenceInfo confData={props.confData}/>
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <CallForPaperContent confData={props.confData} />
            </div>
            {/* <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <RelatedConference confData={props.confData} />
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <RelatedJournal confData={props.confData} />
            </div> */}
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <Recommend confData={props.confData} />
            </div>
        </div>
    )
}

export default LeftContent