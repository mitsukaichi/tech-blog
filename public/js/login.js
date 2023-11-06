const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // reload the page to generate the content shown for the user after logging in
      document.location.replace('/');
      alert('successfully logged in!');
    } else {
      alert('Incorrect email or password. Please try again!');
    }
  }
};

document.getElementById('login-action').addEventListener('click', loginFormHandler);