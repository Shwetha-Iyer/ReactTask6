import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
export default function Userlist() {

  let [userlistdata,setUserlistdata] = useState([]);
  useEffect(async ()=>{
      var resp = await fetch("https://60746f03066e7e0017e79e59.mockapi.io/userreact");
      var data = await resp.json();
      setUserlistdata([...data]);
  },[])
  return (
    <>
      <h1> User List</h1>

        <Link to="/usercreate">Create User</Link>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          {
            userlistdata.length>0 ?<div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Activity</th>
                </tr>
              </thead>
              
              <tbody>
            
                {
                  userlistdata.map((obj)=>{
                    return <tr>
                      <td>{obj.firstname}</td>
                      <td>{obj.lastname}</td>
                      <td>{obj.email}</td>
                      <td>{obj.password}</td>
                      <td><Link to={`/useredit/${obj.id}`}>Edit Item</Link></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div> : <> <h1> Loading ...</h1> </>
          }
          
        </div>
      </div>
    </>
  );
}
