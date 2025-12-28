import React from 'react'

const Card = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      <div className="flex flex-col items-center pb-10 pt-10 px-6">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="User Profile"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">John Doe</h5>
        <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">Software Engineer</span>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Age: 28</span>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          Passionate about building scalable web applications and exploring new technologies.
          Always eager to learn and share knowledge with the community.
        </p>
      </div>
    </div>
  )
}

export default Card
