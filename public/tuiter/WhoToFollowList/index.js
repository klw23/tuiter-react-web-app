import who from "./who.js"
import whoToFollowListItem from "./WhoToFollowListItem.js";


const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <li class = "list-group-item wd-users"> Who to follow </li>
    
           ${
            who.map(w=> whoToFollowListItem(w)).join('')
            }
           </ul>
`); }

export default WhoToFollowList;