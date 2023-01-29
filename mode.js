'use strict'
const btn = document.querySelector('.btn__toggle');
const theme = document.querySelector("#themeLink");
btn.addEventListener('click', function () {
	if (theme.getAttribute('href') == 'lightTheme.css') {
		theme.href = 'darkTheme.css';
		document.getElementById('btn').innerHTML = 'Dark theme';
	} else {
		theme.href = 'lightTheme.css';
		document.getElementById('btn').innerHTML = 'Light theme';


	}
});
