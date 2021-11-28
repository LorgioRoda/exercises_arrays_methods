function equality(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let result = true;
  arr1.forEach((element, index) => {
    if (element !== arr2[index]) {
      result = false;
    }
  });
  return result;
}
