function UserProfile() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl sm:p-4 max-w-xs md:p-8 md:max-w-sm mx-auto my-12 shadow-2xl transition-all duration-300 transform hover:shadow-xl border border-transparent hover:border-blue-500">
      <img className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto mb-4 object-cover transition-transform duration-300 ease-in-out hover:scale-110"  src="https://via.placeholder.com/150" alt="User" />
      <h1 className="text-center font-bold text-slate-900 md:text-xl dark:text-white text-2xl sm:text-lg mt-4 mb-2 hover:text-blue-500">John Doe</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;