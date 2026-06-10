function loadDateDropdowns() {
    var daySelect = document.getElementById("daySelect");
    var monthSelect = document.getElementById("monthSelect");
    var yearSelect = document.getElementById("yearSelect");

    // Load Day
    for(var i=1; i<=31; i++){
        var val = i < 10 ? "0" + i : i;
        daySelect.innerHTML += "<option value='" + val + "'>" + val + "</option>";
    }

    // Load Month
    for(var i=1; i<=12; i++){
        var val = i < 10 ? "0" + i : i;
        monthSelect.innerHTML += "<option value='" + val + "'>" + val + "</option>";
    }

    // Load Year
    var currentYear = new Date().getFullYear();
    for(var i=1970; i<=currentYear; i++){
        yearSelect.innerHTML += "<option value='" + i + "'>" + i + "</option>";
    }
}

function loadInitialMembers(members, memberbody) {
    for(var i=0; i<members.length; i++){
        var member = members[i];
        
        // Tạo chuỗi HTML cho dòng (tr) và các cột (td)
        var trHTML = "<tr>" +
                        "<td>" + member.name + "</td>" +
                        "<td>" + member.email + "</td>" +
                        "<td>" + member.gender + "</td>" +
                        "<td>" + member.birthday + "</td>" +
                        "<td>" + member.hobbies + "</td>" +
                        "<td>" + member.color + "</td>" +
                     "</tr>";
                     
        // Cộng dồn chuỗi HTML vào tbody
        memberbody.innerHTML += trHTML;
    }
}

function handleRegistration() {
    var nameInput = document.getElementById("nameInput").value;
    var emailInput = document.getElementById("emailInput").value;

    // Validate Name
    if (nameInput === "") {
        alert("Name cannot be left blank.");
        return;
    }


    // Lấy thông tin Giới tính
    var genderElements = document.getElementsByName("gender");
    var genderData = "Man";
    for(var i=0; i<genderElements.length; i++){
        if(genderElements[i].checked) {
            genderData = genderElements[i].value;
        }
    }

    // Lấy thông tin Ngày sinh
    var day = document.getElementById("daySelect").value;
    var month = document.getElementById("monthSelect").value;
    var year = document.getElementById("yearSelect").value;
    var birthdayData = day + "/" + month + "/" + year;

    // Lấy thông tin Sở thích
    var hobbyElements = document.getElementsByName("hobby");
    var hobbiesArr = [];
    for(var i=0; i<hobbyElements.length; i++){
        if(hobbyElements[i].checked) {
            hobbiesArr.push(hobbyElements[i].value);
        }
    }
    var hobbiesData = hobbiesArr.join(", ");

    // Lấy thông tin Màu sắc
    var colorElements = document.getElementsByName("color");
    var colorData = "Blue";
    for(var i=0; i<colorElements.length; i++){
        if(colorElements[i].checked) {
            colorData = colorElements[i].value;
        }
    }

    // Lấy tbody của bảng kết quả
    var memberbody = document.getElementById("memberbody");

    var trHTML = "<tr>" +
                    "<td>" + nameInput + "</td>" +
                    "<td>" + emailInput + "</td>" +
                    "<td>" + genderData + "</td>" +
                    "<td>" + birthdayData + "</td>" +
                    "<td>" + hobbiesData + "</td>" +
                    "<td>" + colorData + "</td>" +
                 "</tr>";

    memberbody.innerHTML += trHTML;
}

function handleReset() {
    document.getElementById("registrationForm").reset();
    document.getElementById("nameInput").focus();
}