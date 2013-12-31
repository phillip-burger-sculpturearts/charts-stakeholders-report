<!-- LineChart generated in R 3.0.2 by googleVis 0.4.7 package -->
<!-- Fri Nov 15 16:43:28 2013 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDatafintab3b () {
var data = new google.visualization.DataTable();
var datajson =
[
  ["2004",  0.003,  0.041],
  ["2005",  -0.001, 0.052],
  ["2006",  0.008,  0.063],
  ["2007",  0.017,  0.041],
  ["2008",  0.011,  0.028],
  ["2009",  0.011,  0.036],
  ["2010",  0.055,  0.041],
  ["2011",  0.043,  0.054],
  ["2012",  0.021,  0.059],
  ["2013",  0.037,  0.046] 
];
data.addColumn('string','Year');
data.addColumn('number','UW');
data.addColumn('number','Moody\'s public universities');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartfintab3b() {
var data = gvisDatafintab3b();
var options = {};
options["allowHtml"] = true;
options["width"] =    650;
options["height"] =    375;
options["font"] = "Arial";
options["fontSize"] =     12;
options["focusTarget"] = "category";
options["colors"] = ['#39275B', '#C79900'];
options["axisTitlesPosition"] = "out";
options["title"] = "Operating Margin Percentage";
options["titleTextStyle"] = {color: '#303030',  
			fontSize: 14};
options["legend"] = "right";
options["legend.textStyle"] = {color: '#262626'};
options["hAxes"] = [{
			color: '#303030'}];
options["vAxes"] = [{
			color: '#303030',
      format:'#%',
			baseline:0}];
options["lineWidth"] =      3;


    var chart = new google.visualization.LineChart(
    document.getElementById('fintab3b')
    );
    // custom formatter code
    var formatter = new google.visualization.NumberFormat(
      {pattern: '##.0%'});
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
callbacks.push(drawChartfintab3b);
})();
function displayChartfintab3b() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartfintab3b"></script>
 
<!-- divChart -->
  
<div id="fintab3b"
  style="width: 650px; height: 375px;">
</div>
