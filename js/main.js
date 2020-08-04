function openTab1(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabWindow1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink1");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" module_tab_active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " module_tab_active";
}

function openTab2(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabWindow2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink2");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" module_tab_active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " module_tab_active";
}

function openTab3(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabWindow3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink3");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" module_tab_active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " module_tab_active";
}

function openTab4(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabWindow4");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink4");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" module_tab_active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " module_tab_active";
}
