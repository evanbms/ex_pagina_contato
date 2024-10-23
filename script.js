document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o formulário de ser enviado normalmente

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Aqui você poderia enviar os dados para um servidor ou processá-los conforme necessário

    // Apenas uma mensagem de confirmação para o usuário
    const responseMessage = document.getElementById("response-message");
    responseMessage.innerText = `Obrigado, ${name}! Sua mensagem foi enviada.`;

    // Limpar o formulário após o envio
    document.getElementById("contact-form").reset();
  });

// ---------- VALIDAÇÃO USERNAME ---------- //
let nameInput = document.getElementById("name");
let nameLabel = document.querySelector('label[for="name"]');
let nameHelper = document.getElementById("name-helper");

function mostrarPopup(input, label) {
  // Mostrar popup de campo obrigatório
  nameInput.addEventListener("focus", () => {
    nameLabel.classList.add("required-popup");
  });
}

// Ocultar popup de campo obrigatório
nameInput.addEventListener("blur", () => {
  nameLabel.classList.remove("required-popup");
});

// Validar valor do input para o name
nameInput.addEventListener("change", (e) => {
  let valor = e.target.value;
  // console.log(valor);

  if (valor.length < 3) {
    nameInput.classList.remove("correct");
    nameInput.classList.add("error");
    nameHelper.innerText = "Necessário ao menos 3 caracteres";
    nameHelper.classList.add("visible");
  } else {
    nameInput.classList.remove("error");
    nameHelper.classList.remove("visible");
    nameInput.classList.add("correct");
  }
});

// ---------- VALIDAÇÂO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// Mostrar popup de campo obrigatório para o email

emailInput.addEventListener("focus", () => {
  emailLabel.classList.add("required-popup");
});

// Ocultar popup de campo obrigatório para o email
emailInput.addEventListener("blur", () => {
  emailLabel.classList.remove("required-popup");
});
mostrarPopup(emailInput, emailLabel);

// Criação de funções para mostrar acerto e erro do input email
function mostrarAcerto(input, helper) {
  input.classList.remove("error");
  helper.classList.remove("visible");
  input.classList.add("correct");
}

function mostrarError(input, helper, menssagem) {
  input.classList.remove("correct");
  input.classList.add("error");
  helper.innerText = menssagem;
  helper.classList.add("visible");
}

emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".com")) {
    // emailInput.classList.remove("error");
    // emmailHelper.classList.remove("visible");
    // emailInput.classList.add("correct");
    mostrarAcerto(emailInput, emailHelper);
  } else {
    // emailInput.classList.remove("correct");
    // emailInput.classList.add("error");
    // emailHelper.innerText = "Entre com um email válido";
    // emailHelper.classList.add("visible");
    mostrarError(emailInput, emailHelper, "Entre com um email válido");
  }
});
