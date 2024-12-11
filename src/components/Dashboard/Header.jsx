const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedIn', ''); // Clear localStorage
    props.changeUser(''); // Clear user state
  };

  const userName = props?.data?.firstName || 'Admin'; // Fallback to 'Admin' if data or firstName is undefined

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{userName} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="text-lg font-medium bg-red-600 rounded px-5 py-2"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
