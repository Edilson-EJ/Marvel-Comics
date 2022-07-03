
const timeStamp = '1656603541742';
const apiKey = '544233afc2e21900577bc40608b3e3a0';
const md5 = '92401b11d7da599321a76b5519ebfcaf';

fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
).then((response) =>{
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#herois');
    
    jsonParsed.data.results.forEach(element =>{

        if(element.description != null && element.description != ""  && element.images != 0){
            const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension 
            const nameHero = element.title
            const descript = element.description

            createDivHero(srcImage,nameHero,descript, divHero);
        }

    })
    console.log(jsonParsed);
});

function createDivHero(srcImage, nameHero, descript , divToAppend){
    const divPai = document.createElement('div');
    const divFilho = document.createElement('div')
    const divButtom = document.createElement('buttom')
    const textName = document.createElement('text')
    const textDescript = document.createElement('text')
    const img = document.createElement('img')

    texto = "Compra"
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

function botao(){

    let texto = "<buttom>Compra</buttom>";
    document.getElementById("buttom").innerHTML = texto;    
}