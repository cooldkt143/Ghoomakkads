//Linking sign in page 
function openPage(){
    window.location.href = "SignIn.html"
}

// Initialize the Google API client
function handleClientLoad() {
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',  // Replace with your Google Client ID
      });
    });
  }
  
  // On sign-in success, handle the signed-in user
  function onSignIn(googleUser) {
    // Get the user's basic profile info
    var profile = googleUser.getBasicProfile();
    var userName = profile.getName();
    var userEmail = profile.getEmail();
    
    // Optionally, you can send the user's info to your server to create a new account or log in
    console.log("Name: " + userName);
    console.log("Email: " + userEmail);
  
    // Redirect or show the user’s profile data, etc.
    window.location.href = "/home";  // Example redirect to another page after sign-in
  }
  
  // Sign out the user
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('User signed out.');
    });
  }
  