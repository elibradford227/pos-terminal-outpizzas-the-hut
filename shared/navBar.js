import renderToDom from '../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24">
    </a>
    <button id="viewOrders" type="button" class="btn btn-primary">View orders</button>
    <button id="createOrder" type="button" class="btn btn-primary">Create order</button>
    <button id="viewMenu" type="button" class="btn btn-primary">View Menu</button>
    <div id="logout"></div>
  </div>
</nav>`;

  renderToDom('#navBar', domString);
};

export default navBar;
