import post from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js";


const WhoToFollowList = () => {
    return (`
           <div class="card-body">
           <ul class="list-group list-group-flush">
           ${
        post.map(p=> PostSummaryItem(p)).join('')
    }
           </ul>
           </div>
           </div>
`); }

export default WhoToFollowList;