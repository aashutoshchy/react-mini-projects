import React from 'react'

function About() {
  return (
    <div className='w-full bg-red-950 flex-1 object-contain overflow-hidden static'>
      <img src="src\assets\AboutPageBG.png" alt="" />
      <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQpRXequAZvM0tmrfOFpAvh33mXMoIpOFUKYwZDe4zq6e6hqPIp_6IT4mbUx0kUGKfD40HKX87XQ6G8O7g" alt="" />
      <div className='absolute'>
        <div className='text-white absolute w-1/4'>
          Roseanne Park, known mononymously as Rosé, is a New Zealand and South Korean singer.
        </div>
        <div className="text-white absolute w-1/4">
          Born in New Zealand and raised in Australia, Rosé moved to South Korea and signed with label YG Entertainment following a successful audition in 2012.
        </div>
      </div>
    </div>
  )
}

export default About
