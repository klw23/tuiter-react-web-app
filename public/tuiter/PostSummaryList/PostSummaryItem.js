const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
          <div class="row">
             <div class="col-xxl-10 col-xl-12">
                <p class = "m-0 wd-topics"> ${post.topic} </p>
                    <span class = "m-0 wd-users"> ${post.userName}</span>
                    <span class = "wd-topics">- ${post.time} </span>
                    <p class = "wd-users mb-1">
                    <span class="text-break"> ${post.title}</span> </p>
<!--                    <p className="wd-topics"> $ if (post.tweets !== null) {post.tweets}</p>-->
                </div>
                   <div class="col-xxl-1 col-xl-2"> <img class="wd-logos mt-2" src="${post.image}"> </div>
                    </div>
            </li>         

                    
   `);
}
export default PostSummaryItem;