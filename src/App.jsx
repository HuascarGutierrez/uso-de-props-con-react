import React from 'react'
import TwitterFollowCard from './TwitterFollowCard'
import './App.css'

const formatUserNames = (nickname) => `@${nickname}`

const formatedUserNames = ({nickname}) => {
    return (
        <span>@{nickname}</span>
    )
}

export default function App() {

    return (
    <>
        <section className='users'>
        {/**<TwitterFollowCard funcion={formatUserNames} profilePhoto={'/RN.jpg'} nickname={"choquito"}
        profileName={'Huascar Aaron'}
        isFollowed={false}/>

        <TwitterFollowCard funcion={formatUserNames} profilePhoto={'/RN.jpg'} nickname={"chefcoder"}
        profileName={'Mr chef coder baker'}
        isFollowed={true}/>

        <TwitterFollowCard funcion={formatUserNames} profilePhoto={'/RN.jpg'} nickname={"donDimadon"}
        profileName={'Don dimadon dueño del domodin de Dynsdale'}
        isFollowed={true}/> */}

        <TwitterFollowCard formato={formatedUserNames} profilePhoto={'/RN.jpg'} nickname={"choquito"}
        profileName={'Huascar Aaron'}
        isFollowed={false}/>

        <TwitterFollowCard formato={formatedUserNames} profilePhoto={'/RN.jpg'} nickname={"chefcoder"}
        profileName={'Mr chef coder baker'}
        isFollowed={true}/>

        <TwitterFollowCard formato={formatedUserNames} profilePhoto={'/RN.jpg'} nickname={"donDimadon"}
        profileName={'Don dimadon dueño del domodin de Dynsdale'}
        isFollowed={true}/>
        </section>
    </>
  )
}
