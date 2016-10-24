---
title: Professional Organizations
description: There are a variety of higher education professional organizations with which you should familiarize yourself and in which you should consider more substantial involvement.
topics:
  - career resources
actions:
  - attend a conference
statuses:
  - newly admitted students
  - current students
  - certificate students
keywords:
  - professional development
comments: true
section: career
---

Some of your internship sites may offer opportunities to be involved in professional organizations by becoming a member, attending a local/regional/national conference, or being a part of leadership efforts. Regardless, as a MSHE student you are eligible for student-rates for organizations' membership fees and are able to tap-into the many resources that these organizations have to offer. As well, professional organizations are a fantastic way to better-discern your career path, be up-to-date on relevant topics in the field, network with peers and senior colleagues, apply for jobs, among other benefits. Take some time to peruse the following websites to see if any pique your interest. If you have any questions about these, please contact Assistant Director, Dr. Kristin McCann.


       
<table width="100%" class="mp-table">
   
    <tr style="background-color:#cdcdcd;" valign="bottom">
        <td><strong>Professional Organization</strong></td>
        <td><strong>Website</strong></td>
        <td><strong>Focus Areas</strong></td>
    </tr>
    {% for org in site.data.professional_organizations %} 
    <tr>
        <td>{{ org.name }}</td>
        <td class="subtitle">{{ org.link_path }}</td>
        <td class="category">{{ org.functional_areas | join:', ' }}</td>
    </tr>
    {% endfor %}
</table>
