export default function Friend({friend}){
    // console.log(friend)
        const {name,email,username}=friend
    return(
        <div className="box">
            <h3>Friend Name:{name}</h3>
            <p>Email:{email}</p>
            <p>UserName:{username}</p>
            
        </div>
    )
}