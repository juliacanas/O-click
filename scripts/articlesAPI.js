
'use strict';

const containerProfiles = document.querySelector('.list-profiles');

const connectToApi = async () => {
    const response = await fetch("https://picsum.photos/v2/list?page=5&limit=100")
    const listImages = await response.json()
    // console.log(listImages)

    const newArray = [];

    for (let i = 0; i < 20; i++) {
        newArray.push(
            {
                'download_url': listImages[i].download_url.split('/'),
                'author': listImages[i].author
            }
        )

    }
    newArray.forEach(img => {
        img.download_url[5] = 400;
        img.download_url[6] = 300;
        img.download_url = img.download_url.join('/');
    })

    // let finalArray = newArray.map(e => e.download_url.join("/"));

    console.log(newArray)

    for (let i = 0; i < newArray.length; i++){
        const articleProfile = document.createElement('article')
        articleProfile.innerHTML = `
            <img src="${newArray[i].download_url}" width="100%" alt="">
            <h3> @ ${newArray[i].author} </h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id augue ut turpis venenatis maximus. Suspendisse mattis vehicula ultrices. Sed dignissim iaculis sem, nec egestas diam. Cras id velit nec lectus facilisis laoreet.</p>
            `
        containerProfiles.appendChild(articleProfile);
        console.log(containerProfiles)
    }


}

connectToApi();
