import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Note(props) {
    return(
        <div className="noteCard my-3 mx-3 card" style={{width: "18rem",borderRadius:"5px"}}>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"> {props.newitem}</p>
            <h6 className="card-text">{props.id}</h6>
            <button onClick={()=>props.deleteitem(props.index)} className="btn btn-primary">Delete <i class="fa fa-trash-o" aria-hidden="true"></i> </button>
        </div>
       </div>
    );
}
export default Note;