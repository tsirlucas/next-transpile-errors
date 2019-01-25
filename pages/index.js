import React from 'react';
import Router from 'next/router';

class Redirect extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/page1',
      });
      res.end();
    } else {
      Router.push('/page1');
    }
    return {};
  }
}

export default Redirect;
