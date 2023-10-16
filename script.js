function saveData() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create an object to hold the user data
  const userData = {
    username: username,
    email: email,
    password: password
  };

  // Convert the data to a JSON string
  const jsonData = JSON.stringify(userData);

  // Store the data in local storage
  localStorage.setItem('userData', jsonData);

  alert('Data saved to local storage.');
}