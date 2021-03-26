const navbarPC = `
<div id="navbarPC">
<div class="navlogo">
            <img class="logo" src="assets/logo.png" alt="">
        </div>
        <div class="leftlinks">
        <a href="#" onmouseover="openSideBar()">Shop</a>
        <a href="#">About 4moms</a>
        </div>
        <div class="rightlinks">
        
            
            <a href="#" class="dropdown" id="dropdown" onclick="dropdownFunc()">
            <i class="bi bi-geo-alt"></i>
            United States
            </a>
            
            
        
            <a href="">Support</a>
            <a class="search" onclick="openSearch()"><i class="bi bi-search"></i></a>
            <a href=""><i class="bi bi-person-circle"></i></a>
            <a href=""><i class="bi bi-cart"></i></a>
        </div>
          </div>
          <div class="searchBar" id="searchBar">
          <i class="bi bi-x" onclick="closeSearch()"></i>
        <div class="input">
        <i class="bi bi-search" ></i>
      <input type="text" placeholder="Search..." name="search" class="searchBarInput"/>
      </div>
    
    
        </div>
        
        `

const navbarMob = `
<div class="navlogo">
            <img class="logo" src="assets/logo.png" alt="">
</div>
<div class="leftLinksMob">
<a href=""><i class="bi bi-list"></i></a>
<a href=""><i class="bi bi-person-circle"></i></a>
</div>

<div class="rightLinksMob">
<a href=""><i class="bi bi-search"></i></a>
<a href=""><i class="bi bi-cart"></i></a>
</div>

`

function navBar(x) {
            if (x.matches) {
                document.getElementById("navbar").innerHTML = navbarMob;
            } else {
                document.getElementById("navbar").innerHTML = navbarPC;
            }
        }

        var x = window.matchMedia("(max-width: 768px)")
        navBar(x)
x.addListener(navBar)


function dropdownFunc() {
  document.getElementById("dropdown-content").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
      if (dropdowns.classList.contains('show')) {
          dropdowns.classList.remove('show');
      }
      else {
          dropdowns.classList.toggle('show');
      }
  }
}
window.addListener(dropdownFunc)
