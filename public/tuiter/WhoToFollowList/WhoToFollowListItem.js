const WhoToFollowListItem = (who) => {
    return(`
                <li class = "list-group-item">
               <div class="row">
                        <div class="col-xxl-2">
                            <img class ="mt-2 wd-avatars" src="${who.avatarIcon}">
                        </div>
                        <div class="col-xxl-6">
                            <p class = "m-0 wd-users"> ${who.userName}</p>
                            <p>${who.handle}</p>
                        </div>
                        <div class="col-xxl-2">
                            <button class="mt-2 btn btn-primary">
                                Follow
                            </button>
                        </div>
                    </div>
                    </li>
                    
   `);
}
export default WhoToFollowListItem;