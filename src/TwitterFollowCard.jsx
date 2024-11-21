import './TwitterFollowCard.css'

const followButton = ({followed}) => {
    return(
        followed? <button className='followed'>Followed</button>:
        <button className='follow'>Follow</button>
    )
}



export default function TwitterFollowCard({formato, profileName, nickname, profilePhoto, isFollowed}) {
    return (
        <article>
            <header>
            <img src={profilePhoto} alt="profile photo" />
            <div>
                <strong>{profileName}</strong>
                {/**<span>{funcion(nickname)}</span> */}
                {formato(nickname={nickname})}
            </div>
            </header>
            <aside>
                {followButton({followed: isFollowed})}
            </aside>
        </article>
    )
}