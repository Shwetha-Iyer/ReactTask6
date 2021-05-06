import {useState} from "react";
import {useHistory} from "react-router-dom";
export default function Productcreate() {
    let [name,setname] = useState("");
    let [color,setcolor] = useState("");
    let [model,setmodel] = useState("");
    let [available,setavail] = useState("");

    let history = useHistory();
    let userSubmit = async (e)=>{
        e.preventDefault();
        
        console.log({
          name,
          color,
          model,
          available
      });
      await fetch("https://60746f03066e7e0017e79e59.mockapi.io/productreact",{
        method: "POST",
        body: JSON.stringify({
          name,
          color,
          model,
          available
      }),
      headers: {
        "Content-type": "application/json"
      }
      });
      history.push("/products");
    }
    
  return (
    <>
      <h1> Product Create</h1>

      <p> Create a new product here </p>

      <form onSubmit={userSubmit}> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label> Name</label>
              <input className="form-control" value={name} onChange={(e)=>setname(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> Color</label>
              <input className="form-control" value={color} onChange={(e)=>setcolor(e.target.value)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label> model</label>
              <input className="form-control" value={model} onChange={(e)=>setmodel(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> available</label>
              <input className="form-control" value={available} onChange={(e)=>setavail(e.target.value)}/>
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