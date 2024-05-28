import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { LanguageSwitcher } from "../components";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: { language: "en", changeLanguage: vi.fn() },
  }),
}));

describe("LanguageSwitcher", () => {
  it("renders correctly enabling color switching", () => {
    render(<LanguageSwitcher />);

    const languageButton = screen.getByTestId("language-button");
    expect(languageButton).toBeInTheDocument();
    expect(languageButton).toHaveTextContent("English");

    fireEvent.click(languageButton);

    const ENbutton = screen.getByTestId("button-en");
    const JPbutton = screen.getByTestId("button-jp");
    expect(ENbutton).toBeInTheDocument();
    expect(JPbutton).toBeInTheDocument();

    fireEvent.click(JPbutton);
  });
});
