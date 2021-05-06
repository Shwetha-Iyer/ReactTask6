import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
export default function Usercreate() {
    let [firstname,setfirstname] = useState("");
    let [lastname,setlastname] = useState("");
    let [email,setemail] = useState("");
    let [password,setpassword] = useState("");
    let history = useHistory();
    let userSubmit = async (e)=>{
        e.preventDefault();
        
        await fetch("https://60746f03066e7e0017e79e59.mockapi.io/userreact",{
          method: "POST",
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            password
        }),
        headers: {
          "Content-type": "application/json"
        }
        });
        history.push("/users");
    }
    useEffect(()=>{
      console.log("User create component is created");
    },[]);
    useEffect(()=>{
      return (()=>{
        console.log("During props value change",firstname);

      })
    },[firstname]);
    useEffect(()=>{
      return (()=>{
        console.log("The component is destroyed");
      })
    },[]);
  return (
    <>
      <h1> User Create</h1>

      <p> Create a new user here </p>

      <form onSubmit={userSubmit}> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label> first name</label>
              <input className="form-control" value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> last name</label>
              <input className="form-control" value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label> email</label>
              <input className="form-control" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> password</label>
              <input className="form-control" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </div>
          </div>
          <div className="row mt-3">
          <input type="submit" className="btn btn-primary" value="Submit"/>
          </div>
          
        </div>
      </form>
    </>
  );
}
