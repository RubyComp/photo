document.addEventListener('DOMContentLoaded', function () {
	console.log('Scripts')

	// Burger:
	const burgerButton = document.querySelector("#burger");
	const mobileMenu = document.querySelector(".mobile-menu");

	burgerButton.addEventListener("click", () => {
		mobileMenu.classList.toggle("active");
	});

	const navLinks = document.querySelectorAll('.mobile-menu .nav-list a');

	const handleNavClick = () => {
		mobileMenu.classList.remove("active");
	}
	
	navLinks.forEach(link => {
		link.addEventListener('click', handleNavClick);
	});

	// To top btn:
	const toTopButton = document.querySelector("#to-top-btn");

	// // // Scroll:
	// toTopButton.addEventListener("click", () => {
	// 	const currentPosition = window.scrollY;
		
	// 	const scrollDuration = 600;
	// 	const scrollStep = Math.round(currentPosition / (scrollDuration / 15));
		
	// 	const scrollAnimation = () => {
	// 		if (window.scrollY > 0) {
	// 			window.scrollBy(0, -scrollStep);
	// 			requestAnimationFrame(scrollAnimation);
	// 		}
	// 	};

	// 	scrollAnimation();
	// });

	// // Show/Hide:
	window.addEventListener("scroll", () => {
		const scrollPosition = window.scrollY;

		if (scrollPosition < 100) {
			toTopButton.style.display = "none";
		} else {
			toTopButton.style.display = "block";
		}
	});


})
