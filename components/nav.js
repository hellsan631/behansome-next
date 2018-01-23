import Head from './head';
import React from 'react'
import Link from 'next/link';
import { Fields } from '../libs/FieldsStore';
import {observer} from 'mobx-react';
import ActiveLink from './ActiveLink';

const Nav = observer(class Nav extends React.Component {
  render() {
    return <nav>
      <ul>
        <li>
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li>
        <ul>
          {Fields.docs.map(
            ({ id, data }) => (
              <li key={id}>
                <ActiveLink
                  href={{ pathname: '/category', query: { name: data.name } }}
                >
                  {data.name}
                </ActiveLink>
              </li>
            )
          )}
        </ul>
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          font-size: 13px;
          text-decoration: none;
          color: #067df7;
        }
      `}</style>
    </nav>;
  }
});

export default Nav;
