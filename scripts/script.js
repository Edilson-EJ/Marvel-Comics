
const timeStamp = '1656603541742';
const apiKey = '544233afc2e21900577bc40608b3e3a0';
const md5 = '92401b11d7da599321a76b5519ebfcaf';

fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
).then((response) =>{
    return response.json();
}).then((jsonParsed) => {
    
    const informação = document.querySelector('.info');

    const info = jsonParsed.attributionText;
    const copy = jsonParsed.copyright;

    console.log(jsonParsed);
    info_marvel(info, copy, informação);

});


function info_marvel(info, copy, divToAppend){
    const divPai = document.createElement('div');
    const textMarvel = document.createElement('p');
    const textcopy = document.createElement('h3');

    textMarvel.textContent = info;
    textcopy.textContent = copy;

    divPai.appendChild(textcopy);
    divPai.appendChild(textMarvel);
    divToAppend.appendChild(divPai);

    divPai.classList.add("copyright")

}

setTimeout(function(){
    alert("Essas informações são disponibilizadas pela API da Marvel, é infelizmente algumas informações não são disponibilizadas como a imagem e a descrição de alguns conteúdos, mas o principal foco desse site e consumir a API da Marvel, por isso algumas informações vão fica faltando, pois não tem como escolher o conteúdo disponibilizado pela API.");
},800);