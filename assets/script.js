//chiamata ajax di test
axios.get("https://lanciweb.github.io/demo/api/pictures")
.then(response => {
   console.log(response.data)
})
.catch(error => console.error(error));