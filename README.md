# User Story
AS A manager <br />
I WANT to generate a webpage that displays my team's basic info <br />
SO THAT I have quick access to their emails and GitHub profiles <br />

# Acceptance Criteria
GIVEN a command-line application that accepts user input <br />
WHEN I am prompted for my team members and their information <br />
THEN an HTML file is generated that displays a nicely formatted team roster based on user input <br />
WHEN I click on an email address in the HTML <br />
THEN my default email program opens and populates the TO field of the email with the address <br />
WHEN I click on the GitHub username <br />
THEN that GitHub profile opens in a new tab <br />
WHEN I start the application <br />
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number <br />
WHEN I enter the team manager’s name, employee ID, email address, and office number <br />
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team <br />
WHEN I select the engineer option <br />
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu <br />
WHEN I select the intern option <br />
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu <br />
WHEN I decide to finish building my team <br />
THEN I exit the application, and the HTML is generated

# Description
This is a node.js command-line application that prompts a user for input regarding a hypothetical engineering team. It will generate a dynamic HTML page based on user input regarding team members and their roles and various information. 
# Installation
To run this application, you must install inquirer (8.2.4), node, path, and fs. 
# Usage
When you run node index.js in your VS code, you will be prompted with a series of questions in your command line. You will have the opportunity to assign a manager along with any engineers or interns. When you finish assigning team members, a dynamic HTML page will be generated with the team information.

To view a demonstration of using the app, see [video](Team_Builder_Walkthrough.webm)
# Tests
There are tests included in the files. Each class (Employee, Manager, Engineer and Intern) have specific tests for their functionality.
# License
N/A
# Contact
Contact me with any questions via [email](mailto:cmizelle10@gmail.com) or [GitHub](https://github.com/cmizelle10)

