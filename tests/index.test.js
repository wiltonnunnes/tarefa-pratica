import React from 'react';
import Page from "../app/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

const data = [
  {
    "id": 1,
    "service": "SERPRO",
    "status": "up"
  },
  {
    "id": 2,
    "service": "Conselho Nacional de Justiça",
    "status": "warning"
  },
  {
    "id": 3,
    "service": "Tribunal de Justiça",
    "status": "error"
  }
];

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(data)
}));

test("Renderização dos serviços.", () => {
  render(<Page />);
});