// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty
const DEFAULTS = {
    "name-input": "Your name",
    "job-input": "Your job title",
    "email-input": "your@email.com",
    "bio-input": "Your bio will appear here.",
};
const name_input = document.getElementById("name-input")
const job_input = document.getElementById("job-input")
const email_input = document.getElementById("email-input")
const bio_input = document.getElementById("bio-input")

const name_card = document.getElementById("card-name")
const job_card = document.getElementById("card-job")
const email_card = document.getElementById("card-email")
const bio_card = document.getElementById("card-bio")

function updateValue(e) {
    const inputId = e.target.id;
    const trimmedValue = e.target.value.trim();

    let targetCard;
    if (inputId === "name-input") { targetCard = name_card; updateAvatar(e); }
    if (inputId === "job-input") targetCard = job_card;
    if (inputId === "email-input") targetCard = email_card;
    if (inputId === "bio-input") { targetCard = bio_card; bioCounter(e); }
    if (trimmedValue === "") {
        targetCard.textContent = DEFAULTS[inputId];
    } else {
        targetCard.textContent = trimmedValue;
    }
}

name_input.addEventListener("input", updateValue);
job_input.addEventListener("input", updateValue);
email_input.addEventListener("input", updateValue);
bio_input.addEventListener("input", updateValue);


// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)
const avatar = document.getElementById("avatar")

function updateAvatar(e) {
    const trimmedValue = e.target.value.trim();
    if (trimmedValue === "") {
        avatar.textContent = "?";
    } else {
        avatar.textContent = trimmedValue[0].toUpperCase();
    }
}

// Step 3: bio character counter + "warning" class when 10 or fewer are left
const bio_left = document.getElementById("bio-left")
const counter = document.getElementsByClassName("counter")[0];

function bioCounter(e) {
    const text = e.target.value
    const left = 80 - text.length
    bio_left.textContent = left
    counter.classList.toggle('warning', left <= 10);
}

// Step 4: accent color (card border + avatar background)
const color_select = document.getElementById("color-select")
color_select.addEventListener("change", colorChange)
const card = document.getElementById("card")

function colorChange(e) {
    const color = e.target.value

    card.style.borderColor = color
    avatar.style.backgroundColor = color
}

// Step 5: dark mode button

const theme_btn = document.getElementById("theme-btn")
theme_btn.addEventListener("click", changeMode)
const body = document.body

function changeMode(e) {
    const isChecked = e.target.checked
    body.classList.toggle('dark', isChecked);
    if (body.classList.contains('dark')) {
        theme_btn.textContent = 'Light mode';
    } else {
        theme_btn.textContent = 'Dark mode';
    }
}

// Step 6: reset button
const reset_btn = document.getElementById("reset-btn")
reset_btn.addEventListener("click", reset)
const form = document.getElementById("card-form")

function reset(e) {
    form.reset()

    name_card.textContent = DEFAULTS["name-input"];
    job_card.textContent = DEFAULTS["job-input"];
    email_card.textContent = DEFAULTS["email-input"];
    bio_card.textContent = DEFAULTS["bio-input"];

    avatar.textContent = "?";
    bio_left.textContent = "80";
    counter.classList.remove('warning');
    card.style.borderColor = "#4f46e5";
    avatar.style.backgroundColor = "#4f46e5";
}
