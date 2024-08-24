let images = [
  {
    url: `https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=600`,
    alt: `turbulent clouds of gray and white that fill the sky`,
  },
  {
    url: `https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=600`,
    alt: `a dramatic tornao rips through the contryside as a bolt of lightning strikes nearby`,
  },
  {
    url: `https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=600`,
    alt: `beatiful sun rays pierse the blue sky as clouds form overhead`,
  },
  {
    url: `https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    alt: `a dramatic lightning bolt decends from the heavens to strike the skyline of Toronto, giveing a eary purple to the nights sky`,
  },
];

const thumbNailContainer = document.getElementById(`thumbnailContainer`);
const displayImage = document.getElementById(`displayImage`);

function createThumbnails() {
  images.forEach(function (image) {
    let imageElement = document.createElement(`img`);

    imageElement.src = image.url;
    imageElement.alt = image.alt;

    imageElement.setAttribute(`tabindex`, 0);

    imageElement.addEventListener(`click`, function () {
      console.log(`Clicked on ${image.alt}`);
      createImageBig(image);
    });

    imageElement.addEventListener(`keydown`, function (event) {
      console.log(event);
      if (event.key === `enter`) {
        createImageBig(image);
      }
    });

    thumbNailContainer.appendChild(imageElement);
  });
}

createThumbnails();

function createImageBig(imageParamiter) {
  console.log(`imageParamiter.url:`, imageParamiter.url);
  console.log(`imageParamiter.alt:`, imageParamiter.atl);

  displayImage.innerHTML = ``;
  const bigImageElement = document.createElement(`img`);

  bigImageElement.src = imageParamiter.url;
  bigImageElement.alt = imageParamiter.alt;
}
displayImage.appendChild(bigImageElement);
