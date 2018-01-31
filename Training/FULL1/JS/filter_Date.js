var date = new Date();

var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;
document.getElementById("end_date").value =today; 

var Pdate = new Date();
Pdate.setDate(Pdate.getDate() - 7);
var Pday = Pdate.getDate();
var Pmonth = Pdate.getMonth()+1;
var Pyear = Pdate.getFullYear();

if (Pmonth < 10) Pmonth = "0" + Pmonth;
if (Pday < 10) Pday = "0" + Pday;

var Ptoday = Pyear + "-" + Pmonth + "-" + Pday;
document.getElementById("str_date").value =Ptoday; 

function reset_date()
{
    location.reload();
}