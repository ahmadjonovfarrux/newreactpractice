function Avatar({ user }) {
  return (
    <div className="flex gap-3 items-center ">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
          <img src={user.photoURL} />
        </div>
      </div>
      <h2>Hello, {user.displayName}</h2>
    </div>
  );
}

export default Avatar;
