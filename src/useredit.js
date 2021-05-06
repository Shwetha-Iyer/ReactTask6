import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";

export default function Useredit(props){
    //let [udata,setUdata]=useState([]);
    let [firstname,setFname]=useState("");
    let [lastname,setLname]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let history = useHistory();
    useEffect(async ()=>{
        let resp = await fetch(`https://60746f03066e7e0017e79e59.mockapi.io/userreact/${props.match.params.id}`);
        var data = await resp.json();
        //setUdata(data);
        setFname(data.firstname);
        setLname(data.lastname);
        setEmail(data.email);
        setPassword(data.password);
    },[])
    let goback = ()=>{
      history.push("/users");
    }
    let remove = async () =>{
      await fetch(`https://60746f03066e7e0017e79e59.mockapi.io/userreact/${props.match.params.id}`, {
        method: "DELETE",
      });
      history.push("/users");
    }
    let userSubmit = async (e)=>{
        e.preventDefault();
        await fetch(`https://60746f03066e7e0017e79e59.mockapi.io/userreact/${props.match.params.id}`,{
            method: "PUT",
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              }
        });
        history.push("/users");
    }
    return <>
    <h1> User Edit {props.match.params.id}</h1>
    <p>Edit the user details for id : {props.match.params.id}</p>
    
    <form onSubmit={userSubmit}> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label> first name</label>
              <input className="form-control" value={firstname} onChange={(e)=>setFname(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> last name</label>
              <input className="form-control" value={lastname} onChange={(e)=>setLname(e.target.value)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label> email</label>
              <input className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> password</label>
              <input className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="row mt-3">
          <input type="submit" className="btn btn-primary" value="Save"/> &nbsp;&nbsp;&nbsp;
          <button type="reset" className="btn btn-warning" onClick={goback}> Cancel </button> &nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-danger" onClick={remove}> Delete </button>
          </div>
        </div>
      </form>
    </>
}