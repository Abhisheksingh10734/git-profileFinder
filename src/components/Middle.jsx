import React from 'react'
import { MLeft } from './MLeft'
import { MRight } from './MRight'

export const Middle = ({
  user,
  repo,
  loading,
  error,

  userVal,
  setUserVal,
  setUserName
}) => {

  return (

    <div className='flex-1 max-w-[1080px] w-full mx-auto p-5 flex flex-col gap-5 mt-12'>

      <MLeft
        userVal={userVal}
        setUserVal={setUserVal}
        setUserName={setUserName}
      />

      {
        loading ? (
          <h1 className='text-center text-gray-400'>
            Loading...
          </h1>
        ) : error ? (
          <h1 className='text-center text-red-400'>
            {error}
          </h1>
        ) : (
          user &&
          <MRight user={user} repo={repo} />
        )
      }

    </div>
  )
}