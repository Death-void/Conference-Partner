import BodyCard from "../../../../components/Cards/BodyCard"
import TitleCard from "../../../../components/Cards/TitleCard"
import {UserPlusIcon, GlobeAsiaAustraliaIcon, PencilSquareIcon, GiftIcon} from "@heroicons/react/24/outline"

const confInfo = {
    id : 1,
    name: "AIR 2024: International Conference on Artificial Intelligence and Robots",
    url : "https://www.academicx.org/AIR/2024/",
    submissionDeadline: "2024-06-10",
    notificationDate: "",
    conferenceDate: "2024-08-10",
    location: "Shanghai, China",
    frequency: 1,
    viewCount: 100,
    follow: 100,
    join: 100,
    followers: ["张三", "李四", "王五", "赵六"],
    joiners: [
        {name: "张三", time: "2024"},
        {name: "李四", time: "2024"},
        {name: "王五", time: "2024"},
        {name: "赵六", time: "2024"},
    ],
}


function RightContent(){

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return(
        <div>

        {/** ---------------------- User source channels table  ------------------------- */}

            <div>
                <BodyCard>
                    <div className="flex justify-between" >
                        <div className="flex justify-start space-x-3">
                            <PencilSquareIcon className="h-6 w-6"/>
                            <button className="" onClick={scrollToBottom}>编辑账户</button>
                        </div>
                    </div>
                </BodyCard>
            </div>
            
            <div className="mt-10">
                <TitleCard title={<><GiftIcon className="h-6 w-6 inline-block mr-2"/>惊喜</>}>
                    
                </TitleCard>
            </div>
            
        </div>
    )
}

export default RightContent