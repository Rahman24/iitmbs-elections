const Profile = ({ userName = "", email ="", house="" }) => {
  return (
    <div className="user-profile text-center">
      <h2 className="text-uppercase">{userName}</h2>
      <p className="text-lowercase">{email}</p>
      <h5 className="">{house}</h5>
    </div>
  )
}
export default Profile;