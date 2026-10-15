import { useState } from 'react';

const links = [
  { label: 'Filmes', href: '/' },
  { label: 'Categoria', href: '/' },
  { label: 'Sobre', href: '/' },
  { label: 'Contato', href: '/' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <a className="brand" href="/" onClick={closeMenu} aria-label="MovieCity — início">
        MovieCity
      </a>

      <nav
        className={`navigation${menuOpen ? ' open' : ''}`}
        id="primary-navigation"
        aria-label="Navegação principal"
      >
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-actions">
        <button className="login-button" type="button">Login</button>
        <button
          className={`menu-toggle${menuOpen ? ' active' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
