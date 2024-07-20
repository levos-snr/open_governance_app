<h1 align="center">Welcome to Transparency and Accountability System for Kenya 👋</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/98350de7-82b4-4f26-991b-2ac857c37202/deploy-status)](https://app.netlify.com/sites/open-governance-app/deploys)

<p>
  <a href="#README.md" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#LISENCE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/levos_snr" target="_blank">
    <img alt="Twitter: levos_snr" src="https://img.shields.io/twitter/follow/levos_snr.svg?style=social" />
  </a>
</p>


### Project Problem Statement

<hr>

In Kenya, transparency and accountability in county governance are often challenged by limited public access to budgetary, expenditure, and project data. Citizens lack a centralized platform to view, report, and track the allocation and utilization of county resources. This results in reduced public trust and challenges in holding county officials accountable for public funds and projects.

<hr>

### Solution Statement:

To address these challenges, we have developed a web-based application that allows users to sign up, log in, and access a dashboard displaying comprehensive data on county budgets, expenditures, and projects. The application also provides a platform for citizens to report issues and complaints regarding county governance. Key functionalities include user authentication, dynamic tab navigation, and real-time data retrieval from a backend server:

1. User Authentication
   - [X] User registration and login for online complaint submission.
   - [ ] Mobile number verification for SMS-based reporting.
   - [X] User profile management.
   - [x] User sessions are maintained using local storage.

2. Data Visualization
        - [X] Display of county budget, expenditure, and project data.
        - [X] Dynamic tab navigation for data display.
        - [x] Data visualization using charts and graphs.
        - [ ] Data filtering and search functionality.
        
3. Dashboard
        - [X] User dashboard displaying county data.
        - [ ] Admin dashboard for complaint management.
        - [ ] Moderator dashboard for complaint resolution.
        - [X] Data visualization on the dashboard.
        - [x] Complaint submission form on the dashboard.
        - [ ] Complaint tracking on the dashboard.

4. Complaint Submission:
   - [X] Online complaint submission form & Users can report issues and complaints.
   - [ ] Multiple submission channels: SMS, online, in-person.
   - [X] Acknowledgment notification upon submission.
   - [ ] Complaint categorization.

5. Complaint Tracking:
   - [ ] Real-time status updates.
   - [ ] SMS notifications for updates.
   - [ ] Complaint resolution timeline.

6. Feedback Mechanism:
   - [ ] User feedback on complaint resolution.
   - [ ] User satisfaction rating.
   - [ ] User feedback on the platform.

7. Role Management:
   - [X] Admin, user, and moderator roles.
   - [ ] Admin dashboard for complaint management.
   - [ ] Moderator dashboard for complaint resolution.

8. Data Management:
   - [ ] Use of env variables for sensitive data.

7. Notification and Reminder:
   - [ ] SMS notifications for complaint updates.
   - [ ] Email notifications for complaint updates.
   - [ ] Reminder notifications for pending complaints.

## System Architecture

<hr>

The system architecture includes the following technologies:

- [X] HTML, CSS, JavaScript.
- [X] Json-server for API (Restful API).
- [ ] Tailwind CSS for styling.
- [ ] Twilio for SMS notifications.
- [ ] SendGrid for email notifications.
- [X] Node.js for backend.
- [X] Hosted on Netlify.
- [X] Postman for API testing.
- [X] GitHub for version control.

## How to get started

<hr>

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/levos-snr/open_governance_app.git
   ```

2. Install dependencies:
   ```
   npm install json-server tailwindcss
   ```

3. Run the app:
   ```
   liver-server .
   ```
   or
   ```
   http-server
   ```

4. Run the API:
   ```
   json-server --watch db.json
   ```

5. Open the app on your browser:
   ```
   http://localhost:****
   ```

6. Start the server:
   ```
   node backend/server.js
   ```
   
7. Open the API on your browser:
   ```
        http://localhost:****
        ```

## Key Features Implemented: 
- Dynamic Tab Navigation: Allows users to switch between different data views such as budgets, expenditures, projects, and user settings.
- User Authentication: Ensures secure login and session management.
- Backend Integration: Fetches and displays real-time data from the backend.
- Issue Reporting: Provides a platform for users to report governance issues.
- User Profile Management: Users can view and edit their profiles.

## Next Steps:

- Enhance UI/UX: Improve the design and user experience of the application.
- Expand Data Integration: Include more detailed data on county projects and expenditures.
- Real-time Updates: Implement WebSocket or similar technologies for real-time data updates.
- Data Analytics: Add data visualization and analytics features to provide insights into county governance.

## Author

👤 **Lewis Odero**

* Website: https://bio.link/levos_snr
* Twitter: [@levos\_snr](https://twitter.com/levos\_snr)
* Github: [@levos-snr](https://github.com/levos-snr)
* LinkedIn: [@lewis-odero-developer](https://linkedin.com/in/lewis-odero-developer)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/levos-snr/open_governance_app.git/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2024 [Lewis Odero](https://github.com/levos-snr).<br />
This project is [MIT](#LISENCE) licensed.


