# Open Governance App

### Project Problem Statement 
<hr>

In recent times, the need for transparency and accountability within the Kenyan governance system has become increasingly evident.Kenyan citizens at large face significant challenges in accessing transparent and efficient complaint resolution mechanisms. This lack of a streamlined, accountable process often results in 
unresolved complaints, mistrust in public institutions, and a general sense of frustration among the populace.

Therefore, there is a pressing need to develop a comprehensive, transparent, and user-friendly system that caters to the needs of Kenyan citizenry. This system should facilitate seamless complaint submission, tracking, and resolution, ultimately fostering a culture of accountability and trust in public institutions
<hr>

### Solution Statement:

The app will create an integrated digital platform that allows all Kenyan citizens to report and follow up on their complaints seamlessly. The platform will feature:
1. User Authentication:
        [ ] - User registration and login for online complaint submission.
        [ ] - Mobile number verification for SMS-based reporting.
        [ ] - User profile management.
2. Complaint Submission:
        [ ] - Multiple submission channels: SMS, online, in-person.
        [ ] - Unique tracking number for each complaint.
        [ ] - Acknowledgment notification upon submission.
        [ ] - Complaint categorization.
3. Complaint Tracking:
        [ ] - Real-time status updates.
        [ ] - SMS notifications for updates.
        [ ] - Complaint resolution timeline.
4. Feedback Mechanism:
        [ ] - User feedback on complaint resolution.
        [ ] - User satisfaction rating.
        [ ] - User feedback on the platform.
5. Role Management:
        [ ] - Admin, user, and moderator roles.
        [ ] - Admin dashboard for complaint management.
        [ ] - Moderator dashboard for complaint resolution.
6. Data Management:
        [ ] - Use of env variables for sensitive data.
7. Notification and Reminder:
        [ ] - SMS notifications for complaint updates.
        [ ] - Email notifications for complaint updates.
        [ ] - Reminder notifications for pending complaints.

## System Architecture
<hr>
        [ ] - HTML, CSS, JavaScript.
        [ ] - Json - server for API( Restful API).
        [ ] - Tailwind CSS for styling.
        [ ] - Twilio for SMS notifications.
        [ ] - SendGrid for email notifications.
        [ ] - Node.js for backend.
        [ ] - Hosted on Netlify.
        [ ] - Postman for API testing.
        [ ] - GitHub for version control.

## How to get started
<hr>
        - Clone the repository ```git clone https://github.com/levos-snr/open_governance_app.git```
        - Install dependencies ```npm install json-server tailwindcss```
        - Run the app ```liver-server .``` or ```http-server```
        - Run the API ```json-server --watch db.json```
        - Open the app on your browser ```http://localhost:****```
        - Start server ```node backend/server.js```