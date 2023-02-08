import { useState } from "react";

function Searchbar({options, onValueChange}){
    const [visible,setVisible] = useState(false);
    
    function handleOptionClick(value){
        if(onValueChange){
            onValueChange(value);
        }
    }
    return (
        <div className="search"
        // onBlur={()=>setVisible(false)} 
        onClickCapture={()=>setVisible(true)}
        >
            <input 
            type="search"
            className="search-bar"
            name="search" 
            id="citysearch" placeholder="Search for cities. . . " 
           
            />

            {visible && options && options.length !== 0 &&
                 <div className="autocomplete">
                    {options.map((option=> (
                        <li key={option} onClick={(e)=>{handleOptionClick(option)}} className="opt">{option}</li>
                    )))}
                </div>
            }
        </div>
    )
}
export default Searchbar;