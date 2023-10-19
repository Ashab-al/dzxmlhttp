

let xhr = new XMLHttpRequest();


xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        // console.log(JSON.parse(this.response).items[0])
        let otvet = JSON.parse(this.response)
        let i = 3
        while (i < 9){
            console.log(otvet.items[i])
            i ++
            document.getElementById('films').innerHTML += '<div class="film">'+ 
                                                            `<img src="${otvet.items[i]["posterUrl"]}" alt="">` +
                                                            `<h2 class="title">${otvet.items[i]["nameRu"]}</h2>`+ 
                                                            `<h2 class="directors">directors</h2>` +
                                                            `<h2 class="yers">${otvet.items[i]["year"]}</h2>` +
                                                            `<h2 class="desc">Описание</h2>` +
                                                            '</div>';
        }
    } 
}

function send_data(){
    xhr.open("GET", "https://kinopoiskapiunofficial.tech/api/v2.2/films", true)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('X-API-KEY', '39fff5b9-9bad-4f10-8453-9473bf112d4e')
    
    xhr.send()
}



window.addEventListener('load', () => {
    send_data();
  });