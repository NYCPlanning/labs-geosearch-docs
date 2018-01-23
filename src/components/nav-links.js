import React from 'react';
import Link from 'gatsby-link';

const links = [
  {
    text: 'About',
    url: '/',
  },
  {
    text: 'Docs',
    url: '/docs/',
  },
  {
    text: 'Feedback',
    url: '/feedback/',
  },
];

const linksList = links.map((link) => {
  return (<li key={link.text}><Link exact to={link.url} activeClassName="is-active">{link.text}</Link></li>)
})

const NavLinks = (props) => (
  <ul className={`no-bullet ${props.ulClasses}`}>{linksList}</ul>
)

export default NavLinks
