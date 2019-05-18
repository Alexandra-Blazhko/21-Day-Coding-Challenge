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
  for (let i = 0; i < availableModules.length; i++){
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

//  Navigation

function initialize() {
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0; 
}

function calibrateX() {
  let signal = 0;
  for (let i = 0; i < 12; i++) {
    signal = checkSignal();
    if (signal !== undefined) {
      navigation.x = signal;
      break;
    }
  }
}
// calibrateX();

function calibrateY() {
  let signal = 0;
  for (let i = 0; i < 60; i++) {
    signal = checkSignal();
    if (signal !== undefined) {
      navigation.y = signal;
      break;
    }
  }
}
// calibrateY();

function calibrateZ() {
  let signal = 0;
  for (let i = 0; i < 60; i++) {
    signal = checkSignal();
    if (signal !== undefined) {
      navigation.z = signal;
      break;
    }
  }
}
//calibrateZ();

function calibrate() {
  calibrateX();
  calibrateY();
  calibrateZ();
}

function setSpeed(speed) {
  let i = parseInt(speed);
  if (i >= 0) {
    navigation.speed = i
  }
}

function activateAntenna() {
  ship.antenna.active = true;
}
activateAntenna()

function sendBroadcast() {
  for (let i = 0; i < 100; i++) {
    broadcast();
  }
}
sendBroadcast()