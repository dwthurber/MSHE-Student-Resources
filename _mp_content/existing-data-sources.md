---
title: Existing Data Sources
header: false
mp_guide: true
no-js: false
---

<p>The following table represents publically-available data sets which you may be able to use for your Master's Project. Some of these are national data sets and some are specific to Northwestern.</p>

<br>
<div class="content">
<i class="fa fa-search input-filter-icon"></i>
<input type="text" class="input-filter" id="input-filter" ng-model="inputFilter" ng-change="inputChange()" placeholder="Start typing to filter...">
<br>
<br>
<div>

<article id="Electives">
    <table width="100%" class="sorter-table">
        <tr>
            <td width="20px"></td>
            <td>Details</td>
            <td width="150px">Source</td>
            <td width="200px">Focus Areas</td>
        </tr>
    </table>
    {% for item in site.data.existing_data_sources %} 
       <div class="mix" data-name="{{ item.display_name }}" data-source="{{ item.source }}" data-department="{{ elective.Course_Dept }}">
    <table width="100%" class="mp-table" >
       
        <tr>
            <td width="20px" class="year">{{ elective.Course_Number }}</td>
            <td class="mp-title"><strong>{{ item.display_name }}</strong></td>
            <td width="150px" class="category" style="text-align:left;">{{ item.source }}</td>
            <td rowspan="2" width="220px" class="category" style="text-align:left;">{{ item.focus_areas }}</td>
        </tr>
        <tr>
            <td></td>
            <td class="details">
                <p>{{ item.description }}</p>
            </td>
            <td></td>
        </tr>
        <tr ng-show="show == 'true'">
            <td colspan="4"><p></p></td>
        </tr>
    </table>
    </div> {% endfor %}
</article>