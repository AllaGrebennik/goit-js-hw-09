'use strict';

const form = document.querySelector('.feedback-form');
const storageFormData = "feedback-form-state";
let formData = {};

try {
    formData = JSON.parse(localStorage.getItem(storageFormData)) ?? {};
    form.email.value = formData.email ?? "";
    form.message.value = formData.message ?? "";
} catch (error) {
    console.log(error.name); 
    console.log(error.message); 
}

form.addEventListener("input", (e) => {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(storageFormData, JSON.stringify(formData));
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.email.value.trim() === "" && form.message.value.trim() === "") {
        return alert('Please fill in both fields.');
    }
    else if (form.email.value.trim() === "") {
        return alert('Please fill in email field.');
    }
    else if (form.message.value.trim() === "") {
        return alert('Please fill in message field.');
    }
        
    console.log(formData);
    localStorage.removeItem(storageFormData);
    form.reset();
});
