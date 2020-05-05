import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const About_Contact_Page = () => (
  <div>
    <div>
      <p>
        This about page is for anyone to read!
      </p>
    </div>
  </div>
);

export default About_Contact_Page;
