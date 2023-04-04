import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#db2777",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./ai.png",
  fullDecal: "./ai.png",
});

export default state;
