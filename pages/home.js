import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const homePage = () => {
  clearDom();
  const domString = `
  <h1>Welcome user</h1>
  <button type="button" class="btn btn-primary" id=>View Orders</button>
  <button id="create-order-btn" type="button" class="btn btn-primary">Create An Order</button>
  <button id="revenueBtn" type="button" class="btn btn-primary">View Revenue</button>
  `;
  renderToDom('#viewContainer', domString);
};

export default homePage;
