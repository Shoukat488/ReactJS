import React , {useState} from 'react'
function  Array() {
    const[items ,setItems] = useState([])
    function addItem()
    {
        const newArray = [...items];
        newArray.push(1);
        setItems(newArray);
    }
    
    function removeItem()
    {
        const newArray = [...items];
        newArray.pop();
        setItems(newArray);
    }


    return(

        <div>
            <button onClick={addItem}>Add item</button>
            <button onClick={removeItem}>Remove item</button>
            <ul>
                {items.map((item,index)=>{
                    return <li key = {index}> {item}</li>
                })}
            </ul>
        </div>
    )
}

export default Array;