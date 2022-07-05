
const timeStamp = '1656603541742';
const apiKey = '544233afc2e21900577bc40608b3e3a0';
const md5 = '92401b11d7da599321a76b5519ebfcaf';

fetch(`https://gateway.marvel.com:443/v1/public/creators?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
).then((response) =>{
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#herois');
    const informação = document.querySelector('.info');

    const info = jsonParsed.attributionText;
    const copy = jsonParsed.copyright;


    jsonParsed.data.results.forEach(element =>{


        //if(element.description != null && element.description != ""  && element.images != 0){
            const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension 
            const nameHero = element.firstName
            const descript = element.description

            createDivHero(srcImage,nameHero,descript, divHero);
        //}

    })
    console.log(jsonParsed);
    info_marvel(info, copy, informação);

});

function createDivHero(srcImage, nameHero, descript , divToAppend){
    const divPai = document.createElement('div');
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const textDescript = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent = nameHero
    img.src = srcImage
    textDescript.textContent=descript

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divFilho.appendChild(textDescript)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)
    

    divPai.classList.add("personagem");
    divFilho.classList.add("texto");

}

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
