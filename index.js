//bom aqui eu criei o array que contem os objetos das questoes
var questions =[
    {
        prompt: "What color are apple? \n (a) Red/Green\n\ (b) Purple\n (c) Orange",
        answer: "a"
    },
    {
        prompt: "What color are Bananas? \n (a) Teal\n\ (b) Magenta\n (c) Yellow",
        answer: "c"
    },
    {
        prompt: "What color are strawberries? \n (a) Yellow\n\ (b) Red\n (c) Blue",
        answer: "c"
    }
]

var score = 0; //aqui estou dizendo que o score começa com zero pontos

//agora ele vai percorrer todo o array até o nª total de questões que existem dentro dele
for(var i=0; i< questions.length; i++){ 
    var response = window.prompt(questions[i].prompt); //na tela vai aparecer para o usuário a pergunta e ele vai digitar a resposta
    if(response == questions[i].answer){ //se a resposta for igual a reposta correta ele soma ponto, se nao ele recebe um aviso
        score++;
        alert("Correct!");
    }else{
        alert("WRONG!");
    }
}

alert("you got" + score +"/" + questions.length);