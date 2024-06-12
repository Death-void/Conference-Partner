import CallForPaperContent from "./CallForPaperContent"
import JournalInfo from "./JournalInfo"
import Recommend from "./Recommend"
import RelatedConference from "./RelatedConference"
import RelatedJournal from "./RelatedJournal"
import SpecialIssues from "./SpecialIssues"

function LeftContent(){



    return(
        <div>

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <JournalInfo />
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <CallForPaperContent />
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <SpecialIssues />
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <RelatedJournal />
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <RelatedConference />
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <Recommend />
            </div>
        </div>
    )
}

export default LeftContent