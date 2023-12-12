// Imports

import dotenv from "dotenv";

// Presets

let env = dotenv.config();

export default function validate(user: string, key: string) {
  if (user === "Rieke") {
    if (key === process.env["rieke"]) {
      return true;
    } else {
      return false;
    }
  } else if (user === "Leon") {
    if (key === process.env["leon"]) {
      return true;
    } else {
      return false;
    }
  } else if (user === "Lasse") {
    if (key === process.env["lasse"]) {
      return true;
    } else {
      return false;
    }
  } else if (user === "Ines") {
    if (key === process.env["ines"]) {
      return true;
    } else {
      return false;
    }
  } else if (user === "Philipp") {
    if (key === process.env["philipp"]) {
      return true;
    } else {
      return false;
    }
  }
}
