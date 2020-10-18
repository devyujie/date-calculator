function calculator() {
  var old_y = document.getElementById("old_y").value;
  var old_m = document.getElementById("old_m").value;
  var old_d = document.getElementById("old_d").value;
  var new_y = document.getElementById("new_y").value;
  var new_m = document.getElementById("new_m").value;
  var new_d = document.getElementById("new_d").value;
  var old_date1 = old_y + "-" + old_m + "-" + old_d;
  var new_date1 = new_y + "-" + new_m + "-" + new_d;
  var info = document.getElementById("number");

  if (
    old_y == "" &&
    old_m == "" &&
    old_d == "" &&
    new_y == "" &&
    new_m == "" &&
    new_d == ""
  ) {
    alert("请输入起始时间和结束时间");
  } else {
    if (old_m > 12) {
      alert("起始月不能大于12");
    }
    if (new_m > 12) {
      alert("结束月不能大于12");
    }
    if (old_d > 31) {
      alert("起始日不能大于31");
    }
    if (new_d > 31) {
      alert("结束日不能大于31");
    }

    var old_date = new Date(old_date1);
    var new_date = new Date(new_date1);
    var difftime = (new_date - old_date) / 1000;
    var days = parseInt(difftime / 86400);
    document.getElementById("number").innerText = "相差" + days + "天";
  }
}
