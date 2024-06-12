import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ConferencePage from '../../features/conferencePage/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Conference"}))
      }, [])


    return(
        <ConferencePage />
    )
}

export default InternalPage