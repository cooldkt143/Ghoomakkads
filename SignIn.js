// Linking with Sign Up Page 
function openSignUp(){
  window.location.href = "SignUp.html"
}

// Initialize Google Identity Services
function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential); // Decode JWT token to get user information
  console.log("User data:", data);

  // For demonstration, alert the user's name
  alert(`Hello, ${data.name}!`);

  // Further logic like token storage or redirection
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: CLIENT_ID, // Your Google OAuth client ID
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(
    document.getElementById("google-signin-button"),
    { theme: "outline",
      size: "large", 
      padding: "12px"
    } // Customization options
  );

  // Optionally, automatically prompt the user
  google.accounts.id.prompt();
};

// Function to decode JWT (optional, for viewing user info)
function jwt_decode(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
  return JSON.parse(jsonPayload);
}