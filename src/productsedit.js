import { useEffect,useState } from "react"
import {useHistory} from "react-router-dom";
export default function Productsedit(props){
    let [name,setname]=useState("");
    let [color,setcolor]=useState("");
    let [model,setmodal]=useState("");
    let [available,setavailable]=useState("");
    let history = useHistory();
    useEffect(async ()=>{
        var resp = await fetch(`https://60746f03066e7e0017e79e59.mockapi.io/productreact/${props.match.params.id}`);
        var data = await resp.json();
        setname(data.name);
        setcolor(data.color);
        setmodal(data.model);
        setavailable(data.available);
    },[])
    let userSubmit = async (e)=>{
        e.preventDefault();
        await fetch(`https://60746f03066e7e0017e79e59.mockapi.io/productreact/${props.match.params.id}`,{
            method: "PUT",
            body: JSON.stringify({
                name,
                color,
                model,
                available
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              }
        });
        history.push("/products");
    }
    return <>
    <h1> Product Edit</h1>

    <form onSubmit={userSubmit}> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label> Name</label>
              <input className="form-control" value={name} onChange={(e)=>setname(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> Color </label>
              <input className="form-control" value={color} onChange={(e)=>setcolor(e.target.value)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label> Model</label>
              <input className="form-control" value={model} onChange={(e)=>setmodal(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> Availability</label>
              <input className="form-control" value={available} onChange={(e)=>setavailable(e.target.value)}/>
            </div>
          </div>
          <div className="row mt-3">
          <input type="submit" className="btn btn-primary" value="Save"/>
          </div>
        </div>
      </form>
    </>
}