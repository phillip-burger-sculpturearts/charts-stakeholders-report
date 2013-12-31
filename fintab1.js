<!-- LineChart generated in R 3.0.2 by googleVis 0.4.7 package -->
<!-- Fri Nov 15 16:41:26 2013 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDatafintab1a () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "2004",
7.8,
9.1 
],
[
 "2005",
7.8,
9.1 
],
[
 "2006",
8.3,
10.7 
],
[
 "2007",
9.5,
12.1 
],
[
 "2008",
8.9,
7.6 
],
[
 "2009",
6.8,
7.4 
],
[
 "2010",
7.9,
9.8 
],
[
 "2011",
8.5,
9.5 
],
[
 "2012",
8.5,
12.1 
],
[
 "2013",
9.4,
11.4 
] 
];
data.addColumn('string','Year');
data.addColumn('number','UW');
data.addColumn('number','Moody\'s public universities');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartfintab1a() {
var data = gvisDatafintab1a();
var options = {};
options["allowHtml"] = true;
options["width"] =    650;
options["height"] =    375;
options["font"] = "Arial";
options["fontSize"] =     12;
options["focusTarget"] = "category";
options["colors"] = ['#39275B', '#C79900'];
options["title"] = "Expendable Financial Resources to Operations Ratio: Months of Coverage";
options["titleTextStyle"] = {color: '#303030',  
			fontSize: 14};
options["legend"] = "right";
options["legend.textStyle"] = {color: '#262626'};
options["hAxes"] = [{
			color: '#303030'}];
options["vAxes"] = [{title:'Months',
			color: '#303030',
			format:'#',
			baseline:0}];
options["vAxis"] = [{}];
options["lineWidth"] =      3;


    var chart = new google.visualization.LineChart(
    document.getElementById('fintab1a')
    );
    // custom formatter code
    var formatter = new google.visualization.NumberFormat(
      {suffix: ' months', fractionDigits: 1});
    formatter.format(data, 1);
    formatter.format(data, 2);
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
callbacks.push(drawChartfintab1a);
})();
function displayChartfintab1a() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartfintab1a"></script>
 
<!-- divChart -->
  
<div id="fintab1a"
  style="width: 650px; height: 375px;">
</div>
