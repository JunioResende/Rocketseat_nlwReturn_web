import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar Formulário de feedback">
      <X weight="bold" className="w-4 ha-4" />
    </Popover.Button>
  )
}