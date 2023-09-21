document.addEventListener('DOMContentLoaded', function () {

	const images = [

		[
			{
				name: '13-min.jpg',
			},
			{
				name: '14-min.jpg',
			},
			{
				name: '15-min.jpg',
			},
			{
				name: '16-min.jpg',
			},
			{
				name: '17-min.jpg',
				double: true
			},
			{
				name: '18-min.jpg',
				double: true
			},
			{
				name: '19-min.jpg'
			},
			{
				name: '20-min.jpg'
			},
			{
				name: '21-min.jpg'
			},
			{
				name: '22-min.jpg'
			},
		],

		[
			{
				name: '23-min.jpg',
				double: true
			},
			{
				name: '24-min.jpg',
				double: true
			},
			{
				name: '25-min.jpg'
			},
			{
				name: '26-min.jpg'
			},
			{
				name: '27-min.jpg'
			},
			{
				name: '28-min.jpg'
			},
		],

		[
			{
				name: '29-min.jpg',
				double: true
			},
			{
				name: '30-min.jpg',
				double: true
			},
			{
				name: '31-min.jpg'
			},
			{
				name: '32-min.jpg'
			},
			{
				name: '33-min.jpg'
			},
			{
				name: '34-min.jpg'
			},
		],

		[
			{
				name: '35-min.jpg',
				double: true
			},
			{
				name: '36-min.jpg',
				double: true
			},
			{
				name: '37-min.jpg'
			},
			{
				name: '38-min.jpg'
			},
			{
				name: '39-min.jpg'
			},
			{
				name: '40-min.jpg'
			},
		],

		[
			{
				name: '41-min.jpg',
				double: true
			},
			{
				name: '42-min.jpg',
				double: true
			},
			{
				name: '43-min.jpg'
			},
			{
				name: '44-min.jpg'
			},
			{
				name: '45-min.jpg'
			},
			{
				name: '46-min.jpg'
			},
		],

		[
			{
				name: '47-min.jpg',
				double: true
			},
			{
				name: '48-min.jpg',
				double: true
			},
			{
				name: '49-min.jpg'
			},
			{
				name: '50-min.jpg'
			},
			{
				name: '51-min.jpg'
			},
			{
				name: '52-min.jpg'
			},
		],

		[
			{
				name: '53-min.jpg',
				double: true
			},
			{
				name: '54-min.jpg',
				double: true
			},
			{
				name: '55-min.jpg'
			},
			{
				name: '56-min.jpg'
			},
			{
				name: '57-min.jpg'
			},
			{
				name: '58-min.jpg'
			},
		],

		[

			{
				name: '59-min.jpg'
			},
			{
				name: '60-min.jpg'
			},
			{
				name: '61-min.jpg'
			},
			{
				name: '62-min.jpg'
			},
			{
				name: '63-min.jpg'
			},
			{
				name: '64-min.jpg'
			},
			{
				name: '65-min.jpg'
			},
			{
				name: '66-min.jpg'
			},
		],

		[
			{
				name: '67-min.jpg',
				double: true
			},
			{
				name: '68-min.jpg'
			},
			{
				name: '69-min.jpg'
			},
			{
				name: '70-min.jpg',
				quadruple: true
			},
		],

	];

	const galleryImages = document.querySelector("#gallery-images");
	const galleryMoreBtn = document.querySelector("#gallery-more-btn");

	let currentIndex = 0;

	function addImagesToGallery() {
		const currentImageArray = images[currentIndex];
		

		if (!images[currentIndex + 1])
			galleryMoreBtn.style.display = "none";

		if (!currentImageArray)
			return;

		currentImageArray.forEach((image) => {

			const picture = document.createElement("picture");
			const img = document.createElement("img");

			img.setAttribute("src", `/resources/images/photos/gallery/${image.name}`);
			img.setAttribute("alt", "");
		
			if (image.double)
				picture.classList.add("double");

			else if (image.quadruple)
				picture.classList.add("quadruple");
		
			picture.appendChild(img);
			galleryImages.appendChild(picture);
		});
		
		currentIndex++;
	}

	galleryMoreBtn.addEventListener("click", addImagesToGallery);

	addImagesToGallery();

})
