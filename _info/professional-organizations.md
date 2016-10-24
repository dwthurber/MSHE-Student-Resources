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
  - name: HBCU Faculty Development Network
    website_link_path: 'http://www.hbcufdn.org/'
    functional_areas:
      - 'Policy, Government, and Other Organizations'
  - name: University Council for Education Administration
    website_link_path: 'http://www.ucea.org'
    functional_areas:
      - 'Policy, Government, and Other Organizations'
  - name: National Association for Colleges and University Business Officers (NACUBO)
    website_link_path: 'http://www.nacubo.org/'
    functional_areas:
      - 'Policy, Government, and Other Organizations'
  - name: 'Association of American Colleges and Universities (AAC&U)'
    website_link_path: 'http://www.aacu.org/'
    functional_areas:
      - 'Policy, Government, and Other Organizations'
  - name: Council for Advancement and Support of Education (CASE)
    website_link_path: 'http://www.case.org/'
    functional_areas:
      - 'Policy, Government, and Other Organizations'
  - name: Consortium on Financing Higher Education (COFHE)
    website_link_path: 'http://web.mit.edu/cofhe/'
    functional_areas:
      - 'Policy, Government, and Other Organizations'
  - name: National Association of Independent Colleges and Universities (NAICU)
    website_link_path: 'http://www.naicu.edu/'
    functional_areas:
      - 'Policy, Government, and Other Organizations'
  - name: Association of Governing Boards (AGB)
    website_link_path: 'http://agb.org/'
    functional_areas:
      - 'Policy, Government, and Other Organizations'
  - name: The Global Community for Academic Advising (NACADA)
    website_link_path: 'http://www.nacada.ksu.edu/'
    functional_areas:
      - Student Affairs
  - name: American Educational Research Association (AERA)
    website_link_path: 'http://www.aera.net/'
    functional_areas:
      - Student Affairs
  - name: EDUCAUSE
    website_link_path: 'http://www.educause.edu/'
    functional_areas:
      - 'Policy, Government, and Other Organizations'
  - name: Carnegie Foundation for the Advancement of Teaching
    website_link_path: 'http://www.carnegiefoundation.org/'
    functional_areas:
      - 'Policy, Government, and Other Organizations'
  - name: ACPA (College Student Educators International)
    website_link_path: 'http://www.myacpa.org/'
    functional_areas:
      - Student Affairs
  - name: Commision for Academic Support in Higher Education (CASHE)
    website_link_path: 'http://www.myacpa.org/commashe'
    functional_areas:
      - Academic Affairs
  - name: 'NASPA: Student Affairs Administrators in Higher Education (NASPA)'
    website_link_path:
    functional_areas:
      - Student Affairs
  - name: The National Center for Public Policy and Higher Education
    website_link_path: 'http://highereducation.org/'
    functional_areas:
      - 'Policy, Government, and Other Organizations'
  - name: ACE The American Council on Education
    website_link_path: 'http://www.acenet.edu/Pages/default.aspx'
    functional_areas:
      - 'Policy, Government, and Other Organizations'
  - name: National Association for Graduate Enrollment Management (NAGAP)
    website_link_path: 'http://www.nagap.org/about-nagap'
    functional_areas:
      - Enrollment Management
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