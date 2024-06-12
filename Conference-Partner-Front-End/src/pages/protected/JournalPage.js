import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import JournalPage from '../../features/JournalPage/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Journal"}))
      }, [])


    return(
        <JournalPage />
    )
}

export default InternalPage