import "@testing-library/jest-dom";

import { render, screen, within, fireEvent } from "../test/utils";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../utils/states/redux/store";

import App from "../pages/create-product";

const productNameInput = [
  "input-product-name",
];
describe("ini adalah Product Page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  describe("Action for peoduct page name input", () => {
    it("render product name input and displays entered text", () => {
      const productNameInput = within(form).getByLabelText("input-product-name");
      fireEvent.change(productNameInput, {
        target: { value: "New Product" },
      });
      expect(productNameInput).toHaveValue("New Product");
    });
