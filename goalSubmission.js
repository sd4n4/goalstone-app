
let form = document.getElementById("goalForm");
let roadmap = document.getElementById("roadmap");
let category = window.location.pathname.split("/").pop().replace(".html", "");
let goals = JSON.parse(localStorage.getItem(category + "Goals")) || [];function displayGoals() {
    roadmap.innerHTML = "";
    for (let i = 0; i < goals.length; i++) {
        roadmap.innerHTML +=
            '<div class="card">' +
            '<h2>' + goals[i].title + '</h2>' +
            '<p id="timeframe">Timeframe: ' + goals[i].timeframe + '</p>' +
            '<p id="steps">Steps:</p>' +
            '<button class="deleteButton" data-index="' + i + '">DELETE</button>' +
            '</div>';
    }
}
displayGoals();
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let timeframe = document.getElementById("time").value;

    goals.push({
        title: title,
        timeframe: timeframe
    });
    localStorage.setItem(category + "Goals", JSON.stringify(goals));
    displayGoals();
    form.reset();
});


roadmap.addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteButton")) {
        let index = Number(event.target.dataset.index);
        goals.splice(index, 1);
        localStorage.setItem(category + "Goals", JSON.stringify(goals));        displayGoals();
    }
});
