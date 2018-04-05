var recipes = { eggs: "3" }

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, obj, { [key]: value});
}
function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, obj, { [key]: value })
}
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')