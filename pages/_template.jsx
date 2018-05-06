import React, { Component } from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import NavBar from '../components/NavBar';
import { config } from 'config'
import Helmet from "react-helmet"
import 'css/index.scss'
import '../favicon.ico';

import { rhythm } from '../utils/typography'

export default class MainLayout extends Component { 
  render () {
    //make amendments to the header basis the route
    const route = this.props.location.pathname;
    
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": " Lets ace our technical ingenuity - A blog about programming and life."},
            {"name": "keywords", "content": "Programming, blog, design, Javascript, React, Redux, Dot Net"},
          ]}
          link={[
                { rel: 'shortcut icon', type: 'image/png', href: 'favicon.ico' }
            ]}
        />
        <NavBar />
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  }
}
