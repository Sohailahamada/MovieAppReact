import './SignUp.css';
import { useState,useEffect } from "react";

import { Link } from "react-router-dom";
function SignUp() {


    const [userData, setUserData] = useState({

        name: "sohaila",
        email: "manar@gmail.com",
        username: "sohaila11",
        password: "12365478",
        confirmpassword: "12365478",

    })

    const [error, setErros] = useState({
        name: null,
        useremail: null,
        username: null,
        userpassword: null,
        confirmpassword: null

    })


    const validEmail = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    const validpassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
    const validUserName = new RegExp('^[A-Za-z][A-Za-z0-9]{3,40}$')


    const changeUserData = (e) => {
        console.log(e.target.name)
        if (e.target.name == "username") {
            setUserData({
                ...userData,
                name: e.target.value
            })
            setErros({
                ...error,
                name: e.target.value.length == 0 ? "This Field is Required" : null
            })
        } else if (e.target.name == "useremaill") {
            setUserData({
                ...userData,
                email: e.target.value
            })
            setErros({
                ...error,
                useremail: e.target.value.length == 0 ? "This Field is Required" : validEmail.test(e.target.value) ? '' : 'Email not valid'
            })

        } else if (e.target.name == "usernameo") {
            setUserData({
                ...userData,
                username: e.target.value
            })
            setErros({
                ...error,
                username: e.target.value.length == 0 ? "This Field is Required" : validUserName.test(e.target.value) ? '' : 'Email not valid'
            })

        } else if (e.target.name == "userpassword") {
            setUserData({
                ...userData,
                password: e.target.value
            })
            setErros({
                ...error,
                userpassword: e.target.value.length == 0 ? "This Field is Required" : validpassword.test(e.target.value) ? '' : 'password not valid'
            })

        }else{
            setUserData({
                ...userData,
                confirmpassword: e.target.value
            })
             setErros({
                    ...error,
                    confirmpassword: e.target.value.length == 0 ? "This Field is Required" :  userData.password.match(e.target.value) ? '' : 'password not valid'
                })

        }

    }

    useEffect(() => {
        if (userData.password !== userData.confirmpassword) {
           
            setErros({
                ...error,
                confirmpassword: 'passwords do not match' 
            })
        } else {
            setErros('')
        }
      }, [userData.password, userData.confirmpassword])








    return (
        <section className="vh-150 background-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Sign UP</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>


                                    <div className="form-outline form-white mb-4">
                                        <label htmlFor="exampleInputEmail1" className="form-label text-left">Name</label>
                                        <input type="email" name="username" className="form-control " value={userData.name} onChange={(e) => changeUserData(e)} />

                                         <p className="text-danger">  {error.name}  </p> 
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <label htmlFor="exampleInputEmail1" className="form-label text-left">Email address</label>
                                        <input type="email" name="useremaill" className="form-control " value={userData.email} onChange={(e) => changeUserData(e)} />

                                         <p className="text-danger">  {error.useremail}  </p> 
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <label htmlFor="exampleInputEmail1" className="form-label text-left">UserName</label>
                                        <input type="email" name="usernameo" className="form-control " value={userData.username} onChange={(e) => changeUserData(e)} />

                                         <p className="text-danger">  {error.username}  </p> 
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <label htmlFor="exampleInputEmail1" className="form-label text-left">Password</label>
                                        <input type="password" name="userpassword" className="form-control " value={userData.password} onChange={(e) => changeUserData(e)} />


                                         <p className="text-danger">  {error.userpassword }  </p>
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <label htmlFor="exampleInputEmail1" className="form-label text-left"> Confirm Password</label>
                                        <input type="password" name="userconfirmpassword" className="form-control " value={userData.confirmpassword} onChange={(e) => changeUserData(e)} />


                                         <p className="text-danger">  {error.confirmpassword }  </p>
                                    </div>

                                    {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>*/}

                                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>



                                </div>

                                <div>
                                    <p className="mb-0">Already have an account?! <Link to="/login" className="text-white-50 fw-bold">login</Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )


}
export default SignUp;