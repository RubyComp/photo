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

	// // Scroll:
	toTopButton.addEventListener("click", () => {
		const currentPosition = window.scrollY;
		
		const scrollDuration = 600;
		const scrollStep = Math.round(currentPosition / (scrollDuration / 15));
		
		const scrollAnimation = () => {
			if (window.scrollY > 0) {
				window.scrollBy(0, -scrollStep);
				requestAnimationFrame(scrollAnimation);
			}
		};

		scrollAnimation();
	});

	// // Show/Hide:
	window.addEventListener("scroll", () => {
		const scrollPosition = window.scrollY;

		if (scrollPosition < 100) {
			toTopButton.style.display = "none";
		} else {
			toTopButton.style.display = "block";
		}
	});

	const images = [
		{
			name: 'example-photo-v.jpg',
		},
		{
			name: 'example-photo-v.jpg',
		},
		{
			name: 'example-photo-v.jpg',
		},
		{
			name: 'example-photo-v.jpg',
		},
		{
			name: 'example-photo-h.jpg',
			double: true
		},
		{
			name: 'example-photo-h.jpg',
			double: true
		},
		{
			name: 'example-photo-v.jpg',
		},
		{
			name: 'example-photo-v.jpg',
		},
		{
			name: 'example-photo-v.jpg',
		},
		{
			name: 'example-photo-v.jpg',
		},
		{
			name: 'example-photo-h.jpg',
			double: true
		},
		{
			name: 'example-photo-h.jpg',
			double: true
		},
	];

	const galleryImages = document.querySelector("#gallery-images");
	const galleryMoreBtn = document.querySelector("#gallery-more-btn");

	let startIndex = 0;
	const imagesPerIteration = 6;

	function addImagesToGallery() {
		const endIndex = startIndex + imagesPerIteration;
		const imagesToAdd = images.slice(startIndex, endIndex);

		if (endIndex >= images.length)
			galleryMoreBtn.style.display = "none";

		if (imagesToAdd.length === 0)
			return;

		imagesToAdd.forEach((image) => {
			const picture = document.createElement("picture");
			const img = document.createElement("img");
			img.setAttribute("src", `/resources/images/photos/gallery/${image.name}`);
			img.setAttribute("alt", "");

			if (image.double)
				picture.classList.add("double");

			picture.appendChild(img);
			galleryImages.appendChild(picture);
		});
	
		startIndex = endIndex;
	}

	galleryMoreBtn.addEventListener("click", addImagesToGallery);

	// addImagesToGallery();

})
