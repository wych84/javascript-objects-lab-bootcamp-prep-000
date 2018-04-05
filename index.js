var recipes = { eggs: "3" }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value});
}
const obj = {milk:"2 liters"}
updateObjectWithKeyAndValue(obj, 'chocolate', '1 cup')

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
} 

const obj = {milk:"2 liters"}
destructivelyUpdateObjectWithKeyAndValue(obj, 'water', '3 liters')
