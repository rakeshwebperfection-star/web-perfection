"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// The year is read only in the browser; the prerendered shell renders nothing here
export default function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null
  );

  return <span>{year}</span>;
}
