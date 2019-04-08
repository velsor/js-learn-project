import PhonesCatalog from './PhonesCatalog.js';
import PhoneViewer from './PhoneViewer.js';
import ShoppingCart from './ShoppingCart.js';
import Filter from './Filter.js';
import { getAll, getById } from '../api/phones.js';

export default class PhonesPage {
  constructor(element) {
    this.element = element;

    this.state = {
      phones: getAll(),
      selectedPhone: null,
    };

    this.render();
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };

    this.render();
  }

  initComponent(Constructor, props = {}) {
    const componentName = Constructor.name;
    const element = this.element.querySelector(`[data-component="${componentName}"]`);

    if (element) {
      new Constructor(element, props);
    }
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
        ${ this.state.selectedPhone ? `
          <div data-component="PhoneViewer"></div>
        ` : `
          <div data-component="PhonesCatalog"></div>
        `}
    </div>
    `;
     
    this.initComponent(PhonesCatalog, {
      phones: this.state.phones,
      onPhoneSelected: (phoneId) => {
        this.setState({
          selectedPhone: getById(phoneId),
        });
      }
    });

    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,
    });

    this.initComponent(ShoppingCart);
    this.initComponent(Filter);
  }
}