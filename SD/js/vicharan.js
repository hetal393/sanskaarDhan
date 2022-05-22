
class VicharanAgas extends HTMLElement {
    connectedCallback() {
        fetch('/SD/agas.html').then(data => data.text()).then(text => {
            this.innerHTML = text;
        });
    }
}


customElements.define("vicharan-agas", VicharanAgas);