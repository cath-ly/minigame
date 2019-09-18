var pathOne = function()
{
    var node =
        document.createElement("h2");
        node.innerHTML = "Minecraft";
        node.setAttribute("onclick","pathTwo()");
    var body =
        document.querySelector("body");
        body.appendChild(node);

    document.querySelector("#button1")
        .setAttribute("onclick", "pathThree()");
}

var pathTwo = function(){
    var node =
        document.createElement("h2");
        node.innerHTML = "ForkKnife";
    var body =
        document.querySelector("body");
        body.appendChild(node);
}

var pathThree = function(){
    var node =
        document.createElement("h2");
        node.innerHTML = "CREEPER";
    var body =
        document.querySelector("body");
        body.appendChild(node);
}
