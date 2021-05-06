import {Link} from "react-router-dom";
import { useEffect, useState } from "react";

export default function Products(){
  let [prodlist,setProdlist] = useState([]);
  useEffect(async ()=>{
    var resp = await fetch("https://60746f03066e7e0017e79e59.mockapi.io/productreact");
    var data = await resp.json();
    setProdlist([...data]);
  },[]);
    return <>
    <h1>Product </h1>
    <Link to="/productcreate">Create Product</Link>


    <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          {
            prodlist.length > 0 ? <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Color</th>
                  <th>Model</th>
                  <th>Availability</th>
                  <th>Action</th>
                </tr>
              </thead>
              
              <tbody>
              {
                  prodlist.map((obj)=>{
                    return <tr>
                      <td>{obj.name}</td>
                      <td>{obj.color}</td>
                      <td>{obj.model}</td>
                      <td>{obj.available}</td>
                      <td><Link to={`/productsedit/${obj.id}`}>Edit Item</Link></td>
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
}