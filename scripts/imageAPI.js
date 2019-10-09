'use strict';


const getImageApi = async () => {
    let imagesArray = [];
    const container = document.querySelector('.header-background');
    const image = await fetch("https://picsum.photos/v2/list?page=9&limit=100");
    const toJson = await image.json();
    console.log(toJson)//promise (que es tot d'objectes)

    toJson.forEach(image =>{
        if (image.id === "859"){
            imagesArray.push(image.download_url);
        }
    })

    console.log(imagesArray)
    /*toJson.forEach(image => {
        imagesArray.push(image.download_url);
    });*/

    let randImg = imagesArray[Math.floor(Math.random()*imagesArray.length)];

    container.style.backgroundImage = `url("${randImg}")`;

}

getImageApi();

