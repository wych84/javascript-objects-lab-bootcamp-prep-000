var recipes = { eggs: "3" }

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, obj, { [key]: value});
}
const recipe = {milk:"2 liters"}
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')