<!-- LineChart generated in R 3.0.1 by googleVis 0.4.5 package -->
<!-- Wed Nov 06 16:28:31 2013 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDatafintab7 () {
var data = new google.visualization.DataTable();
var datajson =
[
["2004", 0.23,  0.23, 0.21, 0.07, 0.07, 0.06, 0.05, 0.04, 0.02, 0.01, 0.01],
["2005", 0.23,  0.24, 0.21, 0.07, 0.07, 0.05, 0.05, 0.04, 0.02, 0.01, 0.01],
["2006", 0.23,  0.25, 0.21, 0.07, 0.07, 0.05, 0.04, 0.04, 0.02, 0.01, 0.01],
["2007", 0.22,  0.26, 0.19, 0.07, 0.06, 0.06, 0.05, 0.05, 0.02, 0.01, 0.01],
["2008", 0.23,  0.25, 0.19, 0.08, 0.06, 0.05, 0.05, 0.05, 0.02, 0.01, 0.01],
["2009", 0.23,  0.26, 0.19, 0.08, 0.06, 0.05, 0.05, 0.04, 0.02, 0.01, 0.01],
["2010", 0.22,  0.26, 0.20, 0.07, 0.07, 0.04, 0.05, 0.04, 0.03, 0.01, 0.01],
["2011", 0.29,  0.22, 0.18, 0.06, 0.06, 0.04, 0.05, 0.05, 0.03, 0.01, 0.01],
["2012", 0.37,  0.20, 0.17, 0.05, 0.05, 0.04, 0.04, 0.04, 0.02, 0.01, 0.01],
["2013", 0.36,  0.20, 0.16, 0.05, 0.06, 0.04, 0.04, 0.04, 0.03, 0.01, 0.01] 
];
data.addColumn('string','Year');
data.addColumn('number','Medical');
data.addColumn('number','Instruction');
data.addColumn('number','Research');
data.addColumn('number','Academic');
data.addColumn('number','Depreciation');
data.addColumn('number','Plant');
data.addColumn('number','Auxiliary');
data.addColumn('number','Institutional');
data.addColumn('number','Scholarships');
data.addColumn('number','Public');
data.addColumn('number','Student services');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartfintab7() {
var data = gvisDatafintab7();
var options = {};
options["allowHtml"] = true;
options["width"] =    780;
options["height"] =  520;
options["font"] = "Arial";
options["fontSize"] =     12;
//options["axisTitlesPosition"] = "out";
options["focusTarget"] = "category";
options["colors"] = [ '#165788', '#5B8F22', '#B7B7B7',
                      '#EBB700', 
                      '#DBCEAC', 
                      '#EDE8C4', 
                      '#898F48', '#C79900', '#93B1CC', '#165788', '#39275B'];
options["title"] = "Operating Expenses by Classificaiton";
options["titleTextStyle"] = {color: '#303030',  
			fontSize: 14};
options["legend"] = "right";
options["legend.textStyle"] = {color: '#262626'};
options["hAxes"] = [{
			color: '#303030'}];
options["vAxes"] = [{
			color: '#303030',
			format:'##%',
			baseline:0}];
options["lineWidth"] =      3;


    var chart = new google.visualization.LineChart(
    document.getElementById('fintab7')
    );
    // custom formatter code
    var formatter = new google.visualization.NumberFormat(
      {pattern: '##.0%'});
    formatter.format(data, 1);
    formatter.format(data, 2);
    formatter.format(data, 3);
    formatter.format(data, 4);
    formatter.format(data, 5);
    formatter.format(data, 6);
    formatter.format(data, 7);
    formatter.format(data, 8);
    formatter.format(data, 9);
    formatter.format(data, 10);
    formatter.format(data, 11);
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
callbacks.push(drawChartfintab7);
})();
function displayChartfintab7() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartfintab7"></script>
 
<!-- divChart -->
  
<div id="fintab7"
  style="width: 700px; height: 432.6px;">
</div>
