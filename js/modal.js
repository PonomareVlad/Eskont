document.addEventListener("DOMContentLoaded", function () {

	fetchAllModalNodes('[data-modal-open]', openModal);

	fetchAllModalNodes('[data-modal-close]', closeModal);

	function fetchAllModalNodes(selector, handler) {
		var modalCloseNodes = document.querySelectorAll(selector);
		for (var i = 0, len = modalCloseNodes.length; i < len; i++) {
			modalCloseNodes[i].addEventListener('click', handler);
		}
	}

	function openModal() {
		document.body.classList.toggle('disableScroll', true);
	}

	function closeModal() {
		document.body.classList.toggle('disableScroll', false);
	}

});

window.addEventListener('load',function () {
	document.querySelectorAll('.modal .swiper-container').forEach(slider => new Swiper(slider, {
		navigation: {
			nextEl: slider.querySelector('.swiper-button-next'),
			prevEl: slider.querySelector('.swiper-button-prev')
		},
		pagination: {
			el: slider.querySelector('.swiper-pagination')
		}
	}));
});
