function shout(string){
  return string.toUpperCase()
}
shout('hello');

function logShout(string){
  return console.log(string.toUpperCase())
}
logShout('hello')

function whisper(string){
  return string.toLowerCase()
}
whisper('HELLO')
function logWhisper(string){
  return string.toLowerCase()
}
logWhisper('HELLO')
function sayHiToGrandma(string){
  if(string === string.toLowerCase()) return "I can't hear you!";
}
