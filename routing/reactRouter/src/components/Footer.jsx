import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-800 text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-lg font-semibold mb-2">React Router Demo</p>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer