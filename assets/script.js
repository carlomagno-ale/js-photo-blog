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
         <div class="col">
          <div class="card">
            <div class="pin"></div>
            <img src="${img}" alt="spiaggia">
            <div class="title-card">
              <span>${date}</span>
              <h2>${title}</h2>
            </div>
          </div>
        </div>  `
      }

   })
   .catch(error => console.error(error));

