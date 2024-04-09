// console.log('correcto');

const xhttp = new XMLHttpRequest();

xhttp.open('GET', 'json/datos.json', true);

xhttp.send();

xhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status==200){
    console.log(this.responseText);
    let datos = JSON.parse(this.responseText);
    console.log(datos);
    for (var i = 0; i < datos.length; i++){
          document.getElementById("librosEnLista").innerHTML +=
          '<a class="px-3" href="' + datos[i].href + '"><img src="' + datos[i].imgsrc + '" alt="' + datos[i].alt + '" style="height:400px;"></a>';
        }
  }
}