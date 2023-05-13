const chatbot = document.getElementById("chatbot");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const userMessage = userInput.value;
    addUserMessage(userMessage);
    botResponse(userMessage);
    userInput.value = "";
});

function addUserMessage(message) {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `<p>${message}</p>`;
    chatbot.appendChild(userDiv);
}

function addBotMessage(message) {
    const botDiv = document.createElement("div");
    botDiv.classList.add("bot");
    botDiv.innerHTML = `<p>${message}</p>`;
    chatbot.appendChild(botDiv);
}

function botResponse(message) {
    const keywords = {
        greet: ["hola", "buenas", "saludos"],
        tv: ["televisor", "tv", "pantalla", "45 pulgadas"],
        samsung: ["samsung", "celular", "smartphone", "televisor", "tv"],
        internet: ["internet", "proveedor"],
        netflix: ["netflix", "servicio streaming", "película", "serie"],
        samsungPhones: ["samsung", "celular", "smartphone", "modelo"],
        samsungTVs: ["samsung", "televisor", "tv", "modelo"],
    };

    const responses = {
        greet: "Hola, ¿en qué puedo ayudarte?",
        tv: "Tenemos una amplia variedad de televisores de 45 pulgadas, ¿buscas alguna marca en particular?",
        samsung: "Samsung es una excelente marca de productos electrónicos, ¿estás buscando información sobre un celular, televisión u otro producto?",
        internet: "Ofrecemos servicios de internet de alta velocidad con diferentes proveedores, ¿necesitas alguna información adicional?",
        netflix: "Ofrecemos servicios de streaming como Netflix. ¿Te gustaría saber sobre las últimas series o películas disponibles? ",
        samsungPhones: "Tenemos varios modelos de Samsung disponibles, ¿estás buscando información sobre algún modelo en particular?",
        samsungTVs: "Tenemos varios modelos de televisores Samsung, ¿estás buscando información sobre algún modelo en particular?",
        default: "Lo siento, no entendí tu pregunta. Por favor, intenta nuevamente.",
    };

    let botMessage = responses.default;

    if (checkKeywords(message, keywords.greet)) {
        botMessage = responses.greet;
    } else if (checkKeywords(message, keywords.tv)) {
        botMessage = responses.tv;
    } else if (checkKeywords(message, keywords.samsungPhones)) {
        botMessage = responses.samsungPhones;
    } else if (checkKeywords(message, keywords.samsungTVs)) {
        botMessage = responses.samsungTVs;
    } else if (checkKeywords(message, keywords.samsung)) {
        botMessage = responses.samsung;
    } else if (checkKeywords(message, keywords.internet)) {
        botMessage = responses.internet;
    } else if (checkKeywords(message, keywords.netflix)) {
        botMessage = responses.netflix;
    }

    addBotMessage(botMessage);
}

function checkKeywords(message, keywords) {
    for (let i = 0; i < keywords.length; i++) {
        if (message.toLowerCase().includes(keywords[i])) {
            return true;
        }
    }
    return false;
}