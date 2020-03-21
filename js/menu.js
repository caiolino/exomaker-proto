document.querySelector('.hamburger').addEventListener('click', () => { 
    let mudaMnenu =document.querySelector('.hamburger')
    mudaMnenu.classList.toggle('transf');


    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      console.log(x);
    } else {
      x.className = "topnav";
    }


});