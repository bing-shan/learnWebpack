require(["./requirejs/add.js", "./requirejs/minus.js"], (a, b) => {
  console.log(b(2, 3));
});
