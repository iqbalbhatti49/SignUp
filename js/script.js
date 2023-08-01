// for name input field button disabled = false
const name_form = document.getElementById("name-form");
const name_btn = document.getElementById("name-btn");

name_form.addEventListener('input', () => {
    const inputs = name_form.querySelectorAll('input[required]');
    const isFormValid = Array.from(inputs).every(input => input.value.trim() !== '');
    name_btn.disabled = !isFormValid;
});

// for dob and gender field button disabled = false
const dob_form = document.getElementById("dob-form");
const dob_btn = document.getElementById("dob-btn");
dob_form.addEventListener('select', () => {
    const inputs = dob_form.querySelectorAll('select[required]');
    const isFormValid = Array.from(inputs).every(select => select.value.trim() !== '');
    dob_btn.disabled = !isFormValid;
});

// for contact (email or phone number) button disabled = false
const contact_form = document.getElementById("contact-form");
const contact_btn = document.getElementById("contact-btn");
contact_form.addEventListener('input', () => {
    const inputs = contact_form.querySelectorAll('input[required]');
    const isFormValid = Array.from(inputs).every(input => input.value.trim() !== '');
    contact_btn.disabled = !isFormValid;
});