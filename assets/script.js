const photoList = document.getElementById("photo-list")

//chiamata ajax

axios.get("https://lanciweb.github.io/demo/api/pictures")
   .then(response => {

      const img = response.data[0].url
      console.log(img)
      const date = response.data[0].date
      console.log(date)
      const title = response.data[0].title

      photoList.innerHTML = ` 
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


   })
   .catch(error => console.error(error));
