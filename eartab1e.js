<!-- ComboChart generated in R 3.0.2 by googleVis 0.4.7 package -->
<!-- Thu Dec 05 10:57:21 2013 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDataeartab1 () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "2011",
11655,
4218,
766,
8701 
],
[
 "2012",
12912,
6121,
1301,
10574 
],
[
 "2013",
14776,
8227,
1761,
12383 
] 
];
data.addColumn('string','Year');
data.addColumn('number','<= 70% MFI');
data.addColumn('number','71-125% MFI');
data.addColumn('number','>= 125% MFI');
data.addColumn('number','Tuition and fees');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawCharteartab1() {
var data = gvisDataeartab1();
var options = {};
options["allowHtml"] = true;
options["seriesList"] = "bars";
options["series"] = [{type:'bars', targetAxisIndex:0}, 
			{type:'bars', targetAxisIndex:0},
			{type:'bars', targetAxisIndex:0},
			{type:'line', targetAxisIndex:1, lineWidth:3}];
options["width"] =    700;
options["height"] =    350;
options["font"] = "Arial";
options["colors"] = ['#39275B', '#C79900', '#63B1E5', '#D7C896'];
options["bar"] = {groupWidth:'60%'};
options["title"] = "Average Per-Student Aid to Students Demonstrating Need Based on Median Family Income (MFI)";
options["titleTextStyle"] = {color: '#303030',  
			fontSize: 14};
options["legend"] = [{position: 'top'}];
options["vAxes"] = [{title:'Aid Amount', format:'$#,###', maxValue: 16000},
			{title:'Tuition and Fees', format:'$#,###', maxValue: 16000, minValue:0}];


    var chart = new google.visualization.ComboChart(
    document.getElementById('eartab1')
    );
    // custom formatter code
    var formatter1 = new google.visualization.NumberFormat(
      {pattern: '$#,###'});
    formatter1.format(data, 1);
    formatter1.format(data, 2);
    formatter1.format(data, 3);
    formatter1.format(data, 4);
    // end custom code
    chart.draw(data,options);
    

}
  
 
// jsDisplayChart
(function() {
var pkgs = window.__gvisPackages = window.__gvisPackages || [];
var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
var chartid = "corechart";
  
// Manually see if chartid is in pkgs (not all browsers support Array.indexOf)
var i, newPackage = true;
for (i = 0; newPackage && i < pkgs.length; i++) {
if (pkgs[i] === chartid)
newPackage = false;
}
if (newPackage)
  pkgs.push(chartid);
  
// Add the drawChart function to the global list of callbacks
callbacks.push(drawCharteartab1);
})();
function displayCharteartab1() {
  var pkgs = window.__gvisPackages = window.__gvisPackages || [];
  var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
  window.clearTimeout(window.__gvisLoad);
  // The timeout is set to 100 because otherwise the container div we are
  // targeting might not be part of the document yet
  window.__gvisLoad = setTimeout(function() {
  var pkgCount = pkgs.length;
  google.load("visualization", "1", { packages:pkgs, callback: function() {
  if (pkgCount != pkgs.length) {
  // Race condition where another setTimeout call snuck in after us; if
  // that call added a package, we must not shift its callback
  return;
}
while (callbacks.length > 0)
callbacks.shift()();
} });
}, 100);
}
 
// jsFooter
</script>
 
<!-- jsChart -->  
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayCharteartab1"></script>
 
<!-- divChart -->
  
<div id="eartab1"
  style="width: 600px; height: 350px;">
</div>
