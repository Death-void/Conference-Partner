import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon"
import TitleCard from "../../../components/Cards/TitleCard"
import ReactPaginate from 'react-paginate';
import React, {
  useEffect,
  useState
} from 'react'

const items = [
    {ccf: "", abbreviation: "", name: "Materials Science and Engineering: R: Reports", impactFactor: "2.586", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "a", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "c", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "b", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "a", abbreviation: "", name: "IEEE Software", impactFactor: "2.586", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "c", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "b", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "a", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "c", abbreviation: "", name: "IEEE Software", impactFactor: "2.586", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "b", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "", abbreviation: "", name: "Materials Science and Engineering: R: Reports", impactFactor: "2.586", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "a", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "c", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "b", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "a", abbreviation: "", name: "IEEE Software", impactFactor: "2.586", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "c", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "b", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "a", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "c", abbreviation: "", name: "IEEE Software", impactFactor: "2.586", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
    {ccf: "b", abbreviation: "", name: "IEEE Transactions on Software Engineering", impactFactor: "3.286", publisher: "IEEE", ISSN: "0972-796X", viewCount: 100},
]


const itemsPerPage = 2



function CallForPaperJourFinishedPaging(){
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
        <TitleCard title={<><InboxArrowDownIcon className="h-6 w-6 inline-block mr-2"/>期刊</>}>
            {/** Table Data */}
            <div className="flex justify-end">
                <p className="text-sm">第{itemOffset ? itemOffset*itemsPerPage-itemsPerPage+1 : 1}-{itemOffset+itemsPerPage}条, 共{itemCount}条</p>
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
                            <th className="text-base">ISSN</th>
                            <th className="text-base">浏览</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems && currentItems.map((u, k) => {
                            return (
                                <tr key={k}>
                                    <td>{u.ccf ? <span className="bg-blue-500 badge px-2 text-white">{u.ccf}</span> : null }</td>
                                    <td>{u.abbreviation}</td>
                                    <td>{u.name}</td>
                                    <td>{u.impactFactor}</td>
                                    <td>{u.publisher}</td>
                                    <td>{u.ISSN}</td>
                                    <td>{u.viewCount ? <span className="bg-green-700 badge px-2 text-white">{u.viewCount}</span> : null }</td>
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

export default CallForPaperJourFinishedPaging