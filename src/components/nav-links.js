import React from 'react'
import Link from 'gatsby-link'

const links = [
  {
    text: 'About',
    url: '/about/',
  },
  {
    text: 'Projects',
    url: '/projects/',
  },
  {
    text: 'Process',
    url: '/process/',
  },
  {
    text: 'Contact',
    url: '/contact/',
  },
];

const linksList = links.map((link) => {
  if (link.text === 'Blog') return (<li key={link.text}><a href={link.url}>{link.text}</a></li>)
  return (
    <li key={link.text}>
      <Link
          to={link.url}
          activeClassName="is-active"
        >
        {link.text}
      </Link>
    </li>
  )
})

const NavLinks = (props) => (
  <ul className={`no-bullet ${props.ulClasses}`}>
    {linksList}
  </ul>
)

export default NavLinks
