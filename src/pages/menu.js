import chickenImage from "../images/chicken.jpg"
import broccoliImage from "../images/broccoli.jpg"
import waterImage from "../images/water.jpeg"
import "../styles/menu.css"

const menu = function() {
    const content = document.getElementById("content");

    const div1 = document.createElement('div');
    div1.className = "foodCard"

    const chickTitle = document.createElement('p');
    chickTitle.className = 'foodTitle';
    chickTitle.innerText = "BoIlEd ChIcKeN bReAsT";

    const chicken = document.createElement('img');
    chicken.src = chickenImage;
    chicken.className = "foodIcon";

    const chickHolder = document.createElement('ul');
    const chick1 = document.createElement('li');
    chick1.innerText = "Put chicken in pot."
    const chick2 = document.createElement('li');
    chick2.innerText = "Add water til chicken is fully covered.";
    const chick3 = document.createElement('li');
    chick3.innerText = "Boil for 20 minutes."

    chickHolder.appendChild(chick1);
    chickHolder.appendChild(chick2);
    chickHolder.appendChild(chick3);
    div1.appendChild(chickTitle);
    div1.appendChild(chicken);
    div1.appendChild(chickHolder);

    content.appendChild(div1);

    const div2 = document.createElement('div');
    div2.className = "foodCard"

    const brocTitle = document.createElement('p');
    brocTitle.className = 'foodTitle';
    brocTitle.innerText = "bOiLeD bRoCcOLi";

    const broc = document.createElement('img');
    broc.src = broccoliImage;
    broc.className = "foodIcon";

    const brocHolder = document.createElement('ul');
    const broc1 = document.createElement('li');
    broc1.innerText = "Put broccoli in pot."
    const broc2 = document.createElement('li');
    broc2.innerText = "Add water til broccoli is fully covered.";
    const broc3 = document.createElement('li');
    broc3.innerText = "Boil for 20 minutes."

    brocHolder.appendChild(broc1);
    brocHolder.appendChild(broc2);
    brocHolder.appendChild(broc3);
    div2.appendChild(brocTitle);
    div2.appendChild(broc);
    div2.appendChild(brocHolder);

    content.appendChild(div2);

    const div3 = document.createElement('div');
    div3.className = "foodCard"

    const waterTitle = document.createElement('p');
    waterTitle.className = 'foodTitle';
    waterTitle.innerText = "bOiLeD wAtEr";

    const water = document.createElement('img');
    water.src = waterImage;
    water.className = "foodIcon";

    const waterHolder = document.createElement('ul');
    const water1 = document.createElement('li');
    water1.innerText = "Put water in pot."
    const water2 = document.createElement('li');
    water2.innerText = "Boil for 20 minutes.";

    waterHolder.appendChild(water1);
    waterHolder.appendChild(water2);
    div3.appendChild(waterTitle);
    div3.appendChild(water);
    div3.appendChild(waterHolder);

    content.appendChild(div3);
};

export default menu;