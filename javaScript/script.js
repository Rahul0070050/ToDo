var mainContent;
var container;
var textUntypeAria;
var listiItemDiv;
var itemHeadDiv;
var spanItem;
var spanDate;
var contentDiv;
var contentPTag;
var checkbox;
var delIds = [];
var checked;
var remvalue = 0;

document.getElementById("adding-text-button").addEventListener('click', function () {
    var time = new Date();
    mainContent = document.getElementById("content-writing-space").value;//geting the text from text-aria
    container = document.getElementById("todolist-body");
    textUntypeAria = document.getElementById("content-writing-space");

    listiItemDiv = document.createElement("div");//create 'div' tag
    itemHeadDiv = document.createElement("div");//create 'div' tag
    spanItem = document.createElement("span");//create 'span' tag
    spanDate = document.createElement("span");//create 'span' tag
    contentDiv = document.createElement("div");//create 'div' tag
    checkbox = document.createElement("input")
    contentPTag = document.createElement("p");//create 'p' tag


    if (mainContent !== "") {
        listiItemDiv.setAttribute("class", "list-item");
        remvalue += 1
        listiItemDiv.setAttribute("id", remvalue);
        itemHeadDiv.setAttribute("class", "item-head");
        spanItem.setAttribute("id", "time");
        spanDate.setAttribute("id", "date");
        contentDiv.setAttribute("class", "content-div");
        checkbox.setAttribute("type", "checkBox");
        checkbox.setAttribute("class", "checkbox del");
        checkbox.setAttribute("id", remvalue);

        container.appendChild(listiItemDiv);
        listiItemDiv.appendChild(itemHeadDiv);
        itemHeadDiv.appendChild(spanItem);
        itemHeadDiv.appendChild(spanDate);
        listiItemDiv.appendChild(contentDiv);
        contentDiv.appendChild(contentPTag);
        contentDiv.appendChild(checkbox);


        spanDate.innerHTML = time.toDateString();
        spanItem.innerHTML = time.toLocaleTimeString();
        contentPTag.innerHTML = mainContent;
        document.getElementById("content-writing-space").value = "";
        textUntypeAria.setAttribute("placeholder", "Do Something . . .");
        delIds.push(remvalue);



        document.getElementById("remove-Items").addEventListener("click", function () {
            let dell = document.querySelectorAll(".del");
            dell.forEach((dell) => {
                if (dell.checked) {
                    checked = dell.id;
                    document.getElementById(checked).remove();
                }
            })
        })
    } else {
        textUntypeAria.setAttribute("placeholder", "Type somthing . . .");
    }
});

document.getElementById("remove-all-Items").addEventListener("click", function () {
    document.getElementById("todolist-body").innerHTML = "";
});

