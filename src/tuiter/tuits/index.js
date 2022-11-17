import React, {useEffect} from "react";
import TuitListItem from "./tuit-list-item";
import {useSelector, useDispatch} from "react-redux";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

const TuitList = () => {
  const {tuits, loading} = useSelector(
    state => state.tuitsData)
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(findTuitsThunk())
   }, [])
     return(
     <ul className="list-group">
       {
       loading &&
       <li className="list-group-item">
         Loading...
       </li>
      }
       {
         tuits.map(tuit =>
           <TuitListItem
             key={tuit._id} tuit={tuit}/> )
       }
     </ul>
   );
};

export default TuitList;