var ship = {
    powerOn: false
    };
var powerOn = function() {
    if (ship.powerOn === false) {
        ship.powerOn = true;
    }
}


powerOn();

function countModules(){
  return availableModules.length;
}

countModules();

function countEssential() {
    let j = 0;
    for (let i = 0; i < availableModules.length; i++) {
        if (availableModules[i].essential) {
            j++;
        }
    }
    return j;
}
countEssential();

function loadModule(index) {
    if (availableModules[index].essential !== true) {
      availableModules[index].essential = true;}
       ship.modules.push(availableModules[index]);
   
  availableModules[index].enabled = true;
}

function findModuleIndex(name){
  for (let i=0; i < availableModules.length; i++){
    if (availableModules[i].name === name){
      return i;
    }
  }
}
loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));
loadModule(findModuleIndex("navigation"));


loadModule(findModuleIndex("communication"));
function setMessage(){
  radio.message = JSON.stringify(navigation)
}
setMessage();

function activateBeacon() {
  radio.beacon = true
}
activateBeacon()

function setFrequency() {
  radio.frequency = (radio.range.low + radio.range.high) / 2
}