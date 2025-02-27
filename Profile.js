// Function to change between tabs (Posts, Reels, Saved)
function changeTab(tabName) {
    // Get all the tab-content divs and remove the active class
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
  
    // Add the active class to the selected tab content
    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
  
    // Change the tab style
    const tabsList = document.querySelectorAll('.profile-tabs li');
    tabsList.forEach(tab => {
      tab.classList.remove('active');
    });
  
    // Set the clicked tab as active
    const activeTabElement = document.querySelector(`.profile-tabs li[data-tab="${tabName}"]`);
    activeTabElement.classList.add('active');
}

// Function to open the modal with the clicked image
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

  // Function to toggle between light and dark modes
function toggleTheme() {
    const body = document.body;
    const profileHeader = document.querySelector('.profile-header');
    const profileInfo = document.querySelector('.profile-info');
    const tabs = document.querySelectorAll('.profile-tabs li');
    const posts = document.querySelectorAll('.post');
    const editProfileBtn = document.querySelector('.edit-profile-btn');
  
    // Toggle dark-mode class
    body.classList.toggle('dark-mode');
    profileHeader.classList.toggle('dark-mode');
    profileInfo.classList.toggle('dark-mode');
    tabs.forEach(tab => tab.classList.toggle('dark-mode'));
    posts.forEach(post => post.classList.toggle('dark-mode'));
    editProfileBtn.classList.toggle('dark-mode');
  
    // Change button text based on mode
    const themeButton = document.querySelector('.theme-toggle button');
    if (body.classList.contains('dark-mode')) {
      themeButton.textContent = '🌞'; // Light mode icon
    } else {
      themeButton.textContent = '🌙'; // Dark mode icon
    }
  }