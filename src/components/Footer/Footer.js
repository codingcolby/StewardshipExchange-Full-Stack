import React from 'react';
import '../styles/Footer.css'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
    &copy; Stewardship Exchange  ||  <a href="mailto:techissues@stewardshipexchange.com">techissues@stewardshipexchange.com</a>
  </footer>
);

export default Footer;
