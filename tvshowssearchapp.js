const form=document.querySelector('#tv');
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
   const Showname= form.elements.query.value;
   const config={params:{ q:Showname}}
  const res=await axios.get(`https://api.tvmaze.com/search/shows`,config)
 forimages(res.data);
 form.elements.query.value.remove()
  
})
const forimages=(shows)=>{
    for (const result of shows) {
        if(result.show.image){
    const img=document.createElement('img');
  img.src=result.show.image.medium;
  document.body.appendChild(img)
        }
    }
}

const clearPage = () => {
    // Remove all child nodes from the body
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
}