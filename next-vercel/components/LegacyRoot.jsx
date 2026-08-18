"use client";

import { BrowserRouter } from "react-router-dom";
import LegacyApp from "@/LegacyApp";

export default function LegacyRoot() {
  return (
    <BrowserRouter>
      <LegacyApp />
    </BrowserRouter>
  );
}
