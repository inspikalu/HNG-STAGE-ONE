const slackDisplayName = document.querySelector('[data-testid="slackDisplayName"]');
const slackEmail = document.querySelector('[data-testid="slackEmail"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const slackProfilePicture = document.querySelector('[data-testid="slackProfilePicture"]');


slackDisplayName.textContent = "inspikalu";
slackEmail.textContent = "inspikalu@gmail.com";


const today = new Date();
currentDay.textContent = today.toLocaleDateString('en-US', { weekday: 'long' });
currentTimeUTC.textContent = today.toLocaleTimeString('en-US', { timeZone: 'UTC' });

