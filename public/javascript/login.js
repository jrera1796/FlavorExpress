const loginHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const pw = document.querySelector('#password-login').value.trim();
    if (email && pw) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, pw }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log('Login failed')
      }
    }
  };
  
  const signupHandler = async (event) => {
    event.preventDefault();
    const user = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const pw = document.querySelector('#password-signup').value.trim();
    if (user && email && pw) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user, email, pw }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log('Sing up failed')
      }
    }
  };
  
  document
    .getElementById('login-form')
    .addEventListener('click', loginHandler);
  
  document
    .getElementById('signup-form')
    .addEventListener('click', signupHandler);
  