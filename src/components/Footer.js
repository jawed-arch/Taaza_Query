import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
            <div className="container-fluid text-center bg-dark text-light p-3">
                <div className="row">
                <Link className="col-12 navbar-brand " to="/"><img src="logo1.png" style={{height:"100px"}}/></Link>
                </div>
                <div className="row">
                    <h5 className="col">Developed by <b>JAWED</b></h5>
                </div><br/>
                <div className="row">
                    <p className="col">Copyright &#169; 2023 tazaquery.com</p>
                </div>
                <div className="row">
                    <p><label className="fs-3" style={{color:"#ab055a"}}>Disclaimer:</label> Taaza Query strives to provide accurate and up-to-date news content. However, we make no guarantees regarding the completeness, accuracy, or reliability of the information presented on this website.And Taaza Query may contain links to external websites for additional information. We have no control over the content of these sites and are not responsible for their accuracy or suitability.</p>
                </div>
            </div>
        </>
    )
}