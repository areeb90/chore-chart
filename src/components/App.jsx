import React, {useState} from "react";
import InputText from "./InputText";
import TodoItem from "./TodoItem";

function App(){
      // this state initializes the empty array where the input items are added. 
    const [item, additem]=useState([]);


      
// here inputText is send as props..from the inputText component
    function addItems(inputText){
        additem(previousValue=>{
            return [...previousValue, inputText]
        })
    }
    function deleteItem(id){
        additem(previousValue=>{
                  // applied filter to return those values having id's !== to the item id(item selected)
            return (previousValue.filter((item,index)=>
            {
                return index != id
            }))
        })
    }

    return(
        <div className="container">
        <div className="heading">

          <h1>Chore-Chart</h1>
        </div>

        <InputText 
              // addItems:: this function is passed as props to the InputText component
        onAdd={addItems}
        
        />

        
        <div>
            <ul>
                          {/* map function will loop through the whole items array....where todoItem" is the loop variable*/}
            {item.map((todoItem, index)=>
            <TodoItem 


            key={index}
            text={todoItem}
            id ={index}
            onCheaked={deleteItem}

            />
                    
                        )
}
                        
                    
                </ul>
                </div>
                    
            </div>

    )

}      
export default App;