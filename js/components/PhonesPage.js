import PhonesCatalog from './PhonesCatalog.js';
import ShoppingCart from './ShoppingCart.js';
import Filter from './Filter.js';
import { getAll, getById } from '../api/phones.js';

export default class PhonesPage {
  constructor(element) {
    this.element = element;

    this.render();

    this.initComponent(PhonesCatalog, {
      phones: getAll(),
    });
    this.initComponent(ShoppingCart);
    this.initComponent(Filter);
  }

  initComponent(Constructor, props = {}) {
    new Constructor(this.element.querySelector(`[data-component="${Constructor.name}"]`),
    props);
  }

  render() {
    this.element.innerHTML = `
    <div class="row">

      <!--Sidebar-->
      <div class="col-md-2">
        <section>
          <div data-component="Filter">
        </section>

        <section>
        <div data-component="ShoppingCart">
        </section>
      </div>

      <!--Main content-->
      <div class="col-md-10">
        <div data-component="PhonesCatalog">
      </div>
    </div>
    `;
  }
}