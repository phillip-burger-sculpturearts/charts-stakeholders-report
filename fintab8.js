<!-- ColumnChart generated in R 3.0.2 by googleVis 0.4.7 package -->
<!-- Fri Nov 15 17:06:51 2013 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDatafintab8b () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "2009",
296,
385 
],
[
 "2010",
351,
303 
],
[
 "2011",
410,
297 
],
[
 "2012",
461,
218 
],
[
 "2013",
547,
218 
] 
];
data.addColumn('string','Year');
data.addColumn('number','Tuition revenue');
data.addColumn('number','State funds');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartfintab8b() {
var data = gvisDatafintab8b();
var options = {};
options["allowHtml"] = true;
options["series"] = "bars";
options["width"] =    500;
options["height"] =    345;
options["font"] = "Arial";
options["fontSize"] =     12;
options["focusTarget"] = "category";
options["axisTitlesPosition"] = "out";
options["isStacked"] = true;
options["bar"] = {groupWidth:'50%'};
options["colors"] = [  '#39275B', '#C79900'];
options["title"] = "State Appropriation and Tuition Revenue History";
options["titleTextStyle"] = {color: '#303030',  
			fontSize: 14};
options["legend"] = "right";
options["legend.textStyle"] = {color: '#262626'};
options["hAxes"] = [{
			color: '#303030'}];
options["vAxes"] = [{title:'Education Funding',
			color: '#303030',
			format:'$#,###M',
			baseline:0}];


    var chart = new google.visualization.ColumnChart(
    document.getElementById('fintab8b')
    );

    // custom formatter code
    var formatter = new google.visualization.NumberFormat(
      {prefix: '$', suffix: 'M', fractionDigits: 0});
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
callbacks.push(drawChartfintab8b);
})();
function displayChartfintab8b() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartfintab8b"></script>
 
<!-- divChart -->
  
<div id="fintab8b"
  style="width: 500px; height: 325px;">
</div>
