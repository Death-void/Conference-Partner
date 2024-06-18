import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TrashIcon from "@heroicons/react/24/outline/TrashIcon"
import TitleCard from "../../../../components/Cards/TitleCard";
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'
import axios from "axios";


const itemsPerPage = 2



function FollowedJournal(){

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [items, setItems] = useState([])

    useEffect(() => {
        // //console.log("BasicInfo")
        const f = async () => {
            const res = await axios.get(`/follow/journal/user/${localStorage.getItem("id")}`).catch((err) => {
                setLoading(false)
                setErrorMessage("Invalid credentials")
            })  
            setItems(res.data)
        }
        f()
    }, [])  

    const followDelete = async (id) => {
        const res = await axios.post(`/follow/journal/followDelete`, {journalId:id, userId:localStorage.getItem("id")}).catch((err) => {
            setLoading(false)
            setErrorMessage("Invalid credentials")
        })  
        setItems(items.filter((item) => item.id !== id))
    }

    const [page, setPage] = useState(0);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        setPage(event.selected);
    };


    return (
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>关注的期刊</>}>
            {/** Table Data */}
            <div className="flex justify-end">
                <p className="text-sm">第{page ? (page+1)*itemsPerPage-1 : 1}-{(page+1)*itemsPerPage}条, 共{items.length}条</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base">ccf</th>
                            <th className="text-base">简称</th>
                            <th className="text-base">全称</th>
                            <th className="text-base">影响因子</th>
                            <th className="text-base">出版商</th>
                            <th className="text-base">issn</th>
                            <th className="text-base">浏览</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.slice(page*itemsPerPage, page*itemsPerPage+itemsPerPage).map((u, k) => {
                            return (
                                <tr key={k}>
                                    <td>{u.ccf ? <span className="bg-blue-500 badge px-2 text-white">{u.ccf}</span> : null }</td>
                                    <td>{u.abbreviation}</td>
                                    <td><button className="text-blue-500 hover:underline" onClick={() => window.location.href = `/app/journalPage/${u.id}`}>{u.name}</button></td>
                                    <td>{u.impactFactor}</td>
                                    <td>{u.publisher}</td>
                                    <td>{u.issn}</td>
                                    <td>{u.viewCount ? <span className="bg-green-700 badge px-2 text-white">{u.viewCount}</span> : null }</td>
                                    <td><button onClick={()=>followDelete(u.id)}><TrashIcon className="h-6 w-6 inline-block mr-2 text-red-500" /></button></td>
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
                    pageCount={Math.ceil(items.length/itemsPerPage)}
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

export default FollowedJournal