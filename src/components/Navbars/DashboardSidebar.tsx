import React from 'react';
import { Component } from 'react';

import '../../assets/css/sidenav.css';

import { Navbar, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { console.log, configureAnchors } from 'react-scrollable-anchor';

import {
  GithubOutlined,
  CopyrightOutlined,
  TwitterOutlined
} from '@ant-design/icons';

class DashboardSidebar extends Component {
  constructor(props: any) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  onSelect(e: any) {
    console.log('onSelect');
  }

  toggleNav() {
    console.log('toggle..');
  }

  render() {
    // configureAnchors({ scrollDuration: 1000 });
    return (
      <Navbar className='home'>
        <Card className='card'>
          <Card.Img
            // src={require('./../../assets/signature.png')}
            variant='top'
            className='sig'
          />

          <Card.Body>
            <Card.Text>
              <div className='space'></div>
              <ListGroup variant='flush'>
                <ListGroupItem className='list'>
                  <span className='link' onClick={() => console.log('section1')}>
                    Home
                  </span>
                </ListGroupItem>
                <ListGroupItem className='list'>
                  <span className='link' onClick={() => console.log('section2')}>
                    About
                  </span>
                </ListGroupItem>
                <ListGroupItem className='list'>
                  <span className='link' onClick={() => console.log('section3')}>
                    Portfolio
                  </span>
                </ListGroupItem>
                <ListGroupItem className='list'>
                  <span className='link' onClick={() => console.log('section4')}>
                    Contact
                  </span>
                </ListGroupItem>
              </ListGroup>
            </Card.Text>
            <div className='spaces'></div>
            <ListGroup horizontal>
              <ListGroup.Item className='li'>
                <a href='https://github.com/AntCon97' className='link'>
                  <GithubOutlined />
                </a>
              </ListGroup.Item>
              <ListGroup.Item className='li'>
                <a href='https://twitter.com' className='link'>
                  <TwitterOutlined />
                </a>
              </ListGroup.Item>
              <ListGroup.Item className='li'>
                <a
                  href='https://en.wikipedia.org/wiki/Copyright'
                  className='link'
                >
                  <CopyrightOutlined />
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Navbar>
    );
  }
  componentDidMount() {}
}

export default DashboardSidebar;
