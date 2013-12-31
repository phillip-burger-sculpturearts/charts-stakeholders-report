<!-- ColumnChart generated in R 3.0.2 by googleVis 0.4.7 package -->
<!-- Mon Nov 18 15:27:28 2013 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDataeartab6 () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "2004",
757,
null,
197 
],
[
 "2005",
792,
null,
204 
],
[
 "2006",
770,
null,
220 
],
[
 "2007",
793,
null,
228 
],
[
 "2008",
760,
null,
278 
],
[
 "2009",
787,
18,
321 
],
[
 "2010",
806,
191,
423 
],
[
 "2011",
987,
159,
367 
],
[
 "2012",
999,
7,
465 
],
[
 "2013",
808,
8,
422 
] 
];
data.addColumn('string','Year');
data.addColumn('number','Federal non-ARRA');
data.addColumn('number','ARRA');
data.addColumn('number','Non federal');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawCharteartab6() {
var data = gvisDataeartab6();
var options = {};
options["allowHtml"] = true;
options["series"] = "bars";
options["width"] =    650;
options["height"] =    375;
options["font"] = "Arial";
options["fontSize"] =     12;
options["focusTarget"] = "category";
options["axisTitlesPosition"] = "out";
options["isStacked"] = true;
options["bar"] = {groupWidth:'50%'};
options["colors"] = ['#39275B', '#93B1CC', '#C79900'];
options["title"] = "Grant and Contract Awards";
options["titleTextStyle"] = {color: '#303030',  
			fontSize: 14};
options["legend"] = "right";
options["legend.textStyle"] = {color: '#262626'};
options["hAxes"] = [{
			color: '#303030'}];
options["vAxes"] = [{
			color: '#303030',
			format:'$#,###M',
			baseline:0}];


    var chart = new google.visualization.ColumnChart(
    document.getElementById('eartab6')
    );

    // custom formatter code
    var formatter = new google.visualization.NumberFormat(
      {prefix: '$', suffix: 'M', fractionDigits: 0});
    formatter.format(data, 1);
    formatter.format(data, 2);
    formatter.format(data, 3);
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
callbacks.push(drawCharteartab6);
})();
function displayCharteartab6() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayCharteartab6"></script>
 
<!-- divChart -->
  
<div id="eartab6"
  style="width: 650px; height: 375px;">
</div>
