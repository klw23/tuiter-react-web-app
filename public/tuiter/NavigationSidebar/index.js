const NavigationSidebar = () => {
    return(`
           <div class="list-group">
           <i class="fa-brands fa-twitter list-group-item list-group-item-action"></i>
           <a href="../home.html" class=" blob list-group-item list-group-item-action">
           <div class="wd-float-left me-2"><i class="fa-solid fa-house"></i> </div>
           <span class="text-break d-none d-xxl-block d-xl-block d-lg-none">Home </span> </a>
           <a href="#" class="list-group-item list-group-item-action active">
           <div class="wd-float-left me-2"> <i class="fa-solid fa-hashtag"></i> </div>
           <span class="text-break d-none d-xxl-block d-xl-block d-lg-none"> Explore </span></a>
           <a href="#" class="list-group-item list-group-item-action text-wrap">
           <div class="wd-float-left me-2"> <i class="fa-solid fa-bell"></i> </div>
           <span class="text-break d-none d-xxl-block d-xl-block d-lg-none"> Notifications </span></a>
           <a href="#" class="list-group-item list-group-item-action text-wrap">
           <div class="wd-float-left me-2"> <i class="fa-solid fa-envelope"></i> </div>
           <span class="text-break d-none d-xxl-block d-xl-block d-lg-none"> Messages </span></a>
           <a href="../bookmarks/index.html" class="list-group-item list-group-item-action text-wrap">
           <div class="wd-float-left me-2"> <i class="fa-solid fa-bookmark"></i> </div>
           <span class="text-break d-none d-xxl-block d-xl-block d-lg-none"> Bookmarks </span></a>
           <a href="#" class="list-group-item list-group-item-action text-wrap">
           <div class="wd-float-left me-2"> <i class="fa-solid fa-list"></i> </div>
           <span class="text-break d-none d-xxl-block d-xl-block d-lg-none"> Lists </span></a>
           <a href="../profile.html" class="list-group-item list-group-item-action text-wrap">
           <div class="wd-float-left me-2"> <i class="fa-solid fa-user"></i> </div>
           <span class="text-break d-none d-xl-block"> Profile </span></a>
           <a href="#" class="list-group-item list-group-item-action">
           <div class="wd-float-left me-2">
           <span class ="fa-stack fa-2xs">
           <i class="fa-solid fa-circle fa-stack-2x"></i>
           <i class="fa-solid fa-ellipsis fa-stack-1x more"></i>
           </span> </div>
           <span class="text-break d-none d-xxl-block d-xl-block d-lg-none"> More </span></a>
           <button class="btn btn-primary mt-2"> Tweet </button>
           </div>
 `);
}
export default NavigationSidebar;

