export default class PhoneViewer {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.render();
  }

  render() {
    const { phone } = this.props;

    this.element.innerHTML = `
      <div>
        <img class="phone" src="${ phone.images[0] }">

        <button>Back</button>
        <button>Add to basket</button>

        <h1>${ phone.name }</h1>

        <p>${ phone.description }</p>

        <ul class="phone-thumbs">
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
          </li>
        </ul>
      </div>
    `;
  }
}