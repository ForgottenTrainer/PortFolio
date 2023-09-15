const hamburguerIcon = document.querySelector('.nav__hamburguer');
const navOverly = document.querySelector('.nav__overlay');

let currenDropDown = navOverly;

hamburguerIcon.addEventListener('click', () => {
	hamburguerIcon.classList.toggle('nav__hamburguer--open')

	navOverly.classList.toggle('nav__overlay--show');
});

navOverly.addEventListener('click',(e) => {
	e.preventDefault();
	const currentElement = e.target;

	if(isActive(currentElement, 'nav__parent')){
		const subMenu = currentElement.parentElement.children[1];

		if(window.innerWidth < 768){

			let height = (subMenu.clientHeight == 0) 
						? subMenu.scrollHeight : 0;

			subMenu.style.height = `${height}px`;

		}else {
			if(!isActive(subMenu, 'nav__inner--show')){
				closeDropdown(currenDropDown);
			}
			subMenu.classList.toggle('nav__inner--show');
			currenDropDown = subMenu;

		}
	}
});

function isActive(element, string){
	return element.classList.value.includes(string);
}

function closeDropdown(currenDropDown) {
	// body...
	if(isActive (currenDropDown, 'nav__inner--show')){
		currenDropDown.classList.remove('nav__inner--show')
	}

}

window.addEventListener('resize', () => {
	if(window.innerWidth > 768){
		const navInners = document.querySelectorAll('.nav__inner');
		
		navInners.forEach(navInner => {
			navInner.style.height = ''
		});	
	}
});