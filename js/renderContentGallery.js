function renderContentGallery(data) {
    // validacija
    if (!data){
        console.warn('ERROR: generuojant galerija, reikia duoti tinkama informacija');
        return '';
    }
    // logika

    const maxGallerysize = 4;
    const totalPhotosCount = data.length;
    const visiblePhotoCount = totalPhotosCount > maxGallerysize ? maxGallerysize : totalPhotosCount;

    let imagesHTML = '';
    for (let i = 0; i < visiblePhotoCount; i++) {
        imagesHTML += `<img src="./img/posts/${data[i]}" alt="User post gallery picture">`;
    }

    let extraHTML = '';
    if (totalPhotosCount > maxGallerysize){
        extraHTML = `<div class="extra">+${totalPhotosCount - maxGallerysize}</div>`;
    }

    return `<div class="gallery gallery-${visiblePhotoCount}">
                ${imagesHTML}
                ${extraHTML}
            </div>`;
}

export default renderContentGallery;