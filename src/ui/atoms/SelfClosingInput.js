import { useRef, useEffect } from "react";
import { noop } from "lodash";
import styled from "styled-components";

export function SelfClosingInput({
  value,
  setValue,
  close = noop,
  submit = noop,
  ...rest
}) {
  const inputRef = useRef(null);
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        close();
      }
    };

    const input = inputRef.current;
    input.focus();
    input.select();
    input?.addEventListener("keydown", onKeyDown);
    return () => {
      input?.removeEventListener("keydown", onKeyDown);
    };
  }, [close]);

  const onSubmit = (e) => {
    e.preventDefault();
    submit(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        ref={inputRef}
        type="text"
        value={value}
        onBlur={() => {
          setTimeout(close, 150);
        }}
        onChange={(e) => {
          e.stopPropagation();
          setValue(e.target.value);
        }}
        {...rest}
      />
    </form>
  );
}

const Input = styled.input`
  background: transparent;
  color: currentColor;
  border: none;
  border-bottom: var(--stroke);
  outline: none !important;
`;
