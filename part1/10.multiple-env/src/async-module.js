function getComponent(){
  return import("lodash")
  .then(({default:_}) => {
    const ele = document.createElement("div");
    ele.innerHTML = _.join(["Hello","webpack",""]," ");
    return ele;
  })
}

getComponent().then((ele) => {
  document.body.appendChild(ele);
})