<h1>Google Charts for Stakeholders Report</h1>

<p>This text accompanies the charts for the fiscal year 2013, University of Washington stakeholders report. The intended audience for this README file is the business group that owns the data and is responsible for preparing the report, the web programmer who is responsible for preparing and pushing updates to the report, and to the programmer responible for FY2014 and later charts.</p>

<h2>Intended use</h2>

<p>The files are intended for use in an iframe tag that references the relative directory that the files are stored in. This use provides lower turn around time for edits and updates that need to be performed to the charts. A corrected file with the same file name can be moved into the folder and displayed on the next page refresh.</p>

<p>To ensure that returning customers are able to view the chart, the customer should do a hard refresh that bypasses their local cache. On Windows, a hard refresh of a web page is done via the key sequence CTRL-SHIFT and R. </p>

<h2>File naming convention</h2>

<p>The files are named for the tab, or business domain, that they refer to, abbreviated to three characters. The next three characters indicate that it&#39;s for a table, or chart, on the stakeholders report. The numerical sequence is the third component of the file names and ranges from 1 to 99. This number indicates the sequence of the chart within the tab as published on the Web page. But, it's arbitrary and is used to establish a convention. If the sequence of the charts on the web page changes, it is not necessary to change the file names to match the re-ordering that occurred. </p>


<p>For example, fintab8.html indicates that it&#39;s the eight chart in the financial tab and that it&#39;s variation be of the eighth chart. The tabs are identified as follows:</p>

<p><strong>fin</strong> - financial<br/>
<strong>ear</strong> - education and research<br/>
<strong>com</strong> - community  </p>

<p>Special note: Github.com does not allow the push of .html files. This is to prevent attacks and is a feature of Github.com. The files in the repository containing the charts are saved with the .js JavaScript suffix for this reason. To display the files in the iframe, or to test them by opening them with your browser, use the .html suffix. The suffix only needs to be changed to .js prior to performing the <code>git add</code>, <code>git commit</code>, and <code>git push</code> process to update the repository. In the future, if this project expands, the use of github.io can be considered as github.io allows the push of .html files. The need to rename the files is not too limiting since all testing can be complete, and the charts accepted for publication, prior committing to the repo. Listed next is an examle of a Linux command to rename all the files in the current directory with the <code>.html</code> suffix to the <code>.js</code> suffix:</p>

<pre><code>rename .html .js *</code></pre>

<p>There are several different ways to accomplish this same task.</p>

<h2>Future stakeholder reports</h2>

<p>The data and code used to produce the charts is freely available on Github.com under the user <code>sculpturearts</code> at this Github.com URL: <code>https://github.com/sculpturearts/charts-stakeholders-report.git</code></p>

<p>Write to the repository maintainer listed at the end of this README file with questions regarding how to fork and commit changes to the repository.</p>

<h2>Installing git on your local machine</h2>
<p>There are many good tutorials on how to install the <code>git</code> application on your local machine. Start here to download and install: http://git-scm.com/downloads</p>

<p>Once installed, change your directory to home directory, then enter this command from the command line: <code>git clone https://github.com/sculpturearts/charts-stakeholders-report.git</code></p>

<p>All the files from the repository will now be loaded onto your local host in a new sub directory that has the same name as the repository. </p>

<h2>Workflow</h2>
<p>This section outlines two example workflows. The first is how to update an existing with new year's data. The second is about how to create a chart that does not already exist in the repository</p>

You are going to need an editor. A freely available editor is Sublime Text 2. 

<h3>Update existing chart</h3>
<ol><li>In the editor, open the file</li>
<li>Find the <code>var datajson =</code> text</li>
<li>Remove the beginning year's information if you do not want to keep it</li>
<li>At the end of the <code>var datajson =</code>, add the new year's information</li>
<li>Save the file</li>
<li>Open the .html file with your browser, or refresh the browser tab if the file is already open</li>
<li>Evaluate and iterate as necessary until file chart is in final form</li>
</ol>

<h3>Create a new chart</h3>
The difference between these two workflows is the use of the R programming language and the R <code>gVis</code> package to quickly iterate and explore for the best solutions. Creating a chart from scratch in the editor from JavaScript is not difficult and is the alternative to follow if R is unfamiliar. These steps presume that R is loaded on your local host, that the <code>gVis</code> package is loaded, and that you have familiarty with the R environment. 
<ol><li>Start RStudio and open the <code>stakeholder-report-charts.Rmd</code> file</li>
<li>Decide what kind of chart you want, line, column, bar, etc.</li>
<li>Copy an existing code block if a chart of the type you want already exists in the code block</li>
<li>Remove the first year's data if not needed</li>
<li>Add the new year's data</li>
<li>Execute the code chunk</li>
<li>Open the .html file with your browser, or refresh the browser tab if file is already open</li>
<li>Save the file</li>
<li>Open the file with your browser, or refresh the browser tab if the file is already open</li>
<li>Evaluate and iterate as necessary until file chart is in final form</li>
<li>Save the <code>stakeholder-report-charts.Rmd</code> file</li>
</ol>

<p>When done with the work, save the file, and complete the <code>git add</code>, <code>git commit</code> commands from within the subdirectory containing the files from the respository. Log in to Github and notifty the maintainer of the repo that you are ready for your code to be pushed.</p>

<h2>Technical support of the charts</h2>

<p>If updates or corrections to the charts are needed, contact technical support:  </p>

<p>Phillip Burger<br/>
Sr. Systems and Data Analyst<br/>
F2 DATAGroup, Data visualization and Analysis<br/>
<a href="http://f2.washington.edu/treasury/datagroup">http://f2.washington.edu/treasury/datagroup</a><br/>
<a href="mailto:pburger@uw.edu">pburger@uw.edu</a><br/>
(206) 221-7239  </p>
