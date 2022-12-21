import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { FabAddNew } from "../../../../src/UcabGo/components/ui/FabAddNew";
import { store } from "../../../../src/store/store";

describe("tests in fabAddNew", () => {
  test("should display the component", () => {
    render(
      <Provider store={store}>
        <FabAddNew />
      </Provider>
    );
    expect(fireEvent.click(screen.getByRole("button"))).toBeTruthy();
  });
});
