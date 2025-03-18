// Data for the counters (these can be fetched from a database or API in a real application)
let counters = {
    users: 300,          // Number of users
    subscribers: 50,     // Number of subscribers
    events: 20,          // Number of successful events
    awards: 15            // Number of awards
};

// Function to update the counters on the page
function updateCounters() {
    // Get the elements for the counters
    let usersCount = document.getElementById('users-count');
    let subscribersCount = document.getElementById('subscribers-count');
    let eventsCount = document.getElementById('events-count');
    let awardsCount = document.getElementById('awards-count');
    
    // Animate the counters (incrementing from 0 to the target value)
    animateCounter(usersCount, counters.users);
    animateCounter(subscribersCount, counters.subscribers);
    animateCounter(eventsCount, counters.events);
    animateCounter(awardsCount, counters.awards);
}

// Function to animate each counter
function animateCounter(element, target) {
    let current = 0;
    let increment = Math.ceil(target / 100); // Increment value to update the counter smoothly
    let interval = setInterval(() => {
        if (current < target) {
            current += increment;
            element.innerHTML = current + "+"; // Append '+' symbol
        } else {
            element.innerHTML = target + "+"; // Ensure it doesn't exceed the target
            clearInterval(interval); // Stop the interval once the target is reached
        }
    }, 20); // Interval time (adjust this for speed)
}

// Function to handle intersection observer for triggering the animation
function onScrollToStatistics() {
    const statisticsSection = document.querySelector('.statistics');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounters(); // Start the counter animation
                observer.disconnect(); // Stop observing after the animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the statistics section is visible

    observer.observe(statisticsSection);
}

// Run the function when the page loads
window.onload = onScrollToStatistics;
// Select the Home button
const homeButton = document.querySelector('.home-button');

// Add event listener for the click event
homeButton.addEventListener('click', function () {
    for (let i = 0; i < 5; i++) {
        // Create a sparkle element
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkles');
        homeButton.appendChild(sparkle);

        // Generate random positions for the sparkle
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 - 50;

        // Animate and remove the sparkle
        setTimeout(() => {
            sparkle.style.top = `50%`;
            sparkle.style.left = `50%`;
            sparkle.style.transform = `translate(-50%, -50%) scale(0)`;

            setTimeout(() => {
                sparkle.style.top = `${50 + randomY}%`;
                sparkle.style.left = `${50 + randomX}%`;

                setTimeout(() => {
                    sparkle.remove();
                }, 800); // Matches animation duration
            }, 0);
        }, 0);
    }
});
