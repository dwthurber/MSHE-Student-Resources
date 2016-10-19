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
professional_organizations:
  - name: Test
    website_link_path: www.testing.com
    functional_areas:
      - Student Affairs
---

Some of your internship sites may offer opportunities to be involved in professional organizations by becoming a member, attending a local/regional/national conference, or being a part of leadership efforts. Regardless, as a MSHE student you are eligible for student-rates for organizations' membership fees and are able to tap-into the many resources that these organizations have to offer. As well, professional organizations are a fantastic way to better-discern your career path, be up-to-date on relevant topics in the field, network with peers and senior colleagues, apply for jobs, among other benefits. Take some time to peruse the following websites to see if any pique your interest. If you have any questions about these, please contact Assistant Director, Dr. Kristin McCann.

#### Student Affairs

{% for org in page.professional_organizations %}
{% if org.functional_areas contains "Student Affairs" %}- **{{ org.name }}**  [{{ org.website_link_path }}]({{ org.website_link_path }}){% endif %}
{% endfor %}

#### Academic Affairs

{% for org in page.professional_organizations %}
{% if org.functional_areas contains "Academic Affairs" %}- **{{ org.name }}**  [{{ org.website_link_path }}]({{ org.website_link_path }}){% endif %}
{% endfor %}

#### Central Administration

{% for org in page.professional_organizations %}
{% if org.functional_areas contains "Central Administration" %}- **{{ org.name }}**  [{{ org.website_link_path }}]({{ org.website_link_path }}){% endif %}
{% endfor %}

#### Enrollment Management

{% for org in page.professional_organizations %}
{% if org.functional_areas contains "Enrollment Management" %}- **{{ org.name }}**  [{{ org.website_link_path }}]({{ org.website_link_path }}){% endif %}
{% endfor %}

#### Alumni Relations and Development

{% for org in page.professional_organizations %}
{% if org.functional_areas contains "Alumni Relations & Development" %}- **{{ org.name }}**  [{{ org.website_link_path }}]({{ org.website_link_path }}){% endif %}
{% endfor %}

#### Policy, Government, and Other Organizations

{% for org in page.professional_organizations %}
{% if org.functional_areas contains "Policy, Government, and Other Organizations" %}- **{{ org.name }}**  [{{ org.website_link_path }}]({{ org.website_link_path }}){% endif %}
{% endfor %}