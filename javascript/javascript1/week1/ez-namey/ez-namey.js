
const firstWords = [
    "Dynamic",
    "Transparent",
    "Inovative",
    "Sustainable",
    "Customer-Centric",
    "Collaborative",
    "Adaptable",
    "Data-Driven",
    "Empatthetic",
    "Scalable"
];

const secondWords = [
    "Evolving",
    "Balancing Positivity & Realism",
    "Ethical",
    "Empowering",
    "Tech-savvy",
    "Global",
    "Resilient",
    "User-Friendly",
    "Secure",
    "Reliable",
    "Fast-Paced"
];

const randomfirstWord = firstWords [Math.floor(Math.random() * 10)];
const randomsecondWord = secondWords[Math.floor(Math.random() * 10)];

const startupName = randomfirstWord + " " + randomsecondWord;

console.log("The startup: " + startupName + " contains " + (startupName.length) + " characters.");

