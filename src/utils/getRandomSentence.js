const sentences = [
	"Hola buenos días", "Hola buenas noches", "Que rica estaba la comida", "El futbol es hermoso", "Hala Madrid y nada más", "Queremos la champions", "Unicos tricampeones de europa"
];

const getRandomSentence = () => {
	const randomIndex = Math.floor(Math.random() * sentences.length);
	const sentence = sentences[randomIndex];
	return sentence;
};

export default getRandomSentence;
