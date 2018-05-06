import React from 'react'
import Avatar from 'components/Avatar';
import Logo from './about/logo.jpg';
import MailchimpForm from 'components/MailchimpForm';
import HeaderLink from 'components/HeaderLink';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import { Flex, Box } from 'reflexbox';
import { fonts } from 'css';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        
        <Flex flexColumn align="center">
           
          <h1 className="fade-in" style={{fontSize: '2em'}}> Lets ace our technical ingenuity </h1>
          <p>
            Articles, webcasts and tutorials to level up your skills on javascript frameworks and full stack development.
          </p>

          <Box mt={2}>
            <Avatar 
              src={Logo} 
              alt="Mind Meadows" 
            />
          </Box>
         {
           /*   
           NOTE: Rahul Srivastava 
           Need to work on creation of newsletter

            <Box my={2} flex flexColumn align="center">
              <p>Join the monthly newsletter and never miss a post.</p>
              <MailchimpForm inline />
            </Box>
          */
          }
        </Flex>

        <Flex mt={2} flexColumn>
          <h2 style={{
            fontFamily: fonts.primary,
            fontWeight: fonts.bold,
          }}>New? Start Here</h2>

          <HeaderLink to="blog/about-this-blog/">
            Learn more about this blog
          </HeaderLink>

          <HeaderLink to="now/">
            See what I'm up to Now.
          </HeaderLink>
        </Flex>
      </div>
    )
  }
}
