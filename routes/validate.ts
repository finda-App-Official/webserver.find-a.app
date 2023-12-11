// Imports

import dotenv from "dotenv";

// Presets

let env = dotenv.config();

export default function validate(user: string, key: string) {
  if (user === "rieke") {
    if (key === process.env["rieke"]) {
      return true;
    } else {
      return false;
    }
  } else if (user === "leon") {
    if (key === process.env["leon"]) {
      return true;
    } else {
      return false;
    }
  } else if (user === "lasse") {
    if (key === process.env["lasse"]) {
      return true;
    } else {
      return false;
    }
  } else if (user === "ines") {
    if (key === process.env["ines"]) {
      return true;
    } else {
      return false;
    }
  } else if (user === "philipp") {
    if (key === process.env["philipp"]) {
      return true;
    } else {
      return false;
    }
  }
}
