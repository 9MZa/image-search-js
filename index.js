function appendImageEle(keyword, index) {
    // Create img div in class gallery
    const imgEle = document.createElement('img');

    // Get image from unsplash
    imgEle.src = `https://source.unsplash.com/400x250/?${keyword}&sig=${index}`;

    // get dom from class gallery via querySelector
    const galleryEle = document.querySelector('.gallery');

    // add imgEle to galleryEle
    galleryEle.appendChild(imgEle);

}

// Remove all image on div class gallery
function removeImages() {
    const galleryEle = document.querySelector('.gallery');
    galleryEle.innerHTML = '';
}

// Result image search
function searchImages(event) {
    // get keyword from event // input form
    const keyword = event.target.value;

    // result
    if (event.key === 'Enter' && keyword !== '') {
        // remove current Image // if have
        removeImages()
        // show result
        for (let i = 1; i <= 9; i++) {
            appendImageEle(keyword, i);
        }
    }
}

function queryImage() {
    // get value from input div
    const inputEle = document.querySelector('input');
    // get from keydown event and sent to searchImages function
    inputEle.addEventListener('keydown', searchImages);
}

// run function queryImage()
queryImage()