const searchForm = document.querySelector(".search");
const input = document.querySelector(".input");
const newsList = document.querySelector(".news-list");


searchForm.addEventListener("submit", retrive);
function retrive(e) {

    if(input.value == ''){
        alert('input field is empty!')
        return
    }
  e.preventDefault();
  const apiKey = "5a20fd56cc9f4cf7927170b2813e1830";
  let topic = input.value;

  let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
 fetch(url).then((res)=>{
   return res.json()
 }).then((data)=>{
  console.log(data);
data.articles.forEach(article => {
  
    let li =  document.createElement('li')
    let a = document.createElement('a')
    a.setAttribute('href',article.url);
    a.setAttribute('target', '_blank')
    a.textContent = article.title;
    li.appendChild(a);
    newsList.appendChild(li);
})

}).catch((error)=>{
console.log(error)
}
)

}