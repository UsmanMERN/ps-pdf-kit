import { proxy } from "valtio";

const state = proxy({
  instance: null,
  PSPDFKit: null,
});

export default state;
