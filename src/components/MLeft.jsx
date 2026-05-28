import React from 'react'

export const MLeft = ({
  userVal,
  setUserVal,
  setUserName
}) => {

  const handleSearch = () => {

    if (!userVal.trim()) return;

    setUserName(userVal);
    setUserVal("");
  }

  return (

    <div className='flex gap-3'>

      <input
        type="text"

        placeholder='Search GitHub username...'

        className='flex-1 bg-[#161b22] border border-[#21262d] focus:border-blue-500 outline-none px-4 py-3 rounded text-white'

        value={userVal}

        onChange={(e) => {
          setUserVal(e.target.value)
        }}

        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch()
          }
        }}
      />

      <button
        onClick={handleSearch}

        className='bg-[#161b22] border border-[#21262d] hover:bg-blue-500 hover:text-black transition px-5 py-3 rounded font-semibold cursor-pointer'
      >
        Search
      </button>

    </div>
  )
}