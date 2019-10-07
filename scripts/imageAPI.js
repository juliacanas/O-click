'use strict';



const getImageApi = async () => {
    let imagesArray = [];
    const container = document.querySelector('.header-background');
    const image = await fetch("https://picsum.photos/v2/list?page=12");
    const toJson = await image.json();
    //console.log(toJson)
    toJson.forEach(image => {
        imagesArray.push(image.download_url);
    });

    let randImg = imagesArray[Math.floor(Math.random()*imagesArray.length)];

    container.style.backgroundImage = `url("${randImg}")`;
    //container.style.backgroundRepeat = 'no-repeat';
    //container.style.backgroundSize = 'cover';

}

getImageApi();
