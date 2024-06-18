import axios from 'axios'
export function IncrementConferenceViewCount(id) {
    console.log(id)
    const f = async () => {
        const res = await axios.put(`/conferences/${id}/incrementViewCount`).catch((err) => {
            console.log(err)
        })
        console.log(res)
    }
    f()
    window.location.href = `/app/conferencePage/${id}`
}

export function IncrementJournalViewCount(id) {
    console.log(id)
    const f = async () => {
        const res = await axios.put(`/journals/${id}/incrementViewCount`).catch((err) => {
            console.log(err)
        })
        console.log(res)
    }
    f()
    window.location.href = `/app/journalPage/${id}`
}