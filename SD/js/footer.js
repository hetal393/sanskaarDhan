class MyFooter extends HTMLElement {
    connectedCallback() {
        fetch('/SD/footer.html').then(data => data.text()).then(text => {
            this.innerHTML = text;
        });
    }
}

class FooterScripts extends HTMLElement {
    connectedCallback() {
        this.appendChild(
            this.getScript("https://code.jquery.com/jquery-3.4.1.min.js")
        );
        this.appendChild(
            this.getScript(
                "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
            )
        );
        this.appendChild(
            this.getScript(
                "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"
            )
        );
        this.appendChild(this.getScript("lib/wow/wow.min.js"));
        this.appendChild(this.getScript("lib/easing/easing.min.js"));
        this.appendChild(this.getScript("lib/waypoints/waypoints.min.js"));
        this.appendChild(this.getScript("lib/owlcarousel/owl.carousel.min.js"));
        this.appendChild(this.getScript("js/main.js"));
        this.innerHTML = `
        <script src="js/pdfThumbnails.js" data-pdfjs-src="js/pdf.js/build/pdf.js"></script>
        `;
    }

    getScript(src) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        return script;
    }
}

customElements.define("my-footer", MyFooter);
customElements.define("footer-scripts", FooterScripts);