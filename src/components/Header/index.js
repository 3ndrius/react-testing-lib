import React from "react";

export default function Header({ title }) {
  return (
    <header className="header">
      <h1 data-testid="header-h1" className="header-heading">{title}</h1>
    </header>
  );
}
