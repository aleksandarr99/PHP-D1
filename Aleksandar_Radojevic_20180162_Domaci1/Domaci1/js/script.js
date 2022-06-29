function validateForm() {
  var naslov = document.forms["unosOglasa"]["naslov"].value;
  var cena = document.forms["unosOglasa"]["opis"].value;
  var opis = document.forms["unosOglasa"]["cena"].value;
  var pregledi = document.forms["unosOglasa"]["pregledi"].value;
  if (naslov == "" || cena == "" || opis == "" || pregledi == "") {
    alert("Polja ne smeju biti prazna! ");
    return false;
  }
}

function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("tabelaOglasi");
  switching = true;

  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function showHintAjax(str) {
  console.log(str);

  if (str.length == 0) {
    document.getElementById("txtHintt").innerHTML = "";
    return;
  } else {
    req = $.ajax({
      url: `gethint.php?q=${str}`,
      type: "get",
    });

    req.done(function (res, textStatus, jqXHR) {
      console.log("idemo");
      console.log(res);
      document.getElementById("txtHintt").innerHTML = res.replace(",", "<br>");
    });

    req.fail(function (jqXHR, textStatus, errorThrown) {
      console.error("Sledeca greska se desila> " + textStatus, errorThrown);
    });
  }
}

$(document).ready(function () {
  const userId = window.location.search.split("=")[1];

  req = $.ajax({
    url: `getuser.php?q=${userId}`,
    type: "get",
  });

  req.done(function (res, textStatus, jqXHR) {
    console.log("idemo");
    console.log(res);
    document.getElementById("txtHint").innerHTML = res;
  });

  req.fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Sledeca greska se desila> " + textStatus, errorThrown);
  });
});
