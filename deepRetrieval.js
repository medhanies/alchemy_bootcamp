function deepRetrieval(obj) {
  while (obj.prop) {
    obj = obj.prop;
  }
  return obj;
}
