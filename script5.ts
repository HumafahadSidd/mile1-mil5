// Get references to the form and display area
const Form = document.getElementById("Resumeform") as HTMLFormElement | null;
const resumeShareable = document.getElementById("resume-display") as HTMLDivElement | null;
const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement | null;
const shareableLinkElement = document.getElementById("shareable-link") as HTMLAnchorElement | null;
const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement | null;

// Handle form submission
Form?.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Get form data, collect input values
    const usernameInput = document.getElementById("username") as HTMLInputElement | null;
    const nameInput = document.getElementById("name") as HTMLInputElement | null;
    const phoneInput = document.getElementById("phone") as HTMLInputElement | null;
    const emailInput = document.getElementById("email") as HTMLInputElement | null;
    const linkedInInput = document.getElementById("linkedIn") as HTMLInputElement | null;
    const websiteInput = document.getElementById("website") as HTMLInputElement | null;
    const educationInput = document.getElementById("educ") as HTMLInputElement | null;
    const experienceInput = document.getElementById("exp") as HTMLInputElement | null;
    const trainingInput = document.getElementById("train") as HTMLInputElement | null;
    const certificateInput = document.getElementById("cert") as HTMLInputElement | null;
    const awardInput = document.getElementById("award") as HTMLInputElement | null;
    const membershipInput = document.getElementById("mem") as HTMLInputElement | null;
    const skillsInput = document.getElementById("skill") as HTMLInputElement | null;

    // Validate required fields
    if (!nameInput?.value || !emailInput?.value) {
        alert("Please fill out all required fields.");
        return;
    }

    // Collect values from inputs
    const username = usernameInput?.value || '';
    const name = nameInput.value;
    const phone = phoneInput?.value || '';
    const emailAddress = emailInput.value;
    const linkedInID = linkedInInput?.value || '';
    const website = websiteInput?.value || '';
    const education = educationInput?.value || '';
    const experience = experienceInput?.value || '';
    const training = trainingInput?.value || '';
    const certificate = certificateInput?.value || '';
    const award = awardInput?.value || '';
    const membership = membershipInput?.value || '';
    const skills = skillsInput?.value || '';

    // Generate resume dynamically
    const resumeHTML = `
        <h2><b>Editable Resume</b></h2>
        <h3><b>Personal Information</b></h3>
        <p><b>Username:</b><span contenteditable="true">${username}</span></p>
        <p><b>Name:</b><span contenteditable="true">${name}</span></p>
        <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
        <p><b>Email:</b><span contenteditable="true">${emailAddress}</span></p>
        <p><b>LinkedIn ID:</b><span contenteditable="true">${linkedInID}</span></p>
        <p><b>Website:</b><span contenteditable="true">${website}</span></p>
        
        <h3><b>Educational Information</b></h3>
        <p contenteditable="true">${education}</p>

        <h3><b>Experience</b></h3>
        <p contenteditable="true">${experience}</p>

        <h3><b>Workshops/ Conferences/ Training/ Courses</b></h3>
        <p contenteditable="true">${training}</p>

        <h3><b>Certifications</b></h3>
        <p contenteditable="true">${certificate}</p>

        <h3><b>Honors and Awards</b></h3>
        <p contenteditable="true">${award}</p>

        <h3><b>Memberships</b></h3>
        <p contenteditable="true">${membership}</p>

        <h3><b>Skills</b></h3>
        <p contenteditable="true">${skills}</p>
    `;

    // Display resume in the resume display area
    if (resumeShareable) {
        resumeShareable.innerHTML = resumeHTML;
        Form.reset(); // Clear the form after submission
    }

    // Show shareable link and download options
    if (shareableLinkContainer) {
        shareableLinkContainer.style.display = "block";
    }

    // Handle download button click (you can implement PDF download functionality)
    downloadPdfButton?.addEventListener("click", () => {
        alert("Download functionality is under construction!");
    });
});
