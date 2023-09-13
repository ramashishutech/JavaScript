var player1Rusult = 0;
var player2Rusult = 0;
var gamedata = ["snake", "water", "gun"]

for (var index = 1; index <= 10; index++) {


    var player1 = gamedata[Math.floor(Math.random() * 3)]
    console.log("Round -- " + index, player1);





    var player2 = gamedata[Math.floor(Math.random() * 3)]
    console.log(player2);

    if (player1 == player2) {
        console.log("Match draw");
        let tr = `<tr>
        <td>`+ index + `</td>`
            + `<td> ` + player1 + `</td>`
            + `<td>` + player2 + `</td>`
            + `<td>Match Drow </td></tr>`
        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;

    }
    else if (player1 == "snake" && player2 == "gun") {
        console.log("player2 is win!");
        player2Rusult = player2Rusult + 1;
        let tr = `<tr>
        <td>`+ index + `</td>`
            + `<td> ` + player1 + `</td>`
            + `<td>` + player2 + `</td>`
            + `<td>player2 is win! </td></tr>`
        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    }
    else if (player1 == "snake" && player2 == "water") {
        console.log("player1 is win!");
        player1Rusult = player1Rusult + 1;
        let tr = `<tr>
        <td>`+ index + `</td>`
            + `<td> ` + player1 + `</td>`
            + `<td>` + player2 + `</td>`
            + `<td>"player1 is win!"</td></tr>`
        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;

    }
    else if (player1 == "gun" && player2 == "water") {
        console.log("player2 is win!");
        player2Rusult = player2Rusult + 1;
        let tr = `<tr>
        <td>`+ index + `</td>`
            + `<td> ` + player1 + `</td>`
            + `<td>` + player2 + `</td>`
            + `<td>"player2 is win!"</td></tr>`
        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    }

    else if (player1 == "gun" && player2 == "snake") {
        console.log("player1 is win!");
        player1Rusult = player1Rusult + 1;
        let tr = `<tr>
        <td>`+ index + `</td>`
            + `<td> ` + player1 + `</td>`
            + `<td>` + player2 + `</td>`
            + `<td>"player1 is win!"</td></tr>`
        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    }
    else if (player1 == "water" && player2 == "snake") {
        console.log("player1 is win!");
        player1Rusult = player1Rusult + 1;
        let tr = `<tr>
        <td>`+ index + `</td>`
            + `<td> ` + player1 + `</td>`
            + `<td>` + player2 + `</td>`
            + `<td>"player1 is win!"</td></tr>`
        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    }
    else if (player1 == "water" && player2 == "gun") {
        console.log("player2 is win!");

        player2Rusult = player2Rusult + 1;
        let tr = `<tr>
        <td>`+ index + `</td>`
            + `<td> ` + player1 + `</td>`
            + `<td>` + player2 + `</td>`
            + `<td>"player2 is win!"</td></tr>`
        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    }

}



if (player1 > player2) {
    console.log("player1 is winner" + (player1Rusult - player2Rusult) + " " + "Score");
    document.write("<h1>player1 is winner with" + (player1Rusult - player2Rusult) + "" + "Score</h1>");
}
else if (player1 < player2) {
    console.log("player2 is winner" + (player1Rusult - player2Rusult) + "" + "Score");
    document.write("<h1>player1 is winner with" + (player2Rusult - player1Rusult) + "" + "Score</h1>");

}
else {
    console.log("match Drow");
    document.write(",<h1>Match Drow</h1>");
}






