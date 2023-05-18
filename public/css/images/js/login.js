const loginFromHandler = async function(event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-login');

    const respone = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (respone.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to login');
    }
}

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFromHandler);