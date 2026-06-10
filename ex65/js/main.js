function getList() {
    return document.getElementById("webNodeList");
}

function addNode() {
    var content = document.getElementById("addContent").value.trim();
    var posValue = document.getElementById("addPosition").value.trim();
    var ul = getList();

    if (!content) {
        alert("Please enter Content.");
        return;
    }

    var newLi = document.createElement("li");
    newLi.innerHTML = content;

    var listItems = ul.getElementsByTagName("li");
    var pos = parseInt(posValue, 10);

    if (pos > 0 && pos <= listItems.length) {
        ul.insertBefore(newLi, listItems[pos - 1]);
    } else if (posValue && !isNaN(pos) && pos <= 0) {
        alert("Invalid Position.");
        return;
    } else {
        ul.appendChild(newLi);
    }

    document.getElementById("addContent").value = "";
    document.getElementById("addPosition").value = "";
}

function removeNode() {
    var posValue = document.getElementById("removePosition").value.trim();
    var ul = getList();
    var listItems = ul.getElementsByTagName("li");
    var pos = parseInt(posValue, 10);

    if (!posValue || isNaN(pos) || pos <= 0 || pos > listItems.length) {
        alert("Please enter a valid Position to remove.");
        return;
    }

    ul.removeChild(listItems[pos - 1]);
    document.getElementById("removePosition").value = "";
}

function modifyNode() {
    var newContent = document.getElementById("modifyContent").value.trim();
    var posValue = document.getElementById("modifyPosition").value.trim();
    var ul = getList();
    var listItems = ul.getElementsByTagName("li");
    var pos = parseInt(posValue, 10);

    if (!newContent) {
        alert("Please enter New Content.");
        return;
    }

    if (!posValue || isNaN(pos) || pos <= 0 || pos > listItems.length) {
        alert("Please enter a valid Position to modify.");
        return;
    }

    var newLi = document.createElement("li");
    newLi.innerHTML = newContent;
    ul.replaceChild(newLi, listItems[pos - 1]);

    document.getElementById("modifyContent").value = "";
    document.getElementById("modifyPosition").value = "";
}
