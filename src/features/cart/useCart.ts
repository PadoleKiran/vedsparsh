"use client";

import { useMemo } from "react";
import { computePriceBreakdown } from "@/services/pricing";
import { useCartContext } from "./cart-context";

export const useCart = () => {
  const { state, dispatch } = useCartContext();
  const totals = useMemo(() => computePriceBreakdown(state.items), [state.items]);
  const count = state.items.reduce((a, i) => a + i.qty, 0);

  return {
    items: state.items,
    count,
    totals,
    add: (item: any) => dispatch({ type: "ADD", payload: item }),
    remove: (id: string) => dispatch({ type: "REMOVE", payload: { id } }),
    setQty: (id: string, qty: number) => dispatch({ type: "SET_QTY", payload: { id, qty } }),
    clear: () => dispatch({ type: "CLEAR" }),
  };
};
