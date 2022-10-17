import { Slot } from '@radix-ui/react-slot';
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIcon {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 py-4 h-12 px-3 bg-gray-800 rounded transition-colors focus-within:ring-2 ring-cyan-300"
      )}
    >
      {children}
    </div>
  );
}

function TextInputText({ ...rest }: TextInputProps) {
  return (
    <input
      {...rest}
      className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
    />
  );
}

function TextInputIcon({ children }: TextInputIcon) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
        {children}
    </Slot>
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputText,
  InputIcon: TextInputIcon
};
