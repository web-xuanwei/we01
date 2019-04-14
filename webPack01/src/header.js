var Header = function(){
    var dom = document.createElement("div");
    dom.innerHTML = "Header";
    var root = document.getElementById("root");
    root.append(dom);
}

export default Header;