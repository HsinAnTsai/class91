player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player2_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    get_word= document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in Lowercase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1 , "_");
    remove_CharAt2 = word.replace( charAt2 , "_");
    remove_CharAt3 = word.remove(charAt3 , "_");
    console.log(remove_CharAt3);

    question_word = "<h4 id='word_display'> Q. " + remove_CharAt3 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br></br> <button class = 'btn btn info' onclick = 'check()'> Check </button> ";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}