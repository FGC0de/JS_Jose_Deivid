//function acao(){
//    document.write("executando....<br/>")
//}

//temporizador
//setInterval(acao,1000)

//clearInterval(timer);
//var timer =setInterval(()=>{document.write("Executando atraves do arrow function....<br/>")}
//,1000)

function acao2(){
    document.write("Executando com setTimeout....<br/>");
}
setTimeout(acao2,3000);

setTimeout(()=>{
    document.write("Executando com arrow  function!")
},4000);