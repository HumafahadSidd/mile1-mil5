// Get references to the form and display area
var Form = document.getElementById("Resumeform");
var resumeShareable = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
// Handle form submission
Form === null || Form === void 0 ? void 0 : Form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    // Get form data, collect input values
    var usernameInput = document.getElementById("username");
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var emailInput = document.getElementById("email");
    var linkedInInput = document.getElementById("linkedIn");
    var websiteInput = document.getElementById("website");
    var educationInput = document.getElementById("educ");
    var experienceInput = document.getElementById("exp");
    var trainingInput = document.getElementById("train");
    var certificateInput = document.getElementById("cert");
    var awardInput = document.getElementById("award");
    var membershipInput = document.getElementById("mem");
    var skillsInput = document.getElementById("skill");
    // Validate required fields
    if (!(nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) || !(emailInput === null || emailInput === void 0 ? void 0 : emailInput.value)) {
        alert("Please fill out all required fields.");
        return;
    }
    // Collect values from inputs
    var username = (usernameInput === null || usernameInput === void 0 ? void 0 : usernameInput.value) || '';
    var name = nameInput.value;
    var phone = (phoneInput === null || phoneInput === void 0 ? void 0 : phoneInput.value) || '';
    var emailAddress = emailInput.value;
    var linkedInID = (linkedInInput === null || linkedInInput === void 0 ? void 0 : linkedInInput.value) || '';
    var website = (websiteInput === null || websiteInput === void 0 ? void 0 : websiteInput.value) || '';
    var education = (educationInput === null || educationInput === void 0 ? void 0 : educationInput.value) || '';
    var experience = (experienceInput === null || experienceInput === void 0 ? void 0 : experienceInput.value) || '';
    var training = (trainingInput === null || trainingInput === void 0 ? void 0 : trainingInput.value) || '';
    var certificate = (certificateInput === null || certificateInput === void 0 ? void 0 : certificateInput.value) || '';
    var award = (awardInput === null || awardInput === void 0 ? void 0 : awardInput.value) || '';
    var membership = (membershipInput === null || membershipInput === void 0 ? void 0 : membershipInput.value) || '';
    var skills = (skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value) || '';
    // Generate resume dynamically
    var resumeHTML = "\n        <h2><b>Editable Resume</b></h2>\n        <h3><b>Personal Information</b></h3>\n        <p><b>Username:</b><span contenteditable=\"true\">".concat(username, "</span></p>\n        <p><b>Name:</b><span contenteditable=\"true\">").concat(name, "</span></p>\n        <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\">").concat(emailAddress, "</span></p>\n        <p><b>LinkedIn ID:</b><span contenteditable=\"true\">").concat(linkedInID, "</span></p>\n        <p><b>Website:</b><span contenteditable=\"true\">").concat(website, "</span></p>\n        \n        <h3><b>Educational Information</b></h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3><b>Experience</b></h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3><b>Workshops/ Conferences/ Training/ Courses</b></h3>\n        <p contenteditable=\"true\">").concat(training, "</p>\n\n        <h3><b>Certifications</b></h3>\n        <p contenteditable=\"true\">").concat(certificate, "</p>\n\n        <h3><b>Honors and Awards</b></h3>\n        <p contenteditable=\"true\">").concat(award, "</p>\n\n        <h3><b>Memberships</b></h3>\n        <p contenteditable=\"true\">").concat(membership, "</p>\n\n        <h3><b>Skills</b></h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
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
    downloadPdfButton === null || downloadPdfButton === void 0 ? void 0 : downloadPdfButton.addEventListener("click", function () {
        alert("Download functionality is under construction!");
    });
});
