import axios from "axios"

const initializeApp = () => {
    
    // Setting base URL for all API request via axios
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
    // axios.defaults.headers.common['Origin'] = process.env.REACT_APP_BASE_ORIGIN
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : null

    // console.log(axios.defaults.headers.common['Origin']) 

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        // dev code



    } else {
        // Prod build code



        // Removing console.log from prod
        console.log = () => {};


        // init analytics here
    }

}

export default initializeApp