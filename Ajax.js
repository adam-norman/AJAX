document.getElementById('btn1').addEventListener('click', LoadFile);
function LoadFile() {

    var xhr = new XMLHttpRequest();
    xhr.onerror = function () {
        console.log(new Error("Sorry something gone wrong please contact with your managemnet"));
    }
    xhr.onloadend = function () {
        document.getElementById('loading').setAttribute('class', 'Hide');
    }
    xhr.onreadystatechange = function () {
        
        if (xhr.readyState === xhr.DONE) {
            
          var usersCards=  document.getElementById('users');
            var res = JSON.parse(xhr.response);
            var Cards="";
            console.log(res.results);
            for (var i = 0; ii= res.results.length ;i<ii; i++) {
                Cards+='  <div class="card" style="width: 18rem;">'+
                +'<div class="card-body">'+
                  +'<h5 class="card-title">'+res.results[i].name.first +' '+res.results[i].name.last+'</h5>'+
                  +'<p class="card-text">Some quick example text to build on tk of the  content.</p>'+
                +'</div>'+
              +'</div><br>';


            }
            
            usersCards.innerHTML=Cards;
 
        }
    }
    document.getElementById('loading').setAttribute('class', 'Show');
    xhr.open('GET', 'https://randomuser.me/api/?results=50', true);
    xhr.send(null);
}
