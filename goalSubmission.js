let form = document.getElementById("goalForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let title = document.getElementById("title").value;
    let timeframe = document.getElementById("time").value;
    document.getElementById("roadmap").innerHTML = 
    '<h2>' + title + '</h2>' +
    '<p>Timeframe: ' + timeframe + '</p>' +
    '<p>Steps:</p>';
});