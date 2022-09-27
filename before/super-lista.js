


const html = function (templates, ...values) {
    const template = document.createElement('template')
    let str = ''
    templates.forEach((template, index) => {
        str += template
        str = values[index] ? str + values[index] : str
    })
    template.innerHTML = str.trim()
    return template.content
}

class SuperListComponent extends HTMLElement {

    constructor() {
        super()
    }

    _render() {
        const inner = html`
        <section class="awesome-list" >
            <h3>asdasds</h3>
            <ul>
                <slot></slot>
            </ul>
            <footer>asdasd</footer>
        </section>`
        this.innerHTML = ''
        this.appendChild(inner)
    }

    connectedCallback() { this._render() }

    disconnectedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    adoptedCallback() { }

}

window.customElements.define('super-lista', SuperListComponent)






