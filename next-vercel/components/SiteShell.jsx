"use client";

import dynamic from "next/dynamic";

const LegacyRoot = dynamic(() => import("./LegacyRoot"), { ssr: false });

export default function SiteShell() {
  return <LegacyRoot />;
}
