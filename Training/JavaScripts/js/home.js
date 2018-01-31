function myFunction() {
    var obj = {item1: 20, item2: 13, item3: 7};
    
    var text = 0;
    var x;
    for (x in obj) {
          text += obj[x];
    }
    document.getElementById("demo").innerHTML = text;
}

