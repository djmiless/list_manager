let fireBtn = document.querySelector("#fire");
let skyBtn = document.querySelector("#sky");
let body = document.body;
let cardBody = document.querySelector(".card-body");
let cardHeading = document.querySelector("#txt");
let moneyBtn = document.querySelector("#money");
let carBtn = document.querySelector("#car");



//when you click
fireBtn.onclick = function(){
 
    refreshPage();

     // on click change backgrouncolor
    
    body.style.backgroundColor = "yellow";

        // on click change image
    const img = document.createElement("img");

    img.src="assets/fire.png";

    cardBody.appendChild(img);

     // on click change text

     let txt = document.getElementById ("txt");
     txt.innerHTML = "fire up";



     


    


}


skyBtn.onclick = function(){

    refreshPage();

       // on click change backgrouncolor

    body.style.backgroundColor = "blue";

         // on click change image
    let image = document.createElement("img");
    image.src="assets/sky.png";

    cardBody.appendChild(image);


    // on click change text

    let txt = document.getElementById ("txt");
    txt.innerHTML = "sky up";

}

// function
function refreshPage(){
    cardBody.innerHTML = "";
}




//when you click
moneyBtn.onclick = function(){
 
    refreshPage();

     // on click change backgrouncolor
    
    body.style.backgroundColor = "red";

        // on click change image
    let img = document.createElement("img");

    img.src="assets/money.png";

    cardBody.appendChild(img);

     // on click change text

     let txt = document.getElementById ("txt");
     txt.innerHTML = "Money up";

     


    


}


//when you click
carBtn.onclick = function(){
 
    refreshPage();

     // on click change backgrouncolor
    
    body.style.backgroundColor = "purple";

        // on click change image
    const img = document.createElement("img");

    img.src="assets/car.png";

    cardBody.appendChild(img);

     // on click change text

     let txt = document.getElementById ("txt");
     txt.innerHTML = "speed up";

    


}
