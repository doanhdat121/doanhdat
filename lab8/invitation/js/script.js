function flipCard() {
	const card = document.querySelector('.card');
	card.classList.toggle('is-flipped');
}

function playMusic() {
	const audio = document.getElementById('background-audio');
	audio.play().catch(error => {
		console.log('Autoplay was prevented:', error);
});
};

