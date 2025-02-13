// JavaScript for dropdown functionality
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-menu').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-menu').style.display = 'none';
    });
});

// JavaScript for button click event
document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for getting started!');
    });
});

// JavaScript for login button
document.querySelector('.login').addEventListener('click', () => {
    alert('Login functionality coming soon!');
});

// JavaScript for dynamic image hover effect
document.querySelectorAll('.portfolio-samples img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease-in-out';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});