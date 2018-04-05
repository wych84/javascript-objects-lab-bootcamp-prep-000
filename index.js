var recipes = { eggs: "3" }

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, obj, { [key]: value});
}
const obj = {milk:"2 liters"}
updateObjectWithKeyAndValue(obj, 'chocolate', '1 cup')