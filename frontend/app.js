document.addEventListener('DOMContentLoaded', function () {
    const countiesURL = "http://localhost:3000/county";
    const usersURL = "http://localhost:3000/users";
    const badgetsURL = "http://localhost:3000/budget";
    const expensesURL = "http://localhost:3000/expenditure";
    const select = document.getElementById('county-select');
    const signUpForm = document.getElementById('createSignUp');
    const loginForm = document.querySelector('.login form');
    const dashboard = document.getElementById('dashboard');
    const signupContainer = document.getElementById('signup');
    const loginContainer = document.getElementById('login');
    const loginUser = document.getElementById('loginUser');
    const totalBudget = document.querySelector('.budgetN');
    const totalExpenses = document.querySelector('.cardEx');

    

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
        
       
        
        
        

    
    //get all the sum of the budgets slice with (,) for money format
        async function getSumOfBudgets() {
                const budgets = await getBudgets();
                const sum = budgets.reduce((acc, budget) => acc + budget.amount, 0);
                totalBudget.textContent =`${sum.toLocaleString()}`;
               
                 
        }
        
        //get all the sum of the expenses slice with (,) for money format
        async function getSumOfExpenses() {
                const expenses = await getExpenses();
                const sum = expenses.reduce((acc, expense) => acc + expense.amount, 0);
                totalExpenses.textContent =`${sum.toLocaleString()}`;
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
        

        
  
        
    
    
    
    
    
    
 
    //render all counties in the select dropdown
    async function renderCounties() {
        const counties = await getCounties();
        counties.forEach(county => {
            const option = document.createElement('option');
            option.value = county.id;
            option.textContent = county.name;
            select.appendChild(option);
        });
    }
    
    
    getSumOfExpenses()
    getSumOfBudgets()         
    getUsers()       
    renderCounties();
    checkAuthentication();
});
