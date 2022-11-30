import React from "react";
import TuitStat from "./tuit-stat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";




const TuitListItem = (

    {
        tuit = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "https://user-images.githubusercontent.com/29754137/202015346-5250b209-57fb-4175-ac1f-a9efb967cd45.png",
        "liked": true,
        "replies": 100,
        "retuits": 200,
        "likes": 2014,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      
    }
}
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {dispatch(deleteTuitThunk(id));}
 return(

  <li className="list-group-item">
   <div className="row">
        <div className="col-2">
            <img alt="description" width ={50} src= {"https://user-images.githubusercontent.com/29754137/202015346-5250b209-57fb-4175-ac1f-a9efb967cd45.png"}/>
        </div>
        <div className="col-10">
            <div>
                <span> {tuit.userName || "nasa"} </span> 
                <span> <FontAwesomeIcon icon={faCheckCircle} color="blue"/> </span>
                {tuit.handle || "@nasa"} ⋅ {tuit.time || "2h"}
                <i className="bi bi-x-lg float-end" 
                onClick={() => deleteTuitHandler(tuit._id)}></i>
            </div>
            <div className="mb-2">{tuit.tuit || "Nasa"}</div>
            <TuitStat key={tuit._id} tuit={tuit}/>
        </div>
   </div>
  </li>
 );
};
export default TuitListItem;
