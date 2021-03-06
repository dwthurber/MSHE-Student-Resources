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

Some of your internship sites may offer opportunities to be involved in professional organizations by becoming a member, attending a local/regional/national conference, or being a part of leadership efforts. Regardless, as a MSHE student you are eligible for student-rates for organizations' membership fees and are able to tap-into the many resources that these organizations have to offer. As well, professional organizations are a fantastic way to better-discern your career path, be up-to-date on relevant topics in the field, network with peers and senior colleagues, apply for jobs, among other benefits. Take some time to peruse the following websites to see if any pique your interest.

<table width="100%" class="mp-table">

    <tr style="background-color:#555;color:#fff;">
        <td>Professional Organization</td>
        <td>Website</td>
        <td width="100px" style="text-align:right;">Focus Areas</td>
    </tr>
    {% for org in site.data.professional_organizations %}
    <tr>
        <td>{{ org.name }}</td>
        <td class="subtitle"><a href="{{ org.link_path }}" target="_blank">{{ org.link_path }}</a></td>
        <td class="category">{{ org.functional_areas | join:'; ' }}</td>
    </tr>
    {% endfor %}
</table>
