const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const saveData = localStorage.getItem('feedback-form-state');
if (saveData) {
  const parsedData = JSON.parse(saveData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  emailInput.value = formData.email;
  messageTextarea.value = formData.message;
}

form.addEventListener('input', event => {
  if (event.target === emailInput) {
    formData.email = event.target.value.trim();
  }
  if (event.target === messageTextarea) {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});
