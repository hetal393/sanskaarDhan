class HeaderTitle extends HTMLElement {
	connectedCallBack() {
		document.getElementsByTagName("head")[0].appendChild(`
			<meta charset="utf-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Sanskaar Dhan</title>
	`);
	}
}

class HeaderScripts extends HTMLElement {
	connectedCallBack() {
		this.innerHTML = `
		<!-- Google Web Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@600&family=Lobster+Two:wght@700&display=swap"
            rel="stylesheet">
    
        <!-- Icon Font Stylesheet -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
    
        <!-- Libraries Stylesheet -->
        <link href="lib/animate/animate.min.css" rel="stylesheet">
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    
        <!-- Customized Bootstrap Stylesheet -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
    
        <!-- Template Stylesheet -->
        <link href="css/style.css" rel="stylesheet">
		`;
	}
}

class NavBar extends HTMLElement {
	connectedCallback() {
		fetch('/SD/navigation.html').then(data => data.text()
		).then(text => {
			this.innerHTML = text;
		});

		fetch('/SD/main.html').then(data => data.text()
		).then(text => {
			document.getElementById('main-component').innerHTML = text;
		});

		this.addEventListener("click", this.onclick, true);
	}


	onclick(ev) {
		if (ev.target.dataset.id !== 'ignore') {
			fetch('/SD/' + ev.target.dataset.id + '.html').then(data => data.text()
			).then(text => {
				document.getElementById('main-component').innerHTML = '';
				document.getElementById('main-component').innerHTML = text;
			});

			$('.active').removeClass('active');
			$(ev.target).addClass('active');
		}

	}
}



customElements.define("header-title", HeaderTitle);
customElements.define("header-scripts", HeaderScripts);
customElements.define("nav-bar", NavBar);