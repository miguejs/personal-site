import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import ProfilePicture from "../images/profile-picture.jpg"


const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 50vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: "Fira Code";
  text-align: justify;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`
const Link = styled.a`
  color: black;
  margin-right: 1rem;
  display: inline-block;
  position: relative;
`
const HeaderContainer =  styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const ProfileImage =  styled.img`
  border-radius: 50%;
  height: 200px;
  width: 200px;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
            description
            links {
              title
              link
            }
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <HeaderContainer>
            <NameHeader>{data.site.siteMetadata.title}</NameHeader>
            <ProfileImage src={ProfilePicture} alt="Miguel Garcia Profile Picture" />
          </HeaderContainer>
          <Description> {data.site.siteMetadata.description} </Description>
          {
            data.site.siteMetadata.links.map( ({ title, link }) => 
              <Link key={title} href={link}>{ title}</Link>
            )
          }
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
