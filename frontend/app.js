document.addEventListener('DOMContentLoaded', function () {
        const countiesURL = "http://localhost:3000/county";
        const usersURL = "http://localhost:3000/users";
        const badgetsURL = "http://localhost:3000/budget";
        const expensesURL = "http://localhost:3000/expenditure";
        const projectsURL = "http://localhost:3000/projects";
        const issueURL = "http://localhost:3000/citizen_complaints"


        const select = document.getElementById('county-select');
        const signUpForm = document.getElementById('createSignUp');
        const loginForm = document.querySelector('.login form');
        const dashboard = document.getElementById('dashboard');
        const signupContainer = document.getElementById('signup');
        const loginContainer = document.getElementById('login');
        const loginUser = document.getElementById('loginUser');
        const totalBudget = document.querySelector('.budgetN');
        const totalExpenses = document.querySelector('.cardEx');
        const issueSubmitId = document.getElementById('issueSubmitId');
        const logoutId = document.getElementById('logoutId');
        const loginUserImg = document.getElementById('loginUserImg');
       



        // Get all tabs elements
        const tab1 = document.getElementById('tab1');
        const tab2 = document.getElementById('tab2');
        const tab3 = document.getElementById('tab3');
        const tab4 = document.getElementById('tab4');
        const tab5 = document.getElementById('tab5');

        // Get all tabcontent 1-5 by class
        const tabContent1 = document.getElementsByClassName('tabcontent1');
        const tabContent2 = document.getElementsByClassName('tabcontent2');
        const tabContent3 = document.getElementsByClassName('tabcontent3');
        const tabContent4 = document.getElementsByClassName('tabcontent4');
        const tabContent5 = document.getElementsByClassName('tabcontent5');

        // Hide all tab contents
        function hideAllTabs() {
                const allTabs = [tabContent1, tabContent2, tabContent3, tabContent4, tabContent5];
                allTabs.forEach(tabContent => {
                        for (let i = 0; i < tabContent.length; i++) {
                                tabContent[i].style.display = 'none';
                        }
                });
        }

        // Show the selected tab content
        function showTab(tabContent) {
                for (let i = 0; i < tabContent.length; i++) {
                        tabContent[i].style.display = 'block';
                }
        }

        // Toggle tabcontent 1-5 using tabs button onclick
        if (tab1) {
                tab1.addEventListener('click', function () {
                        
                        hideAllTabs();
                        showTab(tabContent1);
                });
        
        }        
        
        if (tab2) {
                tab2.addEventListener('click', function () {

                        hideAllTabs();
                        showTab(tabContent2);
                });
        }

        if (tab3) {
                tab3.addEventListener('click', function () {

                        hideAllTabs();
                        showTab(tabContent3);
                });
        }

        if (tab4) {
                tab4.addEventListener('click', function () {

                        hideAllTabs();
                        showTab(tabContent4);
                });
        }

        if (tab5) {
                tab5.addEventListener('click', function () {

                        hideAllTabs();
                        showTab(tabContent5);
                });
        }


        // Toggle nav
        const toggle = document.querySelector('.toggle');
        if (toggle) {
                toggle.addEventListener('click', function () {
                        const nav = document.querySelector('.nav');
                        const menu = document.querySelector('.main');
                        if (nav && menu) {
                                nav.classList.toggle('active');
                                toggle.classList.toggle('active');
                                menu.classList.toggle('active');
                        } else {
                                console.error('Navigation or menu element not found');
                        }
                });
        } else {
                console.error('Toggle element not found');
        }



        function checkAuthentication() {
                const user = localStorage.getItem('user');
                if (user) {
                        // User is logged in, show the dashboard
                        dashboard.style.display = 'block';
                        signupContainer.style.display = 'none';
                        loginContainer.style.display = 'none';
                        
                        //using id check the authenticated user
                        getUsers().then(users => {
                                users.forEach(user => {
                                        if (user.id == JSON.parse(localStorage.getItem('user')).id) {
                                                loginUserImg.src = user.image;
                                                
                                                const modal = document.getElementById("userModal");
                                                const span = document.getElementsByClassName("close")[0];
                                                
                                                loginUserImg.addEventListener('click', function () {
                                                         modal.style.display = "block";
                                                });
                                                
                                                span.addEventListener('click', function () {
                                                        modal.style.display = "none";
                                                });
                                                
                                                const modalName = document.getElementById('modalName');
                                                const modalLocation = document.getElementById('modalLocation');
                                                const modalNo = document.getElementById('modalNo');
                                                
                                                modalName.textContent = user.username;
                                                modalLocation.textContent = user.location;
                                                modalNo.textContent = user.phone;
                                        }
                                        
                                       
                                });
                                
                              
                               
                        });
                        
                      
                        
                } else {
                        // User is not logged in, show the login/signup forms
                        dashboard.style.display = 'none';
                        loginContainer.style.display = 'flex';

                        const signUpId = document.getElementById('signUpId');
                        const loginId = document.getElementById('logInId');
                        if (signUpId) {
                                signUpId.addEventListener('click', function () {
                                        signupContainer.style.display = 'flex';
                                        loginContainer.style.display = 'none';
                                });
                        } else {
                                console.error('Sign Up ID element not found');
                        }

                        if (loginId) {
                                loginId.addEventListener('click', function () {
                                        signupContainer.style.display = 'none';
                                        loginContainer.style.display = 'flex';
                                });
                        } else {
                                console.error('Login ID element not found');
                        }
                }
        }


        /* METHODS: GET, POST, PATCH, DELETE */
        
        //sigin and post method creating a user
        async function createUser(data) {
                const response = await fetch(usersURL, {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)
                });
        
                if (response.ok) {
                        return response.json();
                } else {
                        throw new Error('Failed to create user');
                }
                
        }
        
        signUpForm.addEventListener('click', async function (event) {
                event.preventDefault();
                const username = document.getElementById('username').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('tel').value;
                const password = document.getElementById('password').value;
                const location = document.getElementById('county-select').value;
                const image = 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1628580134/placeholder-image_oy9z9v.png';
                
                const data = {
                        username,
                        email,
                        phone,
                        password,
                        role: 'user',
                        location,
                        image
                        
                };
                

                try {
                        
                        const user = await createUser(data);
                        alert('User created successfully')
                        localStorage.setItem('user', JSON.stringify(user));
                        window.location.reload();
                }
                catch (error) {
                        console.error(error);
                }
                        
                        
        });
        
        


        //get all  issue
        async function getALlIssues() {
                const response = await fetch(issueURL, {
                        method: 'GET',
                        headers: {
                                'Content-Type': 'application/json',
                        }
                });

                if (response.ok) {

                        return response.json();

                } else {
                        throw new Error('Failed to fetch issues');
                }

        }


        //get all counties from the database
        async function getCounties() {
                const response = await fetch(countiesURL, {
                        method: 'GET',
                        headers: {
                                'Content-Type': 'application/json',
                        }
                });

                if (response.ok) {
                        return response.json();
                } else {
                        throw new Error('Failed to fetch counties');
                }
        }

        //get all users from the database
        async function getUsers() {
                const response = await fetch(usersURL, {
                        method: 'GET',
                        headers: {
                                'Content-Type': 'application/json',
                        }
                });

                if (response.ok) {
                        return response.json();
                } else {
                        throw new Error('Failed to fetch users');
                }
        }

        //get all budgets from the database
        async function getBudgets() {
                const response = await fetch(badgetsURL, {
                        method: 'GET',
                        headers: {
                                'Content-Type': 'application/json',
                        }
                });

                if (response.ok) {
                        return response.json();
                } else {
                        throw new Error('Failed to fetch budgets');
                }
        }

        //get all expenses from the database
        async function getExpenses() {
                const response = await fetch(expensesURL, {
                        method: 'GET',
                        headers: {
                                'Content-Type': 'application/json',
                        }
                });

                if (response.ok) {
                        return response.json();
                } else {
                        throw new Error('Failed to fetch expenses');
                }
        }

        //get all projects from the database
        async function getProjects() {
                const response = await fetch(projectsURL, {
                        method: 'GET',
                        headers: {
                                'Content-Type': 'application/json',
                        }
                });

                if (response.ok) {
                        return response.json();
                } else {
                        throw new Error('Failed to fetch projects');
                }
        }



        //get all the sum of the budgets slice with (,) for money format
        async function getSumOfBudgets() {
                const budgets = await getBudgets();
                const sum = budgets.reduce((acc, budget) => acc + budget.amount, 0);
                totalBudget.textContent = `${sum.toLocaleString()}`;


        }

        //get all the sum of the expenses slice with (,) for money format
        async function getSumOfExpenses() {
                const expenses = await getExpenses();
                const sum = expenses.reduce((acc, expense) => acc + expense.amount, 0);
                totalExpenses.textContent = `${sum.toLocaleString()}`;
        }




        //reusing getUsers() , check if the user exists ,if user exit then login else signup
        async function loginInUser(email, password) {
                const users = await getUsers();
                const user = users.find(user => user.email === email && user.password === password);
                if (user) {
                        //add session storage
                        alert('Login successful');
                        sessionStorage.setItem('user', JSON.stringify(user));
                        localStorage.setItem('user', JSON.stringify(user));
                        checkAuthentication();
                } else {
                        alert('Invalid email or password');
                }
        }

        loginUser.addEventListener('click', function (event) {
                event.preventDefault();
                const email = document.getElementById('loginemail').value;
                const password = document.getElementById('loginpassword').value;
                loginInUser(email, password);
        });
        
        
        logoutId.addEventListener('click', function () {
                localStorage.removeItem('user');
                sessionStorage.removeItem('user');
                checkAuthentication();
        });
        
        
        
        
        
        
        const issreportBtn = document.getElementById('reportIssue');
        
        
        // open form
        issreportBtn.addEventListener('click', function () {
                document.getElementById('formPrentId').style.display = 'block';
                document.getElementById('reportIddd').style.display = 'none';
                document.querySelector('.tabcontent2').style.background = 'rgba(0, 0, 0, 0.7)'; 
                document.querySelector('.tabcontent2').style.height = '90vh';

                
        });


        //submit buttton issue
        issueSubmitId.addEventListener('click',function (event) {

                event.preventDefault();
                const issue = document.getElementById('issueNameId').value;
                const type = document.getElementById('issueTypeId').value;
                const location = document.getElementById('issueddd').value;
                const status = document.getElementById('issueStatusId').value;

                const newIssue = {
                        issue,
                        type,
                        location,
                        status
                };

               
                fetch(issueURL, {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newIssue)
                        
                }).then(response => {
                        if (response.ok) {
                                alert('Issue added successfully');
                                document.getElementById('formPrentId').style.display = 'none';
                                document.getElementById('reportIddd').style.display = 'block';
                                document.querySelector('.tabcontent2').style.background = ''; 
                                document.querySelector('.tabcontent2').style.height = '';
                                renderIssues();
                        } else {
                                throw new Error('Failed to add issue');
                        }
                }
                ).catch(error => {
                        console.error(error);
                }
                );
        });
        









        //render all isses using getALlIssues()
        async function renderIssues() {
                        const isues = await getALlIssues();
                        const tabBody = document.getElementById('issuesId');

                        isues.forEach(issue => {
                                const tr = document.createElement('tr');
                                const td1 = document.createElement('td');
                                const td2 = document.createElement('td');
                                const td3 = document.createElement('td');
                                const td4 = document.createElement('td');

                                td1.textContent = issue.issue;
                                td2.textContent = issue.type;
                                td3.textContent = issue.location;
                                td4.textContent = issue.status;

                                tr.appendChild(td1);
                                tr.appendChild(td2);
                                tr.appendChild(td3);
                                tr.appendChild(td4);

                                tabBody.appendChild(tr);
                        })

                }


    //render projects name,budget,county,status
        async function renderProjects() {
                        const projects = await getProjects();
                        const tbody = document.getElementById('projectId');

                        // show only 15 projects
                        projects.slice(0, 10).forEach(project => {
                                const trp = document.createElement('tr');
                                const tdctr1 = document.createElement('td');
                                const tdctr2 = document.createElement('td');
                                const tdctr3 = document.createElement('td');
                                const tdctr4 = document.createElement('td');
                                const spanctr4 = document.createElement('span');

                                //using statu.textContent,add class status to siimilar text content

                                if (project.status === 'completed') {
                                        spanctr4.classList.add('completed');
                                } else if (project.status === 'inprogress') {
                                        spanctr4.classList.add('inprogress')
                                } else if (project.status === 'pending') {
                                        spanctr4.classList.add('pending');
                                } else {
                                        spanctr4.classList.add('cancelled');
                                }

                                spanctr4.classList.add('status');
                                spanctr4.textContent = project.status;
                                tdctr4.appendChild(spanctr4);
                                tdctr1.textContent = project.name;
                                tdctr2.textContent = project.budget;
                                tdctr3.textContent = project.county;
                                trp.appendChild(tdctr1);
                                trp.appendChild(tdctr2);
                                trp.appendChild(tdctr3);
                                trp.appendChild(tdctr4);
                                tbody.appendChild(trp);
                        });
                }

const select2 = document.getElementById('issueddd');

    //render all counties in the select dropdown
    async function renderCounties() {
                        const counties = await getCounties();
                        counties.forEach(county => {
                                const option = document.createElement('option');
                                const option2 = document.createElement('option');
                                option.value = county.name;
                                option2.value = county.name;
                                option.textContent = county.name;
                                option2.textContent = county.name;
                                select.appendChild(option);
                                select2.appendChild(option2);
                        });
                }

    //render all governor from getCounties
        async function renderGovernors() {
                        const counties = await getCounties();
                        const tbody = document.getElementById('govertb');

                        // show only twenty governors
                        counties.slice(0, 10).forEach(county => {
                                const trp = document.createElement('tr');
                                const tdctr1 = document.createElement('td');
                                const tdctr2 = document.createElement('td');
                                const divctd1 = document.createElement('div');
                                const imgcdiv = document.createElement('img');
                                const h4ctd2 = document.createElement('h4');
                                const spantd2 = document.createElement('span');


                                divctd1.classList.add('imgBx');
                                imgcdiv.src = county.governorPhoto || 'https://via.placeholder.com/150';
                                h4ctd2.textContent = county.governor;
                                spantd2.textContent = county.name;


                                divctd1.appendChild(imgcdiv);
                                tdctr1.appendChild(divctd1);

                                tdctr2.appendChild(h4ctd2);
                                tdctr2.appendChild(spantd2);

                                trp.appendChild(tdctr1);
                                trp.appendChild(tdctr2);

                                tbody.appendChild(trp);

                        });

                }
    renderIssues()
    getALlIssues()
    renderProjects()
    getProjects()
    renderGovernors()
    getSumOfExpenses()
    getSumOfBudgets()
    getUsers()
    renderCounties();
        checkAuthentication();
});
