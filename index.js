var recipes = {};

function updateObjectWithKeyAndValue(obj, key, val) {
  var newObject = Object.assign(obj, {[key]: val});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj.key = val;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
    delete obj[key];
    return obj;
}