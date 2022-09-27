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

class AlertMessageComponent extends HTMLElement {

    constructor() {
        super()
    }

    _render() {
        const inner = html`<b>Hello There!</b>`
        this.innerHTML = ''
        this.appendChild(inner)
    }

    connectedCallback() { this._render() }

    disconnectedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    adoptedCallback() { }

}

window.customElements.define('alert-message', AlertMessageComponent)
