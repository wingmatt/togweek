//Reuse JSON parse and saving
function processData() {
    // Get stored data from failed sends, if it exists
    var savedData = JSON.parse(localStorage.getItem("tw_data") || null) || [];
    console.log('Saved Data Before:' + savedData);

    // Check if there's an email address to send current form data to
    var emailField = document.getElementById("emailAddress");
    var isEmailValid = emailField.checkValidity();
    if (isEmailValid && emailField.value) {
        // Get current values and assemble into JSON
            // TODO Fetch TW JSON response here!
        // Add current data to stored data.
        savedData.push(formJson);
        console.log('Saved Data After:' + savedData);
        // Get JSON ready for storage.
        var combinedData = JSON.stringify(savedData);
        console.log('Combined Data Var:' + combinedData);
        // Store stringified JSON.
        localStorage.setItem("tw_data", combinedData);
        console.log('Combined Data After:' + localStorage.getItem("tw_data"));
    }
}

// On doc.ready, check if API field is blank. If blank, check for field's ID-equivalent LS entry.

// On save btn click, save API field input to ID-equivalent LS entries as long as they're not blank.