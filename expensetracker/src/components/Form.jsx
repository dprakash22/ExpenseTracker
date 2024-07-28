import { useState,useEffect } from "react";

const Form=(props)=>{

    const isEdit = props.isEdit;
    // let Name,amt
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    
  
    useEffect(() => {
      setTitle(props.itemToEdit?.Name || "");
      setAmount(props.itemToEdit?.Amt || 0);
      console.log(title)
      console.log(amount)
    }, [props.itemToEdit]);
  
    // const isEdit = props.itemToEdit !== undefined;
  
    const handleSubmit = (event) => {
      event.preventDefault(); 
      if (!title || !amount) {
        alert("Please enter both task and amount.");
        return;
      }
      console.log("submit Clicked", title, amount);
      if(isEdit){
          props.edit(title,amount);
      }else{
          props.add({"title":title, "Amt":amount,"Id":(props.i)+1});
      }
      
    };
  
    const handleInputChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
      };
    

    return(
        <>
        {/* <div>
        <div className="sel">
            <p>Product : <input id="product" type="text" /></p>
            <p>Amount : <input id="Amount" type="text" /></p>
        </div>
        <button className="bt" onClick={()=>{
            Name=document.getElementById("product").value
            amt =document.getElementById("Amount").value
            return props.add({Id:(props.i)+1,Name:Name, Amt:amt})
        }}>Add</button>
        </div> */}

    <div className="sel">
        <h3>{isEdit ? "Edit" : "New"} Transaction</h3>
        <form className="form">
          <h3>Title</h3>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={handleInputChange}
          />
          <h3>Amount</h3>
          <input
            type="number"
            id="amount"
            placeholder="Amount"
            value={amount}
            onChange={handleAmountChange}
          />
          <h2>
          <button onClick={handleSubmit}>
            {isEdit ? "Save" : "Add"} Transaction
          </button></h2>
        </form>
      </div>
        </>
    )
   
}
export default Form