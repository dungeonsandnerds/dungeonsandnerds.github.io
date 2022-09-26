var dieFace = {
  4:'<svg width="50" height="50"><polygon points="0,3 25,46 50,3" style="stroke: black; fill: none" /><text fill="black" x="20" y="26" font-family="Verdana" font-size="18">REPLACEME</text></svg>',
  6:'<svg width="50" height="50"><polygon points="3,3 3,47 47,47 47,3" style="stroke: black; fill: none" /><text fill="black" x="20" y="30" font-family="Verdana" font-size="18">REPLACEME</text></svg>',
  8:'<svg width="60" height="50"><polygon points="17,0 60,25 17,50 17,0 0,25 17,50" style="stroke: black; fill: none" /><text fill="black" x="25" y="30" font-family="Verdana" font-size="18">REPLACEME</text></svg>',
  10:'<svg width="50" height="50"><polygon points="43,50 0,25 43,0 50,25" style="stroke: black; fill: none" /><text fill="black" x="20" y="30" font-family="Verdana" font-size="18">REPLACEME</text></svg>',
  12:'<svg width="50" height="50"><polygon points="25,0 1,17 10,45 40,45 49,17" style="stroke: black; fill: none" /><text fill="black" x="13" y="30" font-family="Verdana" font-size="18">REPLACEME</text></svg>',
  20:'<svg width="50" height="50"><polygon points="0,46 25,0 50,46" style="stroke: black; fill: none" /><text fill="black" x="13" y="40" font-family="Verdana" font-size="18">REPLACEME</text></svg>',
  'other':'<svg width="50" height="50"><circle cx="25" cy="25" r="20" style="stroke: black; fill: none" /><text fill="black" x="13" y="31" font-family="Verdana" font-size="18">REPLACEME</text></svg>'
};

function rollem(){
    total = 0;
  n = document.getElementById('num').value;
  d = document.getElementById('die').value;
    o = document.getElementById('output');
  p = o.innerHTML;
  
  if (d in dieFace){ 
    face = dieFace[d];
  } else {
    face = dieFace['other'];
  }
  
  if (p != ''){
      p = p.concat("<hr>")
  } else {
      p = p.concat('<button id="clear" onclick="clearme()" style="float:right;">Clear</button>');
  }
  for (i = 0; i < n; i++){
      r = Math.ceil(Math.random() * d);
      total += r;
      p = p.concat("<span> " + face.replace('REPLACEME', r.toString()) + " </span>");
  }
  p += " Total: " + total;
  o.innerHTML = p;
}

function clearme(){
    o = document.getElementById('output');
    o.innerHTML = "";
}

function loady(){
      for(f in dieFace){
          e = document.getElementById(f);
        if (e) e.innerHTML = dieFace[f].replace("REPLACEME", f);
    }
}

function dieClick(whatzis){
  n = document.getElementById('num');
  d = document.getElementById('die');
      if (whatzis.id == d.value){
          n.value = Number(n.value) + 1;
      } else {
          n.value = 1;
          d.value = whatzis.id
      }
}