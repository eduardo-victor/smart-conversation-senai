function checkAnswer(){
    var response = document.getElementById('answer').value; //acho q nao precisa dessa merda aq
    var edv = document.getElementById('edv').value;
    var password = document.getElementById('password').value;

    if (edv == "123" && password == "12345")
        location = 'http://127.0.0.1:5500/chat-page/chat.html'; // 'right.html';
    else
        alert("ALGO DE ERRADO NÃO ESTÁ CERTO")
    return false;
                }