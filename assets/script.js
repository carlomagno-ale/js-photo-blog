const photoList = document.getElementById("photo-list")
const urlEndpoint = "https://lanciweb.github.io/demo/api/pictures"

//ajax call to generate the cards with various data 
axios.get(urlEndpoint)
  .then(response => {

    for (let i = 0; i < response.data.length; i++) {
      const photoData = response.data[i];

      const img = photoData.url
      console.log(img)
      const date = photoData.date
      console.log(date)
      const title = photoData.title
      console.log(title)

      photoList.innerHTML += ` 
         <div class="col-md-6 col-lg-4 col-sm-6 col-12 mt-4">
          <div class="card rounded-0 border-0">
            <div class="pin"></div>
            <img src="${img}" alt="spiaggia">
            <div class="title-card px-3 pb-2">
              <span>${date}</span>
              <h2 class="fs-4">${title}</h2>
            </div>
          </div>
        </div>  `
    }

    const allCard = document.querySelectorAll(".card")
    console.log(allCard)
    const gallery = document.querySelector(".gallery")

    for (let i = 0; i < allCard.length; i++) {

      allCard[i].addEventListener('click', galleryPhoto)

      function galleryPhoto() {
        gallery.style.display = "block";
      }
    }
  })
  .catch(error => console.error(error));


