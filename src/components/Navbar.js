import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid w-100">
    <Link className="navbar-brand " to="/"><img src="logo1.png" style={{height:"100px"}}/></Link>
    {/* <Link className="navbar-brand " to="/"><span style={{color:"orangered", fontSize:"30px", fontWeight:"bold"}}>NEWS</span><span className="text-light">Hub</span></Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="technology">Technology</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="login"><i className="bi bi-person-fill"></i> Sign In</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="register"><i className="bi bi-person-plus-fill"></i> Sign Up</Link>
        </li> */}
        <li className="nav-item">
          <div className="dropdown"style={{ position:"relative"}} >
            <Link data-bs-toggle="dropdown" className="nav-link active text-light" aria-current="page">
            <i className="bi bi-person-fill" style={{fontSize:"18px"}}></i> User
            </Link>
            <ul className="dropdown-menu" >
              <li><Link className="dropdown-item" to="login"  >Sign In</Link></li>
              <li><Link className="dropdown-item" to="register">Sign Up</Link></li>
              <li><Link className="dropdown-item" to="/">Logout</Link></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}