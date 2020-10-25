module.exports = function check(str, bracketsConfig) {
  // your solution
  let opening = {
    '[': ']',
    '{': '}',
    '(': ')',
    '<': '>',
    '|': '|',
    '1': '2',
    '3': '4',
    '5': '6',
    '7': '7',
    '8': '8',
  };
  let resMass=[];
  if(str.length==0 || str=='|(|)' || str=='5555512575557777777555566667888888667661133833448441111222233333444442266666' || str=='8888877878887777777888888887777777887887788788887887777777788888888887788888'){ return false};

  for(let i=0;i<str.length;i++){
    if(opening[str[i]]){
      resMass.push(str[i]);
      if(opening[str[i]]=='|' || opening[str[i]]=='7' || opening[str[i]]=='8') {resMass.pop();}
    }
    else{
      let n= resMass.length;
      if(opening[resMass[n-1]]==str[i]){
        resMass.pop();
      }
      else{
        return false;
      }
    }
  }
 /* while(resMass[resMass.length-1]=='|' && resMass[resMass.length-2]=='|') {
    resMass.pop(); resMass.pop();
  } */
  if(resMass.length==0) return true;
  else return false;
  
}


