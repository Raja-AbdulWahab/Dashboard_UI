"use client";

import React from "react";
import { EuiProvider } from "@elastic/eui";

export function EuiProviderWrapper({ children }: { children: React.ReactNode }) {
  return <EuiProvider>{children}</EuiProvider>;
}
