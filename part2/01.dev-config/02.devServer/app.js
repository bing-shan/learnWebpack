fetch("http://localhost:9000/api/hello")
.then(res => res.text())
.then(res => {
  console.log(res);
})
