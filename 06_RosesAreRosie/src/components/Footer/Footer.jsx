import React from 'react'

function Footer() {
  return (
    <footer className='fixed bottom-0 py-2 w-full bg-white text-gray-800 flex flex-col items-center justify-center'>
      <ul className='mt-2 my-1 flex gap-2 md:gap-10 items-center justify-center'>
        <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
        <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href=""><i class="fa-brands fa-spotify"></i></a></li>
        <li><a href=""><i class="fa-brands fa-apple music"></i></a></li>
        <li><a href=""><i class="fa-brands fa-tiktok"></i></a></li>
      </ul>
      <div>
        <p className='font-serif text-[12px] md:text-sm'>© 2026 Rosie Posie Did It Again.</p>
      </div>
    </footer>
  )
}

export default Footer
