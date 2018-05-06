import React, { Component, PropTypes } from 'react';
import Headroom from 'react-headroom';
import NavLink from '../NavLink';
import Logo from '../Logo';
import MediaQuery from 'react-responsive';
import { rhythm } from '../../utils/typography';
import { Flex, Box } from 'reflexbox';
import './NavBar.scss';
import LogoImage from '../../pages/about/logo.jpg';
import { colors, fonts } from 'css';

class NavBar extends Component {
  render() {
    return (
      <Headroom
        wrapperStyle={{
          marginBottom: rhythm(1),
        }}>
        <div className="siteHead">
        <span className="siteLogo" style={{
          fontWeight: fonts.xThin,
          marginLeft: 20
        }}><img src={LogoImage} /></span>

          <Logo /> </div>
        <div className="topNav">
          <Box className="topNav-separator" flexAuto />
          <Flex>
            <Box px={1}>
              <NavLink to="/blog/">Blog</NavLink>
            </Box>
            <Box px={1}>
              <NavLink to="/about/">Authors</NavLink>
            </Box>
            {
              /*
              Rahul Srivastava: Add additional routes here

              <Box px={1}>
                <NavLink to="/now/">Now</NavLink>
              </Box>
              <Box px={1}>
                <NavLink to="/principles/">Principles</NavLink>
              </Box>*/
            }
          </Flex>
        </div>
      </Headroom>
    );
  }
}
export default NavBar;
