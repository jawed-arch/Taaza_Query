import { Link } from "react-router-dom";

export default function Register(){
    return(
        <>
            <div className="container bg-light mb-5" style={{height:"80vh",width:"500px", borderRadius:"10px", boxShadow:"1px 1px 10px silver"}}>
                <h1 className="my-5 text- d-flex justify-content-center">SIGN UP</h1>
                <form>
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
                    <div className="row mt-5">
                            <div className="col">
                                <h5>Confirm Pasword</h5>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <input type="password" className="form-control"/>
                        </div> 
                    </div>
                    <button className="btn btn-primary d-grid gap-2 col-10 mx-auto mt-5 rounded-pill">SIGN UP</button>
                    <div className="row text-center my-3">
                        <span>Already have an acount?<Link to="/login">SIGN IN</Link></span>
                        
                    </div>
                </form>
            </div>
        </>
    )
}