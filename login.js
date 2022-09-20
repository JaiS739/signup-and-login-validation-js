let login_form = document.getElementById("login_form");

login_form.addEventListener("submit", (e) => {
  e.preventDefault();

  let login_email = document.getElementById("login_email").value;
  let login_password = document.getElementById("login_password").value;

  let form_data = JSON.parse(localStorage.getItem("singup_form_data")) || [];

  let exists =
    form_data.length &&
    JSON.parse(localStorage.getItem("singup_form_data")).some(
      (data) =>
        data.singup_form_email === login_email &&
        data.singup_form_password == login_password
    );

  if (exists) {
    alert("login successfull");

    let user = JSON.parse(localStorage.getItem("singup_form_data")).filter(
      (user_data) => {
        if (user_data.singup_form_email === login_email) {
          return user_data;
        }
      }
    );

    localStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = "welcome.html";
  } else {
    alert("please check the credentials");
  }
});

let create_account = document
  .getElementById("create_account")
  .addEventListener("click", () => {
    window.location.href = "index.html";
  });
