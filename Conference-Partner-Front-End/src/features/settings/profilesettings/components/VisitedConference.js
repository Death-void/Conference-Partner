import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import { TrashIcon } from "@heroicons/react/24/outline";
import TitleCard from "../../../../components/Cards/TitleCard";
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'

const items = [
    {ccf: "", core: "c", qualis: "", abbreviation: "AIR", name: "International Conference on Artificial Intelligence and Robots", delay: "Delay", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "a", core: "a", qualis: "A1", abbreviation: "ICML", name: "International Conference on Machine Learning", delay: "", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "c", core: "b", qualis: "B2", abbreviation: "ICCV", name: "International Conference on Computer Vision", delay: "", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "b", core: "c", qualis: "B3", abbreviation: "ICRA", name: "International Conference on Robotics and Automation", delay: "Delay", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "a", core: "a", qualis: "A2", abbreviation: "CVPR", name: "Computer Vision and Pattern Recognition", delay: "", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "c", core: "b", qualis: "B4", abbreviation: "ICML", name: "International Conference on Machine Learning", delay: "", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "b", core: "c", qualis: "B5", abbreviation: "ICCV", name: "International Conference on Computer Vision", delay: "Delay", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "a", core: "a", qualis: "A1", abbreviation: "ICRA", name: "International Conference on Robotics and Automation", delay: "", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "c", core: "b", qualis: "B2", abbreviation: "CVPR", name: "Computer Vision and Pattern Recognition", delay: "", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "b", core: "c", qualis: "B3", abbreviation: "ICML", name: "International Conference on Machine Learning", delay: "Delay", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "", core: "c", qualis: "", abbreviation: "AIR", name: "International Conference on Artificial Intelligence and Robots", delay: "Delay", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "a", core: "a", qualis: "A1", abbreviation: "ICML", name: "International Conference on Machine Learning", delay: "", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "c", core: "b", qualis: "B2", abbreviation: "ICCV", name: "International Conference on Computer Vision", delay: "", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "b", core: "c", qualis: "B3", abbreviation: "ICRA", name: "International Conference on Robotics and Automation", delay: "Delay", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "a", core: "a", qualis: "A2", abbreviation: "CVPR", name: "Computer Vision and Pattern Recognition", delay: "", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "c", core: "b", qualis: "B4", abbreviation: "ICML", name: "International Conference on Machine Learning", delay: "", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "b", core: "c", qualis: "B5", abbreviation: "ICCV", name: "International Conference on Computer Vision", delay: "Delay", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "a", core: "a", qualis: "A1", abbreviation: "ICRA", name: "International Conference on Robotics and Automation", delay: "", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "c", core: "b", qualis: "B2", abbreviation: "CVPR", name: "Computer Vision and Pattern Recognition", delay: "", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
    {ccf: "b", core: "c", qualis: "B3", abbreviation: "ICML", name: "International Conference on Machine Learning", delay: "Delay", submissionDeadline: "2024-06-10", notificationDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", frequency: 7, viewCount: 100},
]


const itemsPerPage = 2



function VisitedConference(){
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemCount, setItemCount] = useState(items.length);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        console.log(items.slice(itemOffset, endOffset))
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    console.log(currentItems)
    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>浏览的会议</>}>
            {/** Table Data */}
            <div className="flex justify-end">
                <p className="text-sm">第{itemOffset ? itemOffset*itemsPerPage-itemsPerPage+1 : 1}-{itemOffset+itemsPerPage}条, 共{itemCount}条</p>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base">ccf</th>
                            <th className="text-base">core</th>
                            <th className="text-base">qualis</th>
                            <th className="text-base">简称</th>
                            <th className="text-base">全称</th>
                            <th className="text-base">Delay</th>
                            <th className="text-base">截稿日期</th>
                            <th className="text-base">通知日期</th>
                            <th className="text-base">会议日期</th>
                            <th className="text-base">会议地点</th>
                            <th className="text-base">届数</th>
                            <th className="text-base">浏览</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems && currentItems.map((u, k) => {
                            return (
                                <tr key={k}>
                                    <td>{u.ccf ? <span className="bg-blue-500 badge px-2 text-white">{u.ccf}</span> : null }</td>
                                    <td>{u.core ? <span className="bg-blue-500 badge px-2  text-white">{u.core}</span> : null }</td>
                                    <td>{u.qualis ? <span className="bg-blue-500 badge px-2  text-white">{u.qualis}</span> : null }</td>
                                    <td>{u.abbreviation}</td>
                                    <td>{u.name}</td>
                                    <td>{u.delay ? <span className="bg-red-700 badge px-2 text-white">{u.delay}</span> : null }</td>
                                    <td>{u.submissionDeadline}</td>
                                    <td>{u.notificationDate}</td>
                                    <td>{u.conferenceDate}</td>
                                    <td>{u.location}</td>
                                    <td>{u.frequency ? <span className="bg-orange-500 badge px-2 text-white">{u.frequency}</span> : null}</td>
                                    <td>{u.viewCount ? <span className="bg-green-700 badge px-2 text-white">{u.viewCount}</span> : null }</td>
                                    <td><button><TrashIcon className="h-6 w-6 inline-block mr-2 text-red-500" /></button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div>

                
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    pageLinkClassName="page-link"
                    previousClassName="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    previousLinkClassName="page-link"
                    nextClassName="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="relative z-10 inline-flex items-center bg-indigo-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    renderOnZeroPageCount={null}
                    className="flex justify-end"
                />
                </div>
            </div>
        </TitleCard>
    )
}   

export default VisitedConference