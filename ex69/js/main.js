var allEmployees = [];

function loadEmployees() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "dataset/data.xml", true);
    xhr.onload = function() {
        if (xhr.status !== 200) {
            console.error("Không tải được XML:", xhr.status);
            return;
        }

        var xmlDoc = xhr.responseXML;
        if (!xmlDoc) {
            alert("Lỗi: Không thể parse file XML. Vui lòng kiểm tra cú pháp XML.");
            return;
        }

        var employees = xmlDoc.getElementsByTagName("employee");
        allEmployees = [];
        var titles = [];

        for (var i = 0; i < employees.length; i++) {
            var employee = employees[i];
            var title = employee.getAttribute("title");
            var id = employee.getAttribute("id");
            var name = employee.getElementsByTagName("name")[0].textContent;
            var phone = employee.getElementsByTagName("phone")[0].textContent;

            allEmployees.push({
                id: id,
                title: title,
                name: name,
                phone: phone
            });

            if (titles.indexOf(title) === -1) {
                titles.push(title);
            }
        }

        populateTitleDropdown(titles);
        clearEmployeeTable();
    };
    xhr.onerror = function() {
        console.error("Lỗi kết nối khi tải XML");
    };
    xhr.send();
}

function populateTitleDropdown(titles) {
    var dropdown = document.getElementById("titleDropdown");
    if (!dropdown) return;

    dropdown.innerHTML = '<option value="">-- Choose a title --</option>';
    for (var i = 0; i < titles.length; i++) {
        var option = document.createElement("option");
        option.value = titles[i];
        option.textContent = titles[i];
        dropdown.appendChild(option);
    }
}

function showEmployeesByTitle(title) {
    var tbody = document.getElementById("employeeBody");
    if (!tbody) return;

    tbody.innerHTML = "";
    if (!title) return;

    for (var i = 0; i < allEmployees.length; i++) {
        if (allEmployees[i].title === title) {
            var tr = document.createElement("tr");
            tr.innerHTML = '<td>' + allEmployees[i].id + '</td>' +
                           '<td>' + allEmployees[i].name + '</td>' +
                           '<td>' + allEmployees[i].phone + '</td>' +
                           '<td>' + allEmployees[i].title + '</td>';
            tbody.appendChild(tr);
        }
    }
}

function clearEmployeeTable() {
    var tbody = document.getElementById("employeeBody");
    if (tbody) {
        tbody.innerHTML = "";
    }
}

