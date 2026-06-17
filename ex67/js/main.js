function load_students(xml_text,bodystudent)
{
    var parser = new DOMParser(); 
    var xmlDoc = parser.parseFromString(xml_text,"text/xml"); 

    tag_students=xmlDoc.getElementsByTagName("student")
    for (i = 0; i < tag_students.length; i++)
    {
        value_tag_id=tag_students[i].getElementsByTagName("id")[0].childNodes[0].nodeValue
        value_tag_name=tag_students[i].getElementsByTagName("name")[0].childNodes[0].nodeValue
        value_tag_birthday=tag_students[i].getElementsByTagName("birthday")[0].childNodes[0].nodeValue
        value_tag_gender=tag_students[i].getElementsByTagName("gender")[0].childNodes[0].nodeValue
        tr=document.createElement("tr")
        td_id=document.createElement("td")
        td_id.innerHTML=value_tag_id
        td_name=document.createElement("td")
        td_name.innerHTML=value_tag_name
        td_bir=document.createElement("td")
        td_bir.innerHTML=value_tag_birthday;       
        td_gender=document.createElement("td")
        td_gender.innerHTML=value_tag_gender
        tr.appendChild(td_id)
        tr.appendChild(td_name)
        tr.appendChild(td_bir)
        tr.appendChild(td_gender)

        tr.onclick = function() {
            var info = "ID: " + value_tag_id + "\n" +
                       "Tên: " + value_tag_name + "\n" +
                       "Ngày sinh: " + value_tag_birthday + "\n" +
                       "Giới tính: " + value_tag_gender;
            alert("Chi tiết sinh viên:\n" + info);
        };

        bodystudent.appendChild(tr)
    }
}

var isAscending = true; 

function sortTableByID() {
    var table = document.getElementById("students");
    if (!table) return;
    
    var tbody = table.tBodies[0];
    // Chuyển danh sách các dòng thành mảng để xử lý
    var rows = Array.prototype.slice.call(tbody.rows); 
    
    // Thuật toán Selection Sort dùng 2 vòng lặp for lồng nhau
    for (var i = 0; i < rows.length - 1; i++) {
        for (var j = i + 1; j < rows.length; j++) {
            // Lấy giá trị ID ở cột đầu tiên (chỉ số 0) và chuyển thành số
            var valA = parseFloat(rows[i].cells[0].textContent);
            var valB = parseFloat(rows[j].cells[0].textContent);
            
            // Điều kiện hoán đổi vị trí dựa vào trạng thái click (lên hay xuống)
            var shouldSwap = isAscending ? (valA > valB) : (valA < valB);
            
            if (shouldSwap) {
                var temp = rows[i];
                rows[i] = rows[j];
                rows[j] = temp;
            }
        }
    }

    // Sau khi sắp xếp xong mảng, cập nhật lại thứ tự các dòng hiển thị trên bảng
    for (var k = 0; k < rows.length; k++) {
        tbody.appendChild(rows[k]);
    }
    isAscending = !isAscending;
}