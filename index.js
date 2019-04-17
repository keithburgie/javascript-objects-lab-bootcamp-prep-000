var recipes = {
  apples: 12
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

