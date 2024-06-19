import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from  '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import axios from 'axios'

function Register(){

    const INITIAL_REGISTER_OBJ = {
        userName : "",
        password : "",
        email : "",
        institution: ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ)

    const submitForm = (e) =>{
        e.preventDefault()
        setErrorMessage("")

        if(registerObj.userName.trim() === "")return setErrorMessage("Name is required! (use any value)")
        if(registerObj.email.trim() === "")return setErrorMessage("Email Id is required! (use any value)")
        if(registerObj.password.trim() === "")return setErrorMessage("Password is required! (use any value)")
        else{
            setLoading(true)
            // Call API to check user credentials and save token in localstorage
            axios.post('/auth/register', registerObj).then((res) => {
                //console.log(res)
                
                if(res.status === 201){
                    // localStorage.setItem("token", res.data.token)
                    // localStorage.setItem("role", res.data.role)
                    // localStorage.setItem("id", res.data.userId)
                    setLoading(false)
                    window.location.href = '/login'
                }
            }).catch((res) => {
                setLoading(false)
                setErrorMessage(res.response.data)

            })
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setRegisterObj({...registerObj, [updateType] : value})
    }

    return(
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                <div className=''>
                        <LandingIntro />
                </div>
                <div className='py-24 px-10'>
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Register</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        <div className="mb-4">

                            <InputText defaultValue={registerObj.userName} updateType="userName" containerStyle="mt-4" labelTitle="User Name" updateFormValue={updateFormValue}/>

                            <InputText defaultValue={registerObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email" updateFormValue={updateFormValue}/>

                            <InputText defaultValue={registerObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue}/>

                            <InputText defaultValue={registerObj.institution} updateType="institution" containerStyle="mt-4" labelTitle="Institution" updateFormValue={updateFormValue}/>

                        </div>

                        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                        <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Register</button>

                        <div className='text-center mt-4'>Already have an account? <Link to="/login"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Register