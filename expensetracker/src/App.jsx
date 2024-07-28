import { useEffect, useState } from 'react'
import './App.css'
import Expenseitem from './components/Expenseitem'
import Form from './components/Form'


  var hist=[{
    Id:1,
    Name:"Books",
    Amt:200,
    date:new Date()
  },{
    Id:2,
    Name:"Fees",
    Amt:-800,date:new Date("2024-02-01")
    
  },{
    Id:3,
    Name:"Movie",
    Amt:-200,date:new Date()
  }]

  var i=3 

const App=()=>{
  var val

  var Income = 1000
  var Expense=0
  var Balance=0

  console.log(hist)
  
  const [List,setList] = useState(hist)

  const [editId, setEditId] = useState(null);

  const [itemToEdit, setItemToEdit] = useState(undefined)

  useEffect(()=>{
    const item =  List.find((item) => item.Id === editId);
      setItemToEdit(item)
    setItemToEdit(item)
  },[editId])

  const [isEdit, setIsEdit] = useState(false);


// sort
  const dsort = (f)=>{(f==0)?(setList([...List].sort((a,b)=>{return a.date-b.date}))):(setList([...List].sort((a,b)=>{return b.date-a.date})));console.log("hi")}

  //delete
  const deleteItem = (id)=>{
    hist=(List.filter((item)=>item.Id!=id))
    setList(hist)
    console.log(List)
  }

  //Edit
  const edit = (title, amount ) => {

    const temp = List.map((item) => {
      if(item.Id === editId){
        item.Name = title
        item.Amt = parseInt(amount)
        // console.log(item.Id, editId)
        // console.log("its edit function")
      }
      return item
    })
    setIsEdit(false)
    // console.log("temp:",temp)
    setList(
      temp
    ),
    setEditId(null)
  }


  // add
  const add=(a)=>{
    i++;
    setList([...List, {Id:a.Id,Name:a.title,Amt:parseInt(a.Amt),date:new Date("2022-08-09")}].sort((a,b)=>{return b.date-a.date}))
  }

  //print
   console.log(List)

   useEffect(()=>{
    // console.log("is edit is changing")
   },[isEdit])

  //Income Expense
  List.forEach((i)=>{
    if(i.Amt<0){ 
      Expense+=i.Amt
    }
    else{ 
      Income+=i.Amt
    }
  })
  Balance=Income+Expense

  
  return (
    <>
    <h1>Expense Tracker</h1>

    <div className="outer">
      <div className="inner1">
      <h1>Income</h1>
      <h1>{Income}</h1>
      </div>
      <div className="inner2">
      <h1>Expense</h1>
      <h1>{Expense * -1}</h1>
      </div>
      <div className="inner2">
      <h1>Balance</h1>
      <h1>{Balance}</h1>
      </div>
      </div>

      <div className="sel1">
        <Form add={add} i={i} itemToEdit={itemToEdit} isEdit = {isEdit} edit = {edit}/>
      </div>

      <div className="History">
      <h1>History</h1>
      <div className="outer2">
      <table id='table'>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Date  <button className='btnarrow' onClick={()=>{return dsort(0)}}><img width="20px" src="src\assets\up-removebg-preview.png"></img></button> <button className='btnarrow' onClick={()=>{return dsort(1)}}><img width="20px" src="src\assets\down-removebg-preview.png"></img></button></th>
          <th>Amount</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      {List.map((h)=>{
        return <Expenseitem delete={deleteItem} edit={edit} setEdit={setEditId} setIsEdit = {setIsEdit} keys={h.Id} d={h.date} Name={h.Name} Amount={h.Amt}/>
      })}
        </table>
      
      </div>
      </div>
    </>
  )
}

export default App