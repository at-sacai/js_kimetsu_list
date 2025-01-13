const template = document.querySelector('#template');
const list_character = document.querySelector('.list_character');

const img_src_domain = 'https://ihatov08.github.io';
const all_url = 'https://ihatov08.github.io/kimetsu_api/api/all.json';
const kisatsutai_url = 'https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json';
const hashira_url = 'https://ihatov08.github.io/kimetsu_api/api/hashira.json';
const oni_url = 'https://ihatov08.github.io/kimetsu_api/api/oni.json';

const showCharacters = async (url = all_url) => {
	const response = await fetch(url);
	const data = await response.json();
	data.forEach((character) => {
		const clone = document.importNode(template.content, true);
		clone.querySelector('.character_img img').setAttribute('src', `${img_src_domain}${character.image}`);
		clone.querySelector('.character_name').textContent = character.name;
		clone.querySelector('.character_category').textContent = character.category;
		list_character.appendChild(clone);
	});
};

window.addEventListener('load', () => {
	showCharacters();
	const btnAll = document.getElementById('all_characters');
	const btnKisatsutai = document.getElementById('demon_slayer_corps');
	const btnHashira = document.getElementById('hashira');
	const btnOni = document.getElementById('demons');

	btnAll.addEventListener('click', () => {
		list_character.innerHTML = '';
		showCharacters(all_url);
	});

	btnKisatsutai.addEventListener('click', () => {
		list_character.innerHTML = '';
		showCharacters(kisatsutai_url);
	});

	btnHashira.addEventListener('click', () => {
		list_character.innerHTML = '';
		showCharacters(hashira_url);
	});

	btnOni.addEventListener('click', () => {
		list_character.innerHTML = '';
		showCharacters(oni_url);
	});
});
