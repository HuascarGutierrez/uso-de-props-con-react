import { useState } from 'react'
import './TwitterFollowCard.css'

export default function TwitterFollowCard({children, formato, profileName, nickname='unknown', profilePhoto, isFollowed}) {

    const [isFollowing,setIsFollowing] = useState(isFollowed)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    const followButton = ({followed}) => {
        return(
            followed? <button className='followed' onClick={handleClick}>Followed</button>:
            <button className='follow' onClick={handleClick}>Follow</button>
        )
    }

    return (
        <article>
            <header>
            <img src={profilePhoto} alt="profile photo" />
            <div>
                <strong>{children}</strong>
                {/**<span>{funcion(nickname)}</span> */}
                {formato(nickname={nickname})}
            </div>
            </header>
            <aside>
                {followButton({followed: isFollowing})}
            </aside>
        </article>
    )
}