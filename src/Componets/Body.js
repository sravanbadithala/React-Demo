import RestroCards from "./RestroCards";
import cards from "../Utils/mockData"
import { useState } from "react";

const Bodycomponent =()=>{
    const [listOfCards,setListOfCards]=useState(cards);
    return(
        <div className="body">
            <div className="serachBar">
             <button className="filter-btn" onClick={()=>{
                const filteredList=listOfCards.filter((list)=>
                    list.info.avgRating>4 
                );
                setListOfCards(filteredList);
                console.log(filteredList)
             }}>Top restro</button>
            </div>
            <div className="restro-containers">
                <div className="resto-cards">
{listOfCards.map((resCardss)=>(
   <RestroCards key ={resCardss.info.id} restroName={resCardss}/> 
))}


                </div>
            </div>
        </div>
    );
}
export default Bodycomponent;