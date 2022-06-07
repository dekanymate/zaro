fetch('autok.json')
    .then((response) => response.json())
    .then((data) => {
        megjelenit(data.autok)
    });

function megjelenit(tomb) {

    var txt = "";

    for (let index = 0; index < tomb.length; index++) {
        txt += `<div id = "${index}">`
        txt += `<img src="${tomb[index].kep}" alt=""></img>${tomb[index].marka}${tomb[index].evjarat}`
        txt += "</div>"
    }

    document.getElementById("autok").innerHTML += txt
}


