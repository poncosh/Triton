class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.getElementsByTagName('h2') || null
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="logo">
      <h2>Club Finder</h2>
    </div>
    <div class="navigator">
      <ul>
        <li><a href="#">Home<a><li>
        <li><a href="#">About<a><li>
      </ul>
    </div>
    `
  }

  attributeChangeCallback(name, newValue) {
    this[name] = newValue;
  }

  static get observedAttributes() {
    return ['h2'];
  }
}

customElements.define('triton-header', Header);