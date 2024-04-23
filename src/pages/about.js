const about = function() {
    const content = document.getElementById("content");

    const s1 = document.createElement('p');
    s1.innerText = "This restaurant is about lean gains and max pain.";

    const s2 = document.createElement('p');
    s2.innerText = "To achieve this we try to make the food as boring as possible. This means we minimize flavor while chasing mediocre nutrition.";

    const s3 = document.createElement('p');
    s3.innerText = "If you have any complaints. That's too bad because we are trying to provide the best worst food possible backed by our BROSCIENCE."

    content.appendChild(s1);
    content.appendChild(s2);
    content.appendChild(s3);
};

export default about;