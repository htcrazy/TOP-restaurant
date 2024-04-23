const home = function() {
    const content = document.getElementById("content");

    const h3 = document.createElement('h3');
    h3.innerText = "THE BORING BRO FOOD PLACE";

    const p1 = document.createElement('p');
    p1.className = "noMarginP";
    p1.innerText = "Hours";

    const hoursList = document.createElement('ul');
    hoursList.className = "noMarginP";

    const sun = document.createElement('li');
    sun.innerText = "Sunday: All day";
    const mon = document.createElement('li');
    mon.innerText = "Monday: All day";
    const tue = document.createElement('li');
    tue.innerText = "Tuesday: All day";
    const wed = document.createElement('li');
    wed.innerText = "Wednesday: All day";
    const thu = document.createElement('li');
    thu.innerText = "Thursday: All day";
    const fri = document.createElement('li');
    fri.innerText = "Friday: All day";
    const sat = document.createElement('li');
    sat.innerText = "Saturday: All day";

    hoursList.appendChild(sun);
    hoursList.appendChild(mon);
    hoursList.appendChild(tue);
    hoursList.appendChild(wed);
    hoursList.appendChild(thu);
    hoursList.appendChild(fri);
    hoursList.appendChild(sat);

    const p2 = document.createElement('p');
    p2.innerText = "Each item on our menu is gluten free!"

    content.appendChild(h3);
    content.appendChild(p1);
    content.appendChild(hoursList);
    content.appendChild(p2);
};

export default home;