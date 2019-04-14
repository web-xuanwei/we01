var Content = function(){
    var dom = document.createElement("div");
    dom.innerHTML = "Content";
    var root = document.getElementById("root");
    root.append(dom);
}

export default Content;