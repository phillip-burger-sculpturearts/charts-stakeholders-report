<!-- LineChart generated in R 3.0.2 by googleVis 0.4.7 package -->
<!-- Fri Nov 15 16:50:54 2013 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDatafintab6 () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "2004",
2573 
],
[
 "2005",
2747 
],
[
 "2006",
2895 
],
[
 "2007",
3071 
],
[
 "2008",
3284 
],
[
 "2009",
3429 
],
[
 "2010",
3493 
],
[
 "2011",
4056 
],
[
 "2012",
4660 
],
[
 "2013",
4907 
] 
];
data.addColumn('string','Year');
data.addColumn('number','Expenses');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartfintab6() {
var data = gvisDatafintab6();
var options = {};
options["allowHtml"] = true;
options["width"] =    650;
options["height"] =    375;
options["font"] = "Arial";
options["fontSize"] =     12;
options["colors"] = ['#39275B'];
options["title"] = "Total Operating Expenses";
options["titleTextStyle"] = {color: '#303030',  
			fontSize: 14};
options["legend"] = "none";
options["legend.textStyle"] = {color: '#262626'};
options["hAxes"] = [{
			color: '#303030'}];
options["vAxes"] = [{title: 'Operating Expenses',
			color: '#303030',
 			format:'$#,###M',
			baseline:0}];
options["lineWidth"] =      3;


    var chart = new google.visualization.LineChart(
    document.getElementById('fintab6')
    );

    // custom formatter code
    var formatter = new google.visualization.NumberFormat(
      {prefix: '$', suffix: 'M', fractionDigits: 0});
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
callbacks.push(drawChartfintab6);
})();
function displayChartfintab6() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartfintab6"></script>
 
<!-- divChart -->
  
<div id="fintab6"
  style="width: 650px; height: 375px;">
</div>
