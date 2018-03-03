
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dd_button')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

// Sends emergency groups selected to next page.
function selectedGroups() {
    var checkedboxx = "";
    var sgroups = document.getElementsByTagName('input');

    for (var i = 0; sgroups[i]; i++) {
        if (sgroups[i].checked) {
            checkedboxx += sgroups[i].value += ", ";
        }
    }
    checkedboxx = checkedboxx.slice(0, -2);

    if (checkedboxx != "") {

        //window.location.href = "next.html?" + checkedboxx;
        window.location.href = '/Home/Next?' + checkedboxx;
    }
    else {

    }

}

//Preloads all the text boxes with the information
function getGroups() {
    var today = (new Date().toString().split(' ').slice(1, 4));
    var now = new Date().toLocaleString().slice(11);
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");

    document.getElementById("emergency").value = queries;
    document.getElementById("date").value = today;
    document.getElementById("time").value = now;
}

