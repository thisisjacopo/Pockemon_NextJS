import React from "react";
import { render } from "@testing-library/react";
import "./setupTests";

import PokemonPage from "../pages/pokemon/[id]";

describe("Test PokemonPage component", () => {
   
    it("should show PokemonPage", () => {
      const { baseElement } = render(<PokemonPage />);
      expect(baseElement).toBeTruthy();
    });
  });
