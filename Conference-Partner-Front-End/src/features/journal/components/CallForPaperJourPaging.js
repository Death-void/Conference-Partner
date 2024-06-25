import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'
import axios from 'axios'
import { TrashIcon } from "@heroicons/react/24/outline";
import { IncrementJournalViewCount } from "../../../GlobalFunction";

const itemsPerPage = 5



function CallForPaperJourPaging(props){

    const items = props.confData
    const title = props.title
    
     //
    // We start with an empty list of items.
    const [page, setPage] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        setPage(event.selected)
    };

    const jourDelete = async (id) => {
        const res = await axios.delete(`/conferences/${id}`).catch((err) => {
            console.log(err)
        })
        console.log(res)
    }

    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>{title?title:"征稿"}</>}>
            {/** Table Data */}
            <div className="flex items-center text-sm">
                <button className="text-blue-500">ccf:</button>
                <p className="ml-2">Journal Rank (A, B, C) from China Computer Federation (2022)</p>
            </div>
            <div className="flex justify-end">
                <p className="text-sm">第{page ? page*itemsPerPage+1 : 1}-{(page+1)*itemsPerPage < items.length ? (page+1)*itemsPerPage :items.length}条, 共{items.length}条</p>
            </div>
            
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base">ccf</th>
                            <th className="text-base">全称</th>
                            <th className="text-base">Special Issue</th>
                            <th className="text-base">截稿日期</th>
                            <th className="text-base">影响因子</th>
                            <th className="text-base">出版商</th>
                            <th className="text-base">浏览</th>
                            {localStorage.getItem("role") === "ROLE_ADMIN" ? <th className="text-base">删除</th> : null}
                        </tr>
                    </thead>
                    <tbody>
                        {items.slice(page*itemsPerPage, page*itemsPerPage+itemsPerPage).map((u, k) => {
                            return (
                                <tr key={k}>
                                    <td>{u.ccf ? <span className="bg-blue-500 badge px-2 text-white">{u.ccf}</span> : null }</td>
                                    <td><button className="text-blue-500 hover:underline" onClick={() => IncrementJournalViewCount(u.id)}>{u.name}</button></td>
                                    <td>{u.specialIssue}</td>
                                    <td>{u.submissionDeadline}</td>
                                    <td>{u.impactFactor}</td>
                                    <td>{u.publisher}</td>
                                    <td>{u.viewCount ? <span className="bg-green-700 badge px-2 text-white">{u.viewCount}</span> : null }</td>
                                    {localStorage.getItem("role") === "ROLE_ADMIN" ? <th><button onClick={()=>jourDelete(u.id)}><TrashIcon className="h-6 w-6 inline-block mr-2 text-red-500" /></button></th> : null}
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
                    pageCount={Math.ceil(items.length / itemsPerPage)}
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

export default CallForPaperJourPaging