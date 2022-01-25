// Adicionando as imagens no HTML
let fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg"];
let legendas = ["Imagem 1", "Imagem 2", "Imagem 3", "Imagem 4"];


// Criando a função das imagens
function TrocarFoto(foto) {
    document.querySelector(".imagem-banner").src = "imagens/" + fotos[foto];

    document.querySelector(".legenda").innerText = legendas [foto];
}


// Criação do slide automático
let fotoAtual = 0;
TrocarFoto(fotoAtual);

setInterval(function() {
    fotoAtual++;
    if(fotoAtual > 3) {
        fotoAtual = 0
    }

    TrocarFoto(fotoAtual);
} , 5000);


// Mudando a foto pelo botão (precisa criar o HTML dessa parte)
document.querySelector("#btfoto1").addEventListener("click", function(){
    TrocarFoto(0);
});

document.querySelector("#btfoto2").addEventListener("click", function(){
    TrocarFoto(1);
});

document.querySelector("#btfoto3").addEventListener("click", function(){
    TrocarFoto(2);
});

document.querySelector("#btfoto4").addEventListener("click", function(){
    TrocarFoto(3);
});