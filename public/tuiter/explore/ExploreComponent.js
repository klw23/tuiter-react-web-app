import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
             <div class="row">
                <div class="col-11">
                    <div class="input-group">
                        <span class="input-group-text wd-search-icon"><i class="fa fa-search"></i></span>
                        <input class="form-control wd-search-bar" type="text" placeholder="Search Twitter">
                    </div>
                </div>
                <div class="col-1">
                    <span class="fa fa-cog fa-2x " style="color: blue"></span>
                </div>
            </div>
              <ul class="nav nav-tabs pt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="../for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-sm-block">
                    <a class="nav-link" href="../entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div class="card">
                <div class="card text-white">
                    <img src="../../images/starship.webp" class="card-img-top">
                    <div class="card-img-overlay d-flex flex-column">
                        <div class="mt-auto font-weight-bold "> <h2> SpaceX's Starship </h2></div>
                    </div>
                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
