const Header = ({ data }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedIn', ''); // Clear localStorage
    window.location.reload(); // Reload the app
  };

  const userName = data ? data.firstName : 'Admin'; // Default to 'Admin' if no data

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{userName} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='text-lg font-medium bg-red-600 rounded px-5 py-2'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;