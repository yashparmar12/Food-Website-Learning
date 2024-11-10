import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
    const [filteredRestaurants, setfilteredRestaurants] = useState(resList);
    
    const [searchText, setsearchText] = useState("");
    
    const handleFilter = () =>{
        const result = listOfRestaurants.filter((res)=>res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
        setfilteredRestaurants(result); 
    }

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e)=>setsearchText(e.target.value)}/>
                    <button onClick={handleFilter}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredData = listOfRestaurants.filter(
                        (res)=>res.info.avgRating > 4
                    );
                    setlistOfRestaurants(filteredData);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
                             
            </div>
        </div>
    )
}

export default Body;