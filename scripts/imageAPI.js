'use strict';


const getImageApi = async () => {
    let imagesArray = [];
    const container = document.querySelector('.header-background');

    const fetchData = () => {
        const urls = [
            "https://picsum.photos/v2/list?page=9&limit=100",
            "https://picsum.photos/v2/list?page=8&limit=100"
        ];

        const allRequests = urls.map(url =>
            fetch(url).then(response => response.json())
        );

        return Promise.all(allRequests);
    };

    fetchData().then(arrayOfResponses =>
        //console.log("The data we got from the server:", arrayOfResponses[0].concat(arrayOfResponses[1]))

        arrayOfResponses[0].concat(arrayOfResponses[1]).forEach(image => {
            if (image.id === "823") {
                imagesArray.push(image.download_url);
                console.log(imagesArray)
                let randImg = imagesArray[Math.floor(Math.random() * imagesArray.length)];
                container.style.backgroundImage = `url("${randImg}")`;
            }
        })
    );

}

getImageApi();

