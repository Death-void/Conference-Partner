import CallForPaperContent from "./CallForPaperContent"
import ConferenceInfo from "./ConferenceInfo"
import Recommend from "./Recommend"
import RelatedConference from "./RelatedConference"
import RelatedJournal from "./RelatedJournal"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function LeftContent(){

    

    return(
        <div>

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <ConferenceInfo />
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <CallForPaperContent />
            </div>
            {/* <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <RelatedConference confData={props.confData} />
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <RelatedJournal confData={props.confData} />
            </div> */}
            {/* <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <Recommend />
            </div> */}
        </div>
    )
}

export default LeftContent