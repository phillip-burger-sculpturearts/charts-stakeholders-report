<!-- LineChart generated in R 3.0.2 by googleVis 0.4.7 package -->
<!-- Fri Nov 15 16:47:27 2013 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDatafintab4b () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "2004",
2841 
],
[
 "2005",
3069 
],
[
 "2006",
3308 
],
[
 "2007",
3714 
],
[
 "2008",
3489 
],
[
 "2009",
3099 
],
[
 "2010",
3975 
],
[
 "2011",
4643 
],
[
 "2012",
4751 
],
[
 "2013",
5434 
] 
];
data.addColumn('string','Year');
data.addColumn('number','Revenue');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartfintab4b() {
var data = gvisDatafintab4b();
var options = {};
options["allowHtml"] = true;
options["width"] =    650;
options["height"] =    375;
options["font"] = "Arial";
options["fontSize"] =     12;
options["axisTitlesPosition"] = "out";
options["colors"] =['#39275B'];
options["title"] = "Revenue From All Sources";
options["titleTextStyle"] = {color: '#303030',  
			fontSize: 14};
options["legend"] = "none";
options["legend.textStyle"] = {color: '#262626'};
options["hAxes"] = [{
			color: '#303030'}];
options["vAxes"] = [{
			color: '#303030',
			format:'$#,###M',
			baseline:0}];
options["lineWidth"] =      3;


    var chart = new google.visualization.LineChart(
    document.getElementById('fintab4b')
    );
    var formatter = new google.visualization.NumberFormat(
      {prefix: '$', suffix: 'M', fractionDigits: 0});
    formatter.format(data, 1);
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
callbacks.push(drawChartfintab4b);
})();
function displayChartfintab4b() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartfintab4b"></script>
 
<!-- divChart -->
  
<div id="fintab4b"
  style="width: 650px; height: 375px;">
</div>
