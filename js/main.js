var main = document.querySelector(".main");
for (let index = 0; index < 9; index++) {
    var leftToright = document.createElement("div");
    leftToright.setAttribute("style" , "--i:"+index );
    leftToright.setAttribute("class" , "leftToright");
    main.appendChild(leftToright);

}


for (let index = 0; index < main.children.length; index++) {
    main.children[index].addEventListener('animationend', () => {
        main.children[index].style.boxShadow = "0px 0px 0px yellow , 0px 0px 0px yellow , 0px 0px 0px yellow , inset 0px 0px 0px yellow";
        main.children[index].classList.remove("play");
      });
}

document.body.onclick = function(){
    for (let index = 0; index < main.children.length; index++) {
        main.children[index].classList.add("play");
        main.children[index].style.boxShadow = "0px 0px 5px yellow , 0px 0px 10px yellow , 0px 0px 15px yellow , inset 0px 0px 5px yellow";
        
    }
    
}