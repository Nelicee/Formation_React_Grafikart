import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Alert } from "../src/components/Alert.jsx";
import userEvent from "@testing-library/user-event";

describe("<Alert>", () => {
  it("should render correctly", () => {
    const { container } = render(<Alert type="danger">Erreur</Alert>);
    expect(container.firstChild).toMatchInlineSnapshot(`
         <div
           class="alert alert-danger"
           role="alert"
         >
           Erreur
           <button>
             Fermer
           </button>
         </div>
       `);
  });
  it("should close the alert on click", async () => {
    const { container } = render(<Alert type="danger">Erreur</Alert>);
    await userEvent.click(screen.getByText("Fermer"));
    expect(container.firstChild).toMatchInlineSnapshot('null')
  });
});
