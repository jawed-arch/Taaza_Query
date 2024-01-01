import { Link } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify"
import {BarLoader, CircleLoader, ClipLoader} from "react-spinners"
import { useState } from "react";

export default function Login(){
    const [load, setLoad]=useState(true)
    const over={
        display:"block",
        margin:"0px auto"
    }
    const handleForm=(e)=>{
            e.preventDefault()
            setLoad(true)
    }
    return(
        <>
            <div className="container bg-light mb-5" style={{height:"68vh",width:"500px", borderRadius:"10px", boxShadow:"1px 1px 10px silver"}}>
                <h1 className="my-5 text- d-flex justify-content-center">SIGN IN</h1>
                <ClipLoader loading={load} color="red" size={100} cssOverride={over}/>
                <form onSubmit={handleForm}>
                    <div className="row">
                            <div className="col">
                                <h5>Email</h5>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <input type="email" className="form-control"/>
                        </div> 
                    </div>
                    <div className="row mt-5">
                            <div className="col">
                                <h5>Pasword</h5>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <input type="password" className="form-control"/>
                        </div> 
                    </div>
                    <button className="btn btn-primary d-grid gap-2 col-10 mx-auto mt-5 rounded-pill">SIGN IN</button>
                    <div className="row text-center my-3">
                        <span>Don't have an acount?<Link to="/register">SIGN UP</Link></span>
                        
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </>
    )
}