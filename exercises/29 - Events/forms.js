const west = document.querySelector('.wes');

west.addEventListener('click', function(e) {
  console.log('you clicked it');
  const shouldChangePage = confirm('This website might be spam.');
  if (!shouldChangePage) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(e) {
  const name = e.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry Bro');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
