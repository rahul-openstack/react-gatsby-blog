import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import access from 'safe-access';
import { prune, include as includes } from 'underscore.string';
import { Container } from 'react-responsive-grid';
import HeaderLink from 'components/HeaderLink';
import Date from 'components/Date';
import ReadTime from 'react-read-time';
import { Flex, Box } from 'reflexbox';
import { colors, fonts } from 'css';
import Helmet from 'react-helmet';
import { slide as Menu } from 'react-burger-menu'

function sortByDate(posts) {
  return sortBy(posts, post => access(post, 'data.date')).reverse();
}

const BlogIndex = (props) => {
  const featuredLinks = [];
  const pageLinks = [];
  let body;
  let title;
  const blogPosts = filter(props.route.pages, page => includes(page.data.layout, 'post') && !page.data.draft);
  const featuredPages = sortByDate(filter(blogPosts, page => access(page, 'data.featured')));
  const normalPosts = filter(blogPosts, page => !access(page, 'data.featured'));
  const sortedPages = sortByDate(normalPosts);
  let showSettings = (e) => {
    //debugger;
    e.currentTarget.parentNode.parentNode.parentNode.previousSibling.click();
  };

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  // page.data.tags : to display different sections

  featuredPages.forEach(page => {
    if (access(page, 'file.ext') === 'md') {
      title = access(page, 'data.title') || page.path;

      featuredLinks.push(
        <li
          key={page.path}
          style={{
            marginBottom: rhythm(1/4),
          }}
        >
          <HeaderLink to={page.path} style={{marginBottom: 0}}>{title}</HeaderLink>
          <Flex mt={1} mb={3}>
            <Box mr={1}>
              <Date time={page.data.date} />
            </Box>
            <Box>
              <ReadTime content={page.data.body} style={{
                color: colors.lightGray, 
                fontSize: fonts.small
              }} />
            </Box>
          </Flex>
        </li>
      );
    }
  });

  sortedPages.forEach((page) => {
    if (access(page, 'file.ext') === 'md') {
      title = access(page, 'data.title') || page.path;

      pageLinks.push(
        <li
          key={page.path}
          style={{
            marginBottom: rhythm(1/4),
          }}
        >
          <HeaderLink to={page.path} style={{marginBottom: 0}}>{title}</HeaderLink>
          <Flex mt={1} mb={3}>
            <Box mr={1}>
              <Date time={page.data.date} />
            </Box>
            <Box>
              <ReadTime content={page.data.body} style={{
                color: colors.lightGray, 
                fontSize: fonts.small
              }} />
            </Box>
          </Flex>
        </li>
      );
    }
  });

  return (
    <div>
       <Menu styles={ styles } >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={showSettings} className="menu-item--small">Settings</a>
      </Menu>
      <Helmet title="Mind Meadows | Blog" />
     
      <h1 style={{textAlign: 'center'}}>Featured</h1>
      <ul
        style={{
          listStyleType: 'none',
          marginTop: rhythm(1),
          marginLeft: 0,
        }}
      >
        {featuredLinks}
      </ul>
      <h1 style={{textAlign: 'center'}}>Latest</h1>
      <ul
        style={{
          listStyleType: 'none',
          marginTop: rhythm(1),
          marginLeft: 0,
        }}
      >
        {pageLinks}
      </ul>
    </div>
  );
};

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

export default BlogIndex;
