const Expenseitem=(props)=>{
    // let c=true
    // if(props.Amount<0){
    //     c=false
    // }
    // style={{borderRight : c ? "7px solid green" : "7px solid red"}}
    const {setIsEdit} = props.setIsEdit
    const handleEdit=(id)=>{
        props.setEdit(id)
        setIsEdit(true)
    }

    
    
    return (
        <>
        {/* <div className="del">
        <div className={`${props.Amount>=0 ? "Positive":"Negative"}  inner3`}>
        <h1>{props.Name}</h1>
        <h3>{props.d.toDateString()}</h3>
        <h1>{props.Amount}</h1>             
        </div>
        <button onClick={()=>{
           return props.delete(props.keys)}} >Delete</button>
        </div> */}

        <tr>
            <td>{props.keys}</td>
            <td>{props.Name}</td>
            <td>{props.d.toDateString()}</td>
            <td>{props.Amount}</td>
            <td><button onClick={()=>{return props.delete(props.keys)}} >Delete</button></td>
            <td><button onClick={()=>{
                props.setEdit(props.keys);
                props.setIsEdit(true)
            }} >Edit</button></td>
        </tr>
        </>
    )
}

export default Expenseitem