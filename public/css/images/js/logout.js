const logout = async function() {
    const respone = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (respone.ok) {
        document.location.replace('/');
        alert('logged out!')
    } else {
        alert('Failed to log out');
    }
};

document.querySelector('#logout-link').addEventListener('click', logout);