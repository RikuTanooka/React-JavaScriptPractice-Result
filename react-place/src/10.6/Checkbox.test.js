import { fireEvent, render }  from "@testing-library/react";
import Checkbox from "./Checkbox";
import { screen } from "@testing-library/react";

test("Selecting the checkbox should change the value of checked to true", () => {
    render(<Checkbox />);
    const checkbox = screen.getByLabelText(/not checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);


});

