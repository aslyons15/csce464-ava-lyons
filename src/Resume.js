import React from 'react';
import './CSCE464Final.css';

export default function Resume() {

  return (
    <body>
      <div class="header">
        <h1>Ava Lyons</h1>
        <h3 id="title">Software Engineer</h3>
      </div><div class="container">
        <div class="subcontainer1">
          <div class="item">
            <ul>
              <h4 class="subheader">Contact</h4>
              <h5>aslyons15@gmail.com</h5>
              <h5>630-520-8763</h5>
              <h5 id="linkedIn"><a href='https://linkedin.com/in/ava-lyons' target="_blank" rel="noreferrer">linkedin.com/in/ava-lyons</a></h5>
            </ul>
          </div>
          <div class="item">
            <ul>
              <h4 class="subheader">Education</h4>
              <h5>Univeristy of Nebraska-Lincoln</h5>
              <h5>B.S. Software Engineering</h5>
              <h5>Minor French & Math</h5>
              <h5>May 2024; Lincoln, NE</h5>
            </ul>
          </div>
          <div class="item">
            <ul>
              <h4 class="subheader">Awards</h4>
              <h5>Certificate of Excellence for
              </h5>
              <h5>Studies in French</h5>
              <h5>2021, 2022, 2023</h5>
            </ul>
          </div>
          <div class="item">
            <ul>
              <h4 class="subheader">Interests</h4>
              <h5>Animals, Plants & Gardening
              </h5>
              <h5>Learning Languages & Cultures</h5>
              <h5> Math, Reading & Finances</h5>
            </ul>
          </div>
          <div class="item">
            <ul>
              <h4 class="subheader">Involvement</h4>
              <h5>Career Guide & Teaching Assistant
              </h5>
              <h5> Engineering Student Advisory Board: VP of Finance 2021 - 2022; Career Development Chair 2021 - 2022, 2023
                - 2024</h5>
              <h5> French Table</h5>
              <h5> SheTribe: President 2022 - 2023; Social Chair 2021 - 2022</h5>
            </ul>
          </div>
        </div>
        <div class="vertical-line"/>
        <div class="subcontainer2">
          <div class="item">
            <ul>
              <h4 class="subheader">Experience</h4>
              <h5 class="title">Software Engineering Intern</h5>
              <h5 class="location">Workiva - remote</h5>
              <ul>
                <li>Worked on unforeseen issues by creating complex components, adding helper methods, or working on a
                  generated script using Dart and TypeScript in order to aid the frontend design team
                </li>
                <li>Adjusted to using financial reporting terminology in order to understand the company's goals and
                  objectives
                </li>
              </ul>
              <h5 class="title">IT Support</h5>
              <h5 class="location">University of Nebraska-Lincoln - Lincoln, NE</h5>
              <ul>
                <li>Adapted to and assisted the College of Education and Human Science's with various printer, IP, computer,
                  etc, issues that arose each day
                </li>
                <li>Organized and recorded hardware into the server's database in order to keep track of the location of
                  assets
                </li>
              </ul>
              <h5 class="title">Google Computer Science Summer Institute</h5>
              <h5 class="location">Google - Chicago, IL</h5>
              <ul>
                <li>Learned how to code in p5 JavaScript in order to create and present a small project to Google employees
                </li>
                <li>Learned about the various opportunities by participating in guest speaker sessions or signing up for
                  1-on-1s with developers
                </li>
              </ul>
              <h4 class="subheader">Skills</h4>
              <p> Python | JavaScript | TypeScript | Dart | HTML | CSS | React | Redux | C#.NET | Java | Git | C | JSON |
                SQL | Kivy | LaTex | Arduino | R | Haskell | Fortran | Prolog | Lisp | TensorFlow | Agile |
              </p>
              <h4 class="subheader">Projects</h4>
              <h5 class="title">Nebraska Environmental Trust (NET) Auditing System
              </h5>
              <ul>
                <li>Built a fullstack auditing system for an inspector, admin, and director so NET employees could outsource
                  their audits
                </li>
                <li>Built for the sponsor and as a senior design project using C#.Net with a Razor frontend
                </li>
              </ul>
              <h5 class="title">Predicting Stock Trends
              </h5>
              <ul>
                <li>Used cubic spline interpolation in order to try to predict stock trends of volatile, less volatile, and
                  safe stocks
                </li>
                <li>Coded in Python and used Yahoo Finance's API for up to date stock data
                </li>
              </ul>
              <h5 class="title">RelvoAlloy
              </h5>
              <ul>
                <li>Added reinforcement learning in Python to optimize an existing formal verification software using
                  genetic algorithms named EvoAlloy
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
};
