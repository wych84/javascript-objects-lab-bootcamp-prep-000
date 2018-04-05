var recipes = { eggs: "3" }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value});
}
const obj = {milk:"2 liters"}
updateObjectWithKeyAndValue(obj, 'chocolate', '1 cup')

function destructivelyUpdateObjectWithKeyAndValue(joy, key, value) {
  joy[key] = value;
  return joy;
} 

const joy = {milk:"2 liters"}
destructivelyUpdateObjectWithKeyAndValue(joy, 'water', '3 liters')
