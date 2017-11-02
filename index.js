function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var ret 
  if (string==="I love you, Grandma."){
    ret = "I love you, too."
  }
  if(string===string.toLowerCase){
    ret= 'I can\'t hear you!'
  }
  if(string===string.toUpperCase){
    ret= 'YES INDEED!'
  } 
  return ret
}