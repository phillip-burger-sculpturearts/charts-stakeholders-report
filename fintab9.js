<!-- ColumnChart generated in R 3.0.2 by googleVis 0.4.7 package -->
<!-- Fri Nov 15 11:23:48 2013 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDatafintab9 () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "Global Challenge",
12136 
],
[
 "UW",
12393 
] 
];
data.addColumn('string','Group');
data.addColumn('number','Amount');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartfintab9() {
var data = gvisDatafintab9();
var options = {};
options["allowHtml"] = true;
options["series"] = "bars";
options["width"] =    395;
options["height"] =    250;
options["font"] = "Arial";
options["fontSize"] =     12;
options["axisTitlesPosition"] = "out";
options["bar"] = {groupWidth:'30%'};
options["colors"] = ['#39275B'];
options["title"] = "Comparison to Peer Tuition and Fee Rates for Fiscal Year 2013";
options["titleTextStyle"] = {color: '#303030',  
			fontSize: 14};
options["legend"] = "none";
options["hAxes"] = [{
			color: '#303030'}];
options["vAxes"] = [{
 			color: '#303030',
		baseline:0}];
options["vAxis"] = {maxValue: 13000,
			format:'$#,###',
			minValue: 0};


    var chart = new google.visualization.ColumnChart(
    document.getElementById('fintab9')
    );
    // custom formatter code
    var formatter = new google.visualization.NumberFormat(
      {prefix: '$', fractionDigits: 0});
    formatter.format(data, 1);
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
callbacks.push(drawChartfintab9);
})();
function displayChartfintab9() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartfintab9"></script>
 
<!-- divChart -->
  
<div id="fintab9"
  style="width: 395px; height: 250px;">
</div>
