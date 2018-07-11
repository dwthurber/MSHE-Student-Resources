---
title: Existing Data Sources
header: false
mp_guide: true
no-js: false
data_sources:
-
    display_name: Northwestern Admitted Student Survey
    link_path: 
    source: The Graduate School @ Northwestern
    focus_areas: academic quality, financial support, student life, recruiting methods
    contact_person: Bill Artz
    contact_person_email: w-artz@northwestern.edu
    description: For 32 facutors in enfrollment decisions, respondents rank importance and compare to other schools.
-
    display_name: Northwestern Exit survey
    link_path: 
    source: The Graduate School @ Northwestern
    focus_areas: academic quality, professional development, social climate, intellectual climate, support, career aspirations, student life, advisors
    contact_person: Bill Artz
    contact_person_email: w-artz@northwestern.edu
    description: Respondents are asked questions on a number of different areas of their experiences during their graduate education at Northwestern University
-
    display_name: Northwestern Graduate Leadership Advisory Council (GLAC)
    link_path: 
    source: The Graduate School @ Northwestern
    focus_areas: financial support, family situations, demographics, transportation, student life, career aspirations, housing, academic life
    contact_person: Bill Artz
    contact_person_email: w-artz@northwestern.edu
    description: 'Survey of current PhD and Master''s students. Survey is conduced annually, though some questions are put forward on alternate years. Respondents are asked questions on a number of different areas of their experiences during their graduate education at Northwestern. Permission to use this information must be secured from the GLAC.'
-
    display_name: The Almanac of Higher Education (The Chronicle)
    link_path: http://chronicle.com/specialreport/The-Almanac-of-Higher/51
    source: The Chronicle of Higher Education
    focus_areas: 
    contact_person: 
    contact_person_email: 
    description: Annual Almanac of Higher Education brings context to data with detailed tables and analysis on faculty, students, finance, and all 50 states
-
    display_name: The National Postsecondary Student Aid Study (NPSAS)
    link_path: http://nces.ed.gov/surveys/npsas
    source: National Center for Education Statistics (NCES)
    focus_areas: financial support, family situations, work experiences, professional expectations
    contact_person: 
    contact_person_email: 
    description: Surveys every four years. Student-level records on financial aids from federal governments, the states, institutions, and private agencies
-
    display_name: The Beginning Postsecondary Students Longitudinal Study (BPS)
    link_path: http://nces.ed.gov/surveys/bps
    source: National Center for Education Statistics (NCES)
    focus_areas: enrollment, persistence, academic experiences, financial support
    contact_person: 
    contact_person_email: 
    description: Sample drawn from NPSAS. Longitudinal study of same cohort of students who are followed at the 3rd and 6th years.
-
    display_name: The Baccalaureate and Beyond Longitudinal Study (B&B)
    link_path: http://nces.ed.gov/surveys/b&b
    source: National Center for Education Statistics (NCES)
    focus_areas: work experience, professional expectations, graduate education, debt repayment
    contact_person: 
    contact_person_email: 
    description: Sample drawn from NPSAS. Same cohort of students for up to 10 years after degree completion
-
    display_name: National Study of Postsecondary Faculty (NSOPF)
    link_path: http://nces.ed.gov/surveys/nsopf
    source: National Center for Education Statistics (NCES)
    focus_areas: professional development, work experiences, faculty
    contact_person: 
    contact_person_email: 
    description: Nationally respresentative of faculty and instructional staff
-
    display_name: Cooperative Institutional Research Program (CIRP) Freshman Survey
    link_path: 
    source: Higher Education Research Institute (HERI)
    focus_areas: parental income, secondary school achievement, professional expectations, demographics, financial support, values, attitutdes, beliefs, self-concepts
    contact_person: Amit Prachand
    contact_person_email: a-prachand@northwestern.edu
    description: Administered to Northwestern incoming freshmen annually from 1971-2011, odd years beginning in 2011 (conducting COFHE New Student Survey in even-years)
-
    display_name: COFHE Survey of New Students (SNS)
    link_path: 
    source: COFHE
    focus_areas: choosing college, college expectations, professional expectations, demographics, secondary school achievements, financial support, academic preparation
    contact_person: Amit Prachand
    contact_person_email: a-prachand@northwestern.edu
    description: Initially administered in 2012 and conducted in 2014 and 2015. Alternative to CIRP designed to better match up with other COFHE surveys. 
-
    display_name: COFHE Enrolled Student Survey (ESS)
    link_path: 
    source: COFHE
    focus_areas: skill development, engagement, satisfaction, paying for college, advising and support, health and well-being, academic life
    contact_person: Amit Prachand
    contact_person_email: a-prachand@northwestern.edu
    description: Condcuted Spring of odd years. Some overlap in content with NSSE but focused on our peer group. 
-
    display_name: COFHE Graduating Senior Survey
    link_path: 
    source: COFHE
    focus_areas: skill development, engagement, career and advising services, paying for college, experience in major, future plans, professional expextations, satisfaction
    contact_person: Amit Prachand
    contact_person_email: a-prachand@northwestern.edu
    description: Conducted Spring of even years. Evaluation of undergraduate experience, future plans, financing education, activities. 
-
    display_name: COFHE Parent Survey
    link_path: 
    source: COFHE
    focus_areas: paying for college, involvement with college life, demographics, satisfaction, choosing college
    contact_person: Amit Prachand
    contact_person_email: a-prachand@northwestern.edu
    description: Conducted spring of every fourth year. Survey parents of enrolled undergraduates
-
    display_name: COFHE Alumni Survey
    link_path: 
    source: COFHE
    focus_areas: community and family, alumni engagement, demographics, professional expectations, jobs and careers, satisfaction
    contact_person: Amit Prachand
    contact_person_email: a-prachand@northwestern.edu
    description: Conducted every four years. Undergraduate alumni. 
-
    display_name: Integrated Postsecondary Education Data (IPEDS)
    link_path: http://nces.ed.gov/ipeds/
    source: National Center for Education Statistics (NCES)
    focus_areas: admissions, test scores, enrollment, completion, persistence, graduation rates, financial aid, faculty
    contact_person: Amit Prachand
    contact_person_email: a-prachand@northwestern.edu
    description: Publically available institutional data
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
            <td width="100px">Source</td>
        </tr>
    </table>
    {% for item in page.data_sources %} 
       <div class="mix" data-name="{{ item.display_name }}" data-source="{{ item.source }}" data-department="{{ elective.Course_Dept }}">
    <table width="100%" class="mp-table" >
       
        <tr>
            <td rowspan="2" width="20px" class="year">{% if item.link_path == nil %} {% else %}<a class="tip" href="{{ item.link_path }}" target="_blank" data-tip="Go to Data Source"><i class="fa fa-external-link-square" aria-hidden="true"></i></a>{% endif %}{% if item.contact_person == nil %}{% else %}<a class="tip" href="mailto:{{ item.contact_person_email }}" target="_blank" data-tip="Contact {{ item.contact_person }}"><i class="fa fa-envelope" aria-hidden="true"></i></a> {% endif %}</td>
            <td class="mp-title"><strong>{{ item.display_name }}</strong></td>
            <td rowspan="2" width="200px" class="category">{{ item.source }}</td>
        </tr>
        <tr>
            
            <td class="details">
                <p class="subheader"><em>Focus Areas: </em>{{ item.focus_areas }}</p>
                <p>{{ item.description }}</p>
            </td>
            
        </tr>
        <tr ng-show="show == 'true'">
            <td colspan="4"><p></p></td>
        </tr>
    </table>
    </div> {% endfor %}
</article>