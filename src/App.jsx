import React, {useState} from 'react'
import TwitterFollowCard from './TwitterFollowCard'
import './App.css'

const formatUserNames = (nickname) => `@${nickname}`

const formatedUserNames = ({nickname}) => {
    return (
        <span>@{nickname}</span>
    )
}

const newUser = {formato: formatedUserNames, profilePhoto:'/RN.jpg', nickname:'flaquito', isFollowed:false}

export default function App() {

    const changeName = () => {
        setData(data +1);
        console.log(data);
    }

    const [data, setData] = useState(0);

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
        isFollowed={false}>
        Huascar Aaron
        </TwitterFollowCard>

        <TwitterFollowCard formato={formatedUserNames} profilePhoto={'/RN.jpg'} nickname={"donCamaron"}
        isFollowed={true}>
        Don Camaron
        </TwitterFollowCard>

        <TwitterFollowCard formato={formatedUserNames} profilePhoto={'/RN.jpg'}
        isFollowed={false}>
        Perry el Ornitorinco
        </TwitterFollowCard>
        
        <TwitterFollowCard {...newUser}>
        el flaquito malo
        </TwitterFollowCard>
        </section>

        <button onClick={changeName}>cambio de nombre</button>
    </>
  )
}
