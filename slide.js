const PC = `
<div id="sidebar" class="sidebar" onmouseover="openSideBar()" onmouseout="closeSideBar()">
<div class="linkwrappersidebar">
  <a href="#">Shop All</a><br>
  <a href="#">Seats</a><br>
  <a href="#">Playards</a><br>
  <a href="#">Feeding</a><br>
  <a href="#">Bassinets</a><br>
  <a href="#">Bath</a><br>
  <a href="#">Mobile</a><br>
  <div class="line"></div>
  <a href="#">Accessories</a><br>
  <a href="#">Spare Parts</a><br>
  </div>
</div>
<div class="containerwrapper">
    <div class="container">
    <img src="assets/chair.jpg" alt="">
    </div>
    <div class="textcontainer">
    <h1>Freeing in your hands.<br>
        So you can do more.
    </h1>
    <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Aenean euismod bibendum laoreet.
    </h4>
    <br>
    <button class="slidebtn">
        Shop Bassinets
    </button>
    </div>
    
</div>`

const mobile = `
<div class="textcontainerMob"><h1>Freeing in your hands.<br>
        So you can do more.
    </h1>
    <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
    </h4></div>
    <div class="btncontainerMob">
    <button class="slidebtn">
        Shop Bassinets
    </button>
    </div>
    <div class="containerMob">
    <img src="assets/chair.jpg" alt="">
    </div>
`

function slide(x) {
            if (x.matches) {
                document.getElementById("slide").innerHTML = mobile;
            } else {
                document.getElementById("slide").innerHTML = PC;
            }
        }

        var x = window.matchMedia("(max-width: 768px)")
        slide(x)
x.addListener(slide)

