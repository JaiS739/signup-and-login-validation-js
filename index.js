let singup_form = document.getElementById("singup_form");
singup_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let singup_form_name = document.getElementById("name").value;
  let singup_form_email = document.getElementById("email").value;
  let singup_form_password = document.getElementById("password").value;

  let singup_form_data =
    JSON.parse(localStorage.getItem("singup_form_data")) || [];

  let exists =
    singup_form_data.length &&
    JSON.parse(localStorage.getItem("singup_form_data")).some(
      (data) =>
        data.singup_form_name == singup_form_name &&
        data.singup_form_email == singup_form_email
    );

  if (!exists) {
    singup_form_data.push({
      singup_form_name,
      singup_form_email,
      singup_form_password,
    });

    localStorage.setItem("singup_form_data", JSON.stringify(singup_form_data));
    singup_form.reset();
    document.getElementById("name").focus();
    alert("account created succefful please login");
    window.location.href = "login.html";
  } else {
    alert("user already exists");
  }
});
