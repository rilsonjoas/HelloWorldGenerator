document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language-select");
  const codeDisplay = document.getElementById("code-display");
  const copyButton = document.getElementById("copy-button");
  const langButtons = document.querySelectorAll(".lang-button");

  if (typeof languageData === "undefined" || !Array.isArray(languageData)) {
    console.error(
      "Erro: languageData não definido ou não é um array. Verifique languages.js."
    );
    codeDisplay.textContent = "Error loading language data.";
    return; 
  }
  if (typeof translations === "undefined" || typeof translations !== "object") {
    console.error(
      "Erro: translations não definido ou não é um objeto. Verifique translations.js."
    );
  }

  let currentLang = "en"; 
  let initialMessage =
    translations[currentLang]?.initialMessage || "Choose a language above..."; 

  // Popula o dropdown com as linguagens de programação.
 
  function populateLanguageSelector() {
    // Ordena as linguagens alfabeticamente 
    const sortedLanguages = [...languageData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    sortedLanguages.forEach((lang) => {
      const option = document.createElement("option");
      option.value = lang.name;
      option.textContent = lang.name;
      languageSelect.appendChild(option);
    });
  }

  //Atualiza o bloco de código com base na linguagem selecionada.

  function updateCodeDisplay(languageName) {
    const selectedLanguage = languageData.find(
      (lang) => lang.name === languageName
    );
    const codeElement = document.getElementById("code-display"); 

    if (selectedLanguage) {
      codeElement.textContent = selectedLanguage.code;
      codeElement.className = `language-${
        selectedLanguage.highlightClass || "plaintext"
      }`; 
    } else {
      codeElement.textContent = initialMessage;
      codeElement.className = "language-plaintext"; 
    }
    copyButton.textContent =
      translations[currentLang]?.copyButtonLabel || "Copy Code";
    copyButton.disabled = !selectedLanguage; 
  }

  async function copyCodeToClipboard() {
    const codeToCopy = codeDisplay.textContent;
    const originalButtonText = copyButton.textContent;
    const copiedText = copyButton.dataset.copiedText || "Copied!"; 

    if (codeToCopy === initialMessage || !codeToCopy) {
      console.warn("Nenhum código para copiar.");
      return; 
    }

    try {
      await navigator.clipboard.writeText(codeToCopy);
      copyButton.textContent = copiedText;
      copyButton.classList.add("copied"); 

      setTimeout(() => {
        copyButton.textContent = originalButtonText;
        copyButton.classList.remove("copied");
      }, 1500); 
    } catch (err) {
      console.error("Erro ao copiar código: ", err);
      alert("Não foi possível copiar o código."); 
    }
  }


  function setLanguage(lang) {
    if (!translations[lang]) {
      console.warn(`Idioma ${lang} não encontrado nas traduções. Usando 'en'.`);
      lang = "en"; 
    }
    currentLang = lang;
    initialMessage =
      translations[lang]?.initialMessage || "Choose a language above...";

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n-key]").forEach((element) => {
      const key = element.getAttribute("data-i18n-key");
      const translation = translations[lang]?.[key];

      if (translation) {
        if (element.tagName === "OPTION" && key === "defaultOption") {
          element.textContent = translation;
        } else if (
          (element.id === "code-display" &&
            element.textContent === translations.en.initialMessage) ||
          element.textContent === translations.es.initialMessage ||
          element.textContent === translations.pt.initialMessage
        ) {
          element.textContent = translation;
        } else if (key === "copyButtonLabel") {
          element.textContent = translation; 
          copyButton.dataset.copiedText =
            translations[lang]?.copyButtonCopied || "Copied!"; 
        } else if (key === "copyButtonAria") {
          element.setAttribute("aria-label", translation); 
        } else if (
          element.tagName !== "OPTION" &&
          element.id !== "code-display"
        ) {
          element.textContent = translation;
        }
      } else {
        console.warn(
          `Chave de tradução '${key}' não encontrada para o idioma '${lang}'.`
        );
      }
    });

    langButtons.forEach((button) => {
      const targetLang = button.dataset.lang;
      let ariaKey;
      if (targetLang === "en") ariaKey = "switchLangAriaEN";
      else if (targetLang === "es") ariaKey = "switchLangAriaES";
      else if (targetLang === "pt") ariaKey = "switchLangAriaPT";

      if (ariaKey) {
        button.setAttribute(
          "aria-label",
          translations[lang]?.[ariaKey] || button.getAttribute("aria-label")
        ); 
      }
    });

    langButtons.forEach((button) => {
      if (button.dataset.lang === lang) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    if (languageSelect.value === "") {
      updateCodeDisplay(""); 
    }
  }

  // Event Listeners

  // Quando uma linguagem é selecionada no dropdown
  languageSelect.addEventListener("change", (event) => {
    updateCodeDisplay(event.target.value);
  });

  // Quando o botão de cópia é clicado
  copyButton.addEventListener("click", copyCodeToClipboard);

  // Quando um botão de idioma da interface é clicado
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      setLanguage(lang);
    });
  });

  // Inicialização
  populateLanguageSelector();
  setLanguage(currentLang); // Define o idioma inicial
  updateCodeDisplay(""); // Garante que a mensagem inicial seja exibida e o botão 'copy' desabilitado
}); 
