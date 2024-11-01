document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o formulário de ser enviado normalmente

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Apenas uma mensagem de confirmação para o usuário
    const responseMessage = document.getElementById("response-message");
    responseMessage.innerText = `Obrigado, ${name}! Sua mensagem foi enviada.`;

    // Limpar o formulário após o envio
    document.getElementById("contact-form").reset();
  });

// ---------- FUNÇÔES GERAIS ---------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let nameInput = document.getElementById("name");
let nameLabel = document.querySelector('label[for="name"]');
let nameHelper = document.getElementById("name-helper");

togglePopup(nameInput, nameLabel);

// Validar valor do input para o username
nameInput.addEventListener("change", (e) => {
  let valor = e.target.value;
  // console.log(valor);

  // Criação de funções para mostrar acerto e erro do input name
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

  if (valor.length < 3) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    mostrarError(
      nameInput,
      nameHelper,
      "Seu username deve ter ao menos 3 ou mais caracteres"
    );
    // nameHelper.innerText = "Seu username deve ter ao menos 3 ou mais caracteres";
    // estilizarInputIncorreto(nameInput, nameHelper)
    inputsCorretos.username = false;
    // nameInput.classList.remove("correct");
    // nameInput.classList.add("error");
    // // nameHelper.innerText = "Necessário ao menos 3 caracteres";
    // nameHelper.classList.add("visible");
  } else {
    mostrarAcerto(nameInput, nameHelper);
    // Adicionar estilos dinâmicos se o valor estiver correto
    // estilizarInputCorreto(nameInput, nameHelper);
    inputsCorretos.username = true;
    // nameInput.classList.remove("error");
    // nameHelper.classList.remove("visible");
    // nameInput.classList.add("correct");
  }
});

// ---------- VALIDAÇÂO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

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

// Validar valor do input
emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".com")) {
    // emailInput.classList.remove("error");
    // emailHelper.classList.remove("visible");
    // emailInput.classList.add("correct");
    // estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true;
    mostrarAcerto(emailInput, emailHelper);
  } else {
    // emailInput.classList.remove("correct");
    // emailInput.classList.add("error");
    // emailHelper.innerText = "Entre com um email válido";
    // emailHelper.classList.add("visible");
    mostrarError(emailInput, emailHelper, "Entre com um email válido");
    // emailHelper.innerText ="Precisa inserir um email válido";
    // estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false;
  }
});

// ---------- VALIDAÇÂO SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel);

senhaInput.addEventListener("blur", (e) => {
  let valor = e.target.value;

  if (valor == "") {
    // senhaHelper.innerText = "O campo senha não pode estar vazio"
    mostrarError(senhaInput, senhaHelper, "O campo senha não pode estar vazio");
    // estilizarInputIncorreto(senhaInput, senhaHelper)
    inputsCorretos.senha = false;
  } else {
    estilizarInputCorreto(senhaInput, senhaHelper);
    inputsCorretos.senha = true;
  }
});

// ---------- VALIDAÇÂO CONFIRMA SENHA ---------- //
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

togglePopup(confirmaSenhaInput, confirmaSenhaLabel);

confirmaSenhaInput.addEventListener("blur", (e) => {
  let valorConfirmaSenha = e.target.value;

  if (valorConfirmaSenha == senhaInput.value) {
    estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper);
    // mostrarError(confirmaSenhaInput, confirmasenhaHelper)
    inputsCorretos.confirmaSenha = true;
  } else {
    // confirmaSenhaHelper.innerText = "As senhas precisam ser iguais"
    // estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper);
    mostrarError(confirmaSenhaInput, confirmaSenhaHelper, "As senhas precisam ser iguais");
    inputsCorretos.confirmaSenha = false;
  }
});

//---------- EVITAR ENVIO DO FORMULÁRIO ---------- //
let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {
  username: false,
  email: false,
  senha: false,
  confirmaSenha: false,
};

btnSubmit.addEventListener("click", (e) => {
  if (
    inputsCorretos.username == false ||
    inputsCorretos.email == false ||
    inputsCorretos.senha == false ||
    inputsCorretos.confirmaSenha == false
  ) {
    e.preventDefault();
    alert("Os campos obrigatórios precisam ser preenchidos corretamente");
  } else {
    alert("Formulário enviado com sucesso");
  }
});
