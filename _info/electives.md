---
title: Suggested Electives
description: Many electives are offered by other programs and schools within SESP and Northwetern. This page includes a list of suggested electives by the MSHE program because of their relatedness in subject matter and preferences of our students. Many of these have been take by MSHE students in the past and have their feedback included below. 
topics: 
  - academics
actions:
  - register for courses
  - choose an elective
statuses:
  - current students
keywords:
  - Registering for elective courses outside MSHE
  - School of professional Studies (SPS)
  - MS in Learning and Organizational Change (MSLOC)
  - Learning Sciences (LRN_SCI)
  - MS in Education (MS_Ed)
  - Human Development and Social Policy (HDSP)
  - Counseling Courses
  - Kellogg MBA
  - The Graduate School (TGS)
  - Medill courses
  - Authorization for Dual Registration Form
comments: true
section: registration
---
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
            <td class="sort tip" data-tip="Sort by Number" ng-click="sort('number')" width="100px">Course # <i ng-if="sortOrder == 'number' || sortOrder == 'year'" class="fa fa-caret-down" ng-class="{flip:reverse}" aria-hidden="true"></i></td>
            <td class="sort tip" data-tip="Sort By Title" ng-click="sort('name')">Course Title <i ng-if="sortOrder == 'name'" class="fa fa-caret-down" ng-class="{flip:reverse}" aria-hidden="true"></i></td>
            <td width="150px" class="sort tip" data-tip="Sort by Department" ng-click="sort('department')">Course Department <i ng-if="sortOrder == 'department'" class="fa fa-caret-down" ng-class="{flip:reverse}" aria-hidden="true"></i></td>
        </tr>
    </table>
    {% for elective in site.data.electives %} 
       <div class="mix" data-name="{{ elective.Course_Title }}" data-number="{{ elective.Course_Number }}" data-department="{{ elective.Course_Dept }}">
    <table width="100%" class="mp-table" >
       
        <tr>
            <td width="100px" class="year">{{ elective.Course_Number }}</td>
            <td class="mp-title"><strong>{{ elective.Course_Title }}</strong></td>
            <td width="100px" class="category">{{ elective.Course_Dept }}</td>
        </tr>
        <tr>
            <td></td>
            <td colspan="2" class="details">
                <p class="subheader"><em>Typically Offered: </em>{% if elective.Typically_offered contains 'fall' %}<span class="quarter-pill">Fall</span> {% endif %}{% if elective.Typically_offered contains 'winter' %}<span class="quarter-pill">Winter</span> {% endif %}{% if elective.Typically_offered contains 'spring' %}<span class="quarter-pill">Spring</span> {% endif %}{% if elective.Typically_offered contains 'Summer' %}<span class="quarter-pill">Summer</span> {% endif %}</p>
                <p>{{ elective.Course_Description }}</p>
            </td>
        </tr>
        <tr ng-show="show == 'true'">
            <td colspan="4"><p></p></td>
        </tr>
    </table>
    </div> {% endfor %}
</article>