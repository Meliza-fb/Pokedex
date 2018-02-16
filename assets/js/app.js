//llamo a mis id en html
let pokeSearch = document.getElementById('poke_search');//llamo a mis id en html
let pokeSend = document.getElementById('poke-send');

// Public Key = a60bd159889749a73669c0be9f91ce67
// private key = eddca73a145c35807a9fae150ff92ed6ccebd19d
// Online generator md5 hash of a string = 45cbdbeb188c66926f8b050dde897f1b
//APIKEY = a60bd159889749a73669c0be9f91ce67&ts=9&hash=45cbdbeb188c66926f8b050dde897f1b

pokeSend.addEventListener('click', function(){
  $('.poke-date').empty();
  fetch('http://gateway.marvel.com:80/v1/public/comics?ts=9&apikey=a60bd159889749a73669c0be9f91ce67&hash=45cbdbeb188c66926f8b050dde897f1b' + pokeSearch.value + '/');

  done(function(response){
    console.log(response);
    return response.json();
  });
  done(function(data) {
  console.log(data);
});


});
