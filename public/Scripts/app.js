// IFFE
//Fyaaz Bobat - 301071094 - 10-09-2020

(function()
{
	/*$(function () {
		$(document).scroll(function () {
			var $nav = $(".navbar-fixed-top");
			$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		  });
	  });*/

	function start()
	{
		let deleteButtons = document.querySelectorAll('.btn-danger')
		
		for(button of deleteButtons)
		{
			button.addEventListener('click', (event) =>{
				if(!confirm("Are you sure?"))
				{
					event.preventDefault();
					window.location.assign('/business-contact');
				}
			})
		}
		console.log("App Started....")	

		if(document.title == "Contact"){

			let sendButton = document.getElementById("sendButton");
			let cancelButton = document.getElementById("cancelButton");
			let form = document.forms[0];

			sendButton.addEventListener("click", (event) => {
				event.preventDefault();

				let fullname = document.getElementById("fullname").value;
				let contactNumber = document.getElementById("contactNumber").value;
				let emailAddress = document.getElementById("emailAddress").value;
				let message = document.getElementById("message").value;

				console.info(`Full Name: ${fullname}
				Contact Number: ${contactNumber}
				Email Address: ${emailAddress}
				Message:       ${message}`);

				form.reset();

			});

			cancelButton.addEventListener("click", (event) => {
				event.preventDefault();
				if(confirm("Are you Sure?"))
				{
					location.href = "/home";
				}
			})
		}
	}
	
	window.addEventListener("load", start);
}

)();
$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  });
  });
// typing text animation script
let typed = new Typed(".typing", {
	strings: ["Software Engineer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

 typed = new Typed(".typing-2", {
	strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});