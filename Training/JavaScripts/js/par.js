function checkBrackets(str){
    var count = 0;
    if(str[0]==')'||(exp[arraylen]=='('))
  {
    return false;
  }
    for(var i in str){   
        if(str[i] == '('){
            count ++;
        } else if(str[i] == ')') {
            count --;
        }  
        
        if (count < 0)
            document.write(" close unbalanced");
    }
        if(count > 0) 
            document.write(" open unbalanced");
        if(count=0)
            document.write("balanced");
}
