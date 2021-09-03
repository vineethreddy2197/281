let quotesDiv = document.getElementById('quote')
fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote =>{
    quotesDiv.innerHTML +=`<p>${quote.quote}</p>`
})