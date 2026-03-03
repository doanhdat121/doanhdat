function validateForm() {
  const form = document.getElementById('registerForm');

  const password = form.elements['password'].value;
  const confirmPassword = form.elements['confirm_password'].value;

  if (password !== confirmPassword) {
    alert('Mật khẩu nhập lại không khớp!');
    return false;
  }
  return true;
}

function validateAge() {
  const birthdayInput = document.getElementById("birthday");
  const birthday = new Date(birthdayInput.value);
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  const dayDiff = today.getDate() - birthday.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  if (age < 18) {
    birthdayInput.setCustomValidity("Bạn phải trên 18 tuổi!");
  } else {
    birthdayInput.setCustomValidity("");
  }
}