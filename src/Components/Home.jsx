import { Link, Outlet } from "react-router-dom";
import "../style/Home.css"

function Home() {
  return (
    <> 
    <div className="navbar">top bar</div>
    <div className="homepage">
     <div className="sidebar">
      <ul>
       <li><Link to="/addFormer">Add New Member</Link></li>
       <li><Link to="/addtodaydetails">Click to view our contact page</Link></li>
     </ul>
    </div>
      <div className="main">
      <h1>This is the home page</h1>
      </div>
    </div>
    <Outlet />
    </>
  );
}

export default Home;