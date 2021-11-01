// const url = "https://api.jikan.moe/v3/search/anime?q=";

// async function getApi(api) {
//     try {
//         return await fetch(api)
//             .then(response => response.json())
//     } catch (error) {
//         return error
//     }
// }

// btn.onclick = () => {
//     getApi(url + search.value).then (res => console.log(res.results))
    
// }

// ! URL-פיצול ה

const basicAPI = "https://api.jikan.moe/v3/"; // !  פה בשונה מהדוגמה למעלה פיצלנו את הכתובת ואמרנו לו שילך לחיפוש בשרת ברגע הלחיצה ויחפש את מה שרשמנו באינפוט

async function getApi(api) {
    try {
        return await fetch(api)
            .then(response => response.json())
            
    }
    catch (error) {
        return error
    }
    finally {
        hideImg()
    }
}


btn.onclick = () => {
    container.innerHTML=" "
    showImg() 
    getApi(`${basicAPI}search/anime?q=${search.value}`)
   .then (res => showResults(res.results))

}


function showResults(results) {
    results.forEach(items => {
        container.innerHTML+= `<div class="DivData"> <img src=${items.image_url}>
                                 <h3>${items.title} </h3> 
                                 <p>Type: ${items.type} </p>
                                 <p>Episodes: ${items.episodes} </p>
                                 <p>Rated: ${items.rated} </p> </div>`

  });
     
 }

 function showImg() {
    imgGif.style.display="block"
    
}

function hideImg() {
    imgGif.style.display="none"
    
}