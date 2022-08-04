// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme


function toggleTheme() {
   if (localStorage.getItem('theme') === 'dark-theme'){
       setTheme('light-theme');
   } else {
       setTheme('dark-theme');
       document.getElementById("switch-input").click();


   }
}


// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'dark-theme') {
       setTheme('dark-theme');
       document.getElementById("switch-input").checked = false;
   } else {
       setTheme('light-theme');
       document.getElementById("switch-input").checked = true;

   }
})();