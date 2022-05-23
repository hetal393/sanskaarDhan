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

class NavBar extends HTMLElement {
    connectedCallback() {
        fetch('/navigation.html').then(data => data.text()).then(text => {
            this.innerHTML = text;
        });

        fetch('/main.html').then(data => data.text()).then(text => {
            document.getElementById('main-component').innerHTML = text;
        });

        this.addEventListener("click", this.onclick, true);
    }


    onclick(ev) {
        if (ev.target && ev.target.dataset && ev.target.dataset.id &&
            ev.target.dataset.id !== 'ignore') {
            console.log(ev.target.dataset.id);
            fetch('/' + ev.target.dataset.id + '.html').then(data => data.text()).then(text => {
                document.getElementById('main-component').innerHTML = '';
                document.getElementById('main-component').innerHTML = text;
            });

            $('.active').removeClass('active');
            $(ev.target).addClass('active');
        }

    }
}



customElements.define("header-title", HeaderTitle);
customElements.define("nav-bar", NavBar);