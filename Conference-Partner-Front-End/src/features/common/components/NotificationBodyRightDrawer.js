function NotificationBodyRightDrawer(){
    return(
        <>
             {
                [...Array(2)].map((_, i) => {
                    return <div key={i} className={"grid mt-3 card bg-base-200 rounded-box p-3" + (i < 5 ? " bg-blue-100" : "")}>
                            {i % 2 === 0 ? `Your Notification` : `The next notification`}
                        </div> 
                })
            }
        </>
    )
}

export default NotificationBodyRightDrawer