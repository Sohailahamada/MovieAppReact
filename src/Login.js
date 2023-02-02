import './Login.css';
import { useState } from "react"

function Login() {

    const [userData, setUserData] = useState({

        email: "manar@gmail.com",
        password: "12365478"

    })
    const [error, setErros] = useState({
        useremail: null,
        userpassword: null
    })

    const validEmail = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')

    const [passwordShown, setPasswordShown] = useState(false);


    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };




    const changeUserData = (e) => {
        console.log(e.target.name)
        if (e.target.name == "useremaill") {
            setUserData({
                ...userData,
                email: e.target.value
            })
            setErros({
                ...error,
                useremail: e.target.value.length == 0 ? "This Field is Required" : validEmail.test(e.target.value) ? '' : 'Email not valid'
            })
        } else {
            setUserData({
                ...userData,
                password: e.target.value
            })
            setErros({
                ...error,
                userpassword: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 8 ? "Min Length is 8 Char" : null
            })

        }

    }


    const submitData = (e) => {
        e.preventDefault()
       
    }






    return (

        <section className="vh-100 gradient-custom">
            <form onSubmit={(e) => submitData(e)}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" name="useremaill" className="form-control form-control-lg" value={userData.email} onChange={(e) => changeUserData(e)} />

                                        <p className="text-danger">  {error.useremail}  </p>
                                    </div>
                                     
                                    
                                    <div className="form-outline form-white mb-4">
                                     <input type={passwordShown ? "text" : "password"} name="userpassword" className="form-control form-control-lg" value={userData.password} onChange={(e) => changeUserData(e)} />
                                       <i class="fa-solid fa-eye" onClick={togglePassword}></i>


                                        <p className="text-danger">  {error.userpassword }  </p>
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                    <button className="btn btn-outline-light btn-lg px-5" type="submit"  disabled = {error.useremail || error.userpassword }>Login</button>



                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </section>






    )



}
export default Login;