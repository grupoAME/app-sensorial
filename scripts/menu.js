$("#bt-evaluation").click(function(){
  redirectToList();
});

$("#bt-graph").click(function(){
  redirectToMap();
});

function redirectToList(){
  window.location = "list.html";
}

function redirectToMap(){
  window.location = "map.html";
}