import React from 'react'

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c'
}

export const MRight = ({ user, repo }) => {

  return (

    <div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-5'>

      {/* LEFT PROFILE */}

      <div className='bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden'>

        <div className='p-5'>

          <img
            src={user.avatar_url}
            alt={user.login}

            className='w-[100px] h-[100px] rounded-full border-2 border-blue-500'
          />

        </div>

        <div className='px-5 pb-5'>

          <h1 className='text-2xl font-bold'>
            {user.name || user.login}
          </h1>

          <h2 className='text-blue-400'>
            @{user.login}
          </h2>

          <p className='text-gray-400 mt-3'>
            {user.bio}
          </p>

          <div className='flex gap-3 mt-5'>

            <div className='flex-1 bg-[#0d1117] border border-[#21262d] rounded p-3 text-center'>
              <h1 className='font-bold text-blue-400'>
                {user.followers}
              </h1>

              <p className='text-xs text-gray-400'>
                Followers
              </p>
            </div>

            <div className='flex-1 bg-[#0d1117] border border-[#21262d] rounded p-3 text-center'>
              <h1 className='font-bold text-green-400'>
                {user.following}
              </h1>

              <p className='text-xs text-gray-400'>
                Following
              </p>
            </div>

            <div className='flex-1 bg-[#0d1117] border border-[#21262d] rounded p-3 text-center'>
              <h1 className='font-bold text-red-400'>
                {user.public_repos}
              </h1>

              <p className='text-xs text-gray-400'>
                Repos
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* RIGHT REPOS */}

      <div className='bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden'>

        <div className='border-b border-[#21262d] p-4 flex justify-between items-center'>

          <h1 className='font-semibold'>
            Repositories
          </h1>

          <span className='bg-[#0d1117] border border-[#21262d] rounded-full px-3 py-1 text-sm text-gray-400'>
            {repo.length}
          </span>

        </div>

        <div className='max-h-[520px] overflow-y-auto scrollbar-none p-3 flex flex-col gap-3'>

          {
            repo.map((i) => (

              <div
                key={i.id}

                className='bg-[#0d1117] border border-[#21262d] hover:border-blue-500 transition rounded-lg p-4'
              >

                <div className='flex justify-between gap-3'>

                  <a
                    href={i.html_url}
                    target='_blank'

                    className='text-blue-400 font-mono hover:underline'
                  >
                    {i.name}
                  </a>

                  <div className='flex gap-3 text-sm text-gray-400'>

                    <span>
                      ⭐ {i.stargazers_count}
                    </span>

                    <span>
                      🍴 {i.forks_count}
                    </span>

                  </div>

                </div>

                {
                  i.description &&
                  <p className='text-sm text-gray-400 mt-2'>
                    {i.description}
                  </p>
                }

                {
                  i.language &&
                  <div className='flex items-center gap-2 mt-3'>

                    <div
                      className='w-3 h-3 rounded-full'

                      style={{
                        backgroundColor:
                          LANG_COLORS[i.language] || "#8b949e"
                      }}
                    />

                    <span className='text-sm text-gray-400'>
                      {i.language}
                    </span>

                  </div>
                }

              </div>
            ))
          }

        </div>

      </div>

    </div>
  )
}