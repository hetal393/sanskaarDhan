class VicharanAgas extends HTMLElement {
    connectedCallback() {
        fetch('/agas.html').then(data => data.text()).then(text => {
            this.scrollIntoView();
            this.innerHTML = text;
        });
    }
}


customElements.define("vicharan-agas", VicharanAgas);