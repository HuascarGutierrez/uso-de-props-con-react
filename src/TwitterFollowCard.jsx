import './TwitterFollowCard.css'

const followButton = ({followed}) => {
    return(
        followed? <button className='followed'>Followed</button>:
        <button className='follow'>Follow</button>
    )
}



export default function TwitterFollowCard({children, formato, profileName, nickname='unknown', profilePhoto, isFollowed}) {
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
                {followButton({followed: isFollowed})}
            </aside>
        </article>
    )
}