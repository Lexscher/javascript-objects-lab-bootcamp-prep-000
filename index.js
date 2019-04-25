var recipes = {};

function updateObjectWithKeyAndValue(obj, key, val) {
  var newObject = Object.assign(obj, {[key]: val});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj.key = val;
  return obj;
}

function updateObjectWithKeyAndValue(object, key, value) {
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}

function deleteFromObjectByKey(obj, key) {
  var newObject
}

function destructivelyDeleteFromObjectByKey(obj, key) {
    delete obj[key];
    return obj;
}