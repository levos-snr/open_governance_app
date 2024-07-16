# Open Governance App

### Project Problem Statement 
<hr>

In recent times, the need for transparency and accountability within the Kenyan governance system has become increasingly evident.Kenyan citizens at large face significant challenges in accessing transparent and efficient complaint resolution mechanisms. This lack of a streamlined, accountable process often results in 
unresolved complaints, mistrust in public institutions, and a general sense of frustration among the populace.

Therefore, there is a pressing need to develop a comprehensive, transparent, and user-friendly system that caters to the needs of Kenyan citizenry. This system should facilitate seamless complaint submission, tracking, and resolution, ultimately fostering a culture of accountability and trust in public institutions
<hr>

### Solution Statement:

The app will create an integrated digital platform that allows all Kenyan citizens to report and follow up on their complaints seamlessly. The platform will feature:
1. User Authentication

[X] User registration and login for online complaint submission.
[X] Mobile number verification for SMS-based reporting.
[X] User profile management.

1. Complaint Submission:
[X] Multiple submission channels: SMS, online, in-person.
[X] Unique tracking number for each complaint.
[X] Acknowledgment notification upon submission.
[X] Complaint categorization.

1. Complaint Tracking:

[X] Real-time status updates.
[X] SMS notifications for updates.
[X] Complaint resolution timeline.

4. Feedback Mechanism:

[X] User feedback on complaint resolution.
[X] User satisfaction rating.
[X] User feedback on the platform.

5. Role Management:

[X] Admin, user, and moderator roles.
[X] Admin dashboard for complaint management.
[X] Moderator dashboard for complaint resolution.

6. Data Management:

[X] Use of env variables for sensitive data.

7. Notification and Reminder:

[X] SMS notifications for complaint updates.
[X] Email notifications for complaint updates.
[X] Reminder notifications for pending complaints.

## System Architecture
<hr>

[X] HTML, CSS, JavaScript.
[X] Json - server for API( Restful API).
[X] Tailwind CSS for styling.
[X] Twilio for SMS notifications.
[X] SendGrid for email notifications.
[X] Node.js for backend.
[X] Hosted on Netlify.
[X] Postman for API testing.
[X] GitHub for version control.

## How to get started
<hr>
        - Clone the repository
        ```
        git clone https://github.com/levos-snr/open_governance_app.git
        ```
        - Install dependencies 
        ```
        npm install json-server tailwindcss
        ```
        - Run the app 
        ```
        liver-server .
        ``` 
        or 
        ```
        http-server
        ```
        - Run the API 
        ```
        json-server --watch db.json
        ```
        - Open the app on your browser 
        ```
        http://localhost:****
        ```
        - Start server 
        ```
        node backend/server.js
        ```