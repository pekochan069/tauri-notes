import { ParentProps } from "solid-js";
import { Toaster } from "./components/ui/sonner";

export function Globals(props: ParentProps) {
  return (
    <>
      {props.children}
      <Toaster />
    </>
  );
}
