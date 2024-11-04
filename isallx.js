function isAllX(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "X".toLowerCase()) {
      return true;
    } else if (string[i] === "x".toUpperCase()) {
      return true;
    } else return false;
  }
}

console.log(isAllX("XkfDfkI"));

const string = "sjfIfs";
for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
  if (string[i] === "X".toLowerCase()) {
    return true;
  } else return false;
}
