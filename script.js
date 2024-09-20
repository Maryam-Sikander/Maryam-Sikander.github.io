const roles = ["Data Scientist", "Machine Learning Engineer", "AI Enthusiast", "Tech Aficionado"];
let roleIndex = 0; 
let charIndex = 0; 
let currentRole = '';
const roleElement = document.getElementById('role');

function type() {
    if (charIndex < roles[roleIndex].length) {
        currentRole += roles[roleIndex].charAt(charIndex);
        roleElement.textContent = currentRole;
        charIndex++;
        setTimeout(type, 150); // Adjust typing speed here
    } else {
        setTimeout(deleteText, 1000); // Wait before deleting
    }
}

function deleteText() {
    if (charIndex > 0) {
        currentRole = currentRole.slice(0, -1);
        roleElement.textContent = currentRole;
        charIndex--;
        setTimeout(deleteText, 100); // Adjust deleting speed here
    } else {
        roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
        setTimeout(type, 500); // Wait before typing the next role
    }
}

// Start the typing animation
type();