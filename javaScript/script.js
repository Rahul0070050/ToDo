var mainContent;
var container;
var textUntypeAria;
var listiItemDiv;
var itemHeadDiv;
var spanItem;
var spanDate;
var contentDiv;
var contentPTag;
var destBin;
var value;
document.getElementById("adding-text-button").addEventListener('click', function () {
    var time = new Date();
    mainContent = document.getElementById("content-writing-space").value;//geting the text from text-aria
    value = time.getTime();
    container = document.getElementById("todolist-body");
    textUntypeAria = document.getElementById("content-writing-space");
    listiItemDiv = document.createElement("div");//create 'div' tag
    itemHeadDiv = document.createElement("div");//create 'div' tag
    spanItem = document.createElement("span");//create 'span' tag
    spanDate = document.createElement("span");//create 'span' tag
    contentDiv = document.createElement("div");//create 'div' tag
    contentPTag = document.createElement("p");//create 'p' tag
    destBin = document.createElement("i");
    if (mainContent !== "") {
        listiItemDiv.setAttribute("class", "list-item");
        listiItemDiv.setAttribute("value", value);
        console.log(value);
        itemHeadDiv.setAttribute("class", "item-head");
        spanItem.setAttribute("id", "time");
        spanDate.setAttribute("id", "date");
        contentDiv.setAttribute("class", "content-div");
        destBin.setAttribute("class", "fa fa-trash");
        destBin.setAttribute("value", value);
        console.log(value);


        container.appendChild(listiItemDiv);
        listiItemDiv.appendChild(itemHeadDiv);
        itemHeadDiv.appendChild(spanItem);
        itemHeadDiv.appendChild(spanDate);
        listiItemDiv.appendChild(contentDiv);
        contentDiv.appendChild(contentPTag);
        contentDiv.appendChild(destBin);
        console.log(listiItemDiv);



        spanDate.innerHTML = time.toDateString();
        spanItem.innerHTML = time.toLocaleTimeString();
        contentPTag.innerHTML = mainContent;
        document.getElementById("content-writing-space").value = "";
        textUntypeAria.setAttribute("placeholder", "Do Something . . .");
    } else {
        textUntypeAria.setAttribute("placeholder", "Type somthing . . .");
    }
});

document.getElementById("remove-all-Items").addEventListener("click", function () {
    document.getElementById("todolist-body").innerHTML = "";
});

document.getElementById("removeItems").addEventListener("click", function () {
    if(listiItemDiv.value === destBin.value){
        console.log(value);
    }
});