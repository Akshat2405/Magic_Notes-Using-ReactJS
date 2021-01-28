import React from 'react';
import Navbar from './Navbar';
import Note from './Note';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[useful,changable]=useState({
    title :"",
    newitem:"",
  });
  function additem(e){
    e.preventDefault();
    const date= new Date();
    console.log(date);
    const obj={
      id : date.toUTCString(),
      title : useful.title,
      newitem:useful.newitem,
    }
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.push(obj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    changable({
      title:"",
      newitem:"",
    });
  }
  function updatetitle(inputtitle){
    changable((preValue)=>{
      return{
        title:inputtitle,
        newitem:preValue.newitem,
      };
    });
  }
  function updateitem(inputitem){
    changable((preValue)=>{
      return{
        title:preValue.title,
        newitem:inputitem,
      };
    });
  }
  function deleteitem(index){
    let notes = localStorage.getItem("notes");
    let notesObj = JSON.parse(notes);
    notesObj.splice(index, 1);
    console.log(notesObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    changable((preValue)=>{
      return{
        title:preValue.title,
        newitem:preValue.newitem,
      };
    });
  }
  let notes = localStorage.getItem("notes")
  let notesObj; 
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }
  return (
    <>
    <Navbar />
    <div className="container my-3">
    <h1>Welcome To Magic Notes</h1>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Add a note</h5>
                <div className="form-group">
                    <textarea className="form-control"  rows="1" placeholder="Enter your title"  value={useful.title} onChange={e=>updatetitle(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="3" placeholder="Enter your text" value={useful.newitem} onChange={e=>updateitem(e.target.value)}></textarea>
                </div>
                <button className="btn btn-primary" disabled={(!useful.title) || (!useful.newitem)} onClick={additem} >Add <i class="fa fa-plus-square" aria-hidden="true"></i></button>
            </div>
        </div>
        </div>
        <div  className="row container-fluid"> 
        {
          notesObj.map((item,index) => {
            return (<Note id={item.id} title={item.title} newitem={item.newitem} index={index} deleteitem={deleteitem}/>);
          })
        }
        </div>
    </>
  );
}


export default App;
