import React, { useEffect, useRef, useDebugValue } from "react";

export default function usePrevious(value) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  });

  useDebugValue(ref.current > 18 ? "to much" : "too little");
  return ref.current;
}
