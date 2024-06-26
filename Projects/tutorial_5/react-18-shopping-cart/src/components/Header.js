import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart </h1>
        </a>
      </div>
      <div className="right-align">
        <a href="#/cart">
          Cart{'   '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a> {/* Added space between SignIn and <a> tag */}
      </div>
    </header>
  );
}
