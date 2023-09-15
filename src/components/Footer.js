import React from 'react'

function Footer() {
  return (
    <div class="sm:h-[210px] h-full py-6 px-5 sm:py-[48px] sm:px-[41px] border-t bg-[#101828] flex   font-sans gap-5 flex-col">

      {/* top */}
      <div class=" w-full min-h-fit  flex flex-col sm:flex-row  justify-between items-center ">

        <div class="flex items-center gap-3">
          {/* <img src="/Footer/logo.png" alt="" class="h-[49px]" /> */}
          <h2 class="text-white font-semibold text-2xl">CodeSpot</h2>
        </div>
        <div class="flex flex-col sm:flex-row  h-full gap-3 text-[#D0D5DD]  items-center">
          <a class="hover:underline font-thin  text-sm  " href="/Docs">Docs</a>
          <a class="hover:underline font-thin  text-sm  " href="/Blogs">Blogs</a>
          <a class="hover:underline font-thin  text-sm  " href="/LiveProjects">Live Projects</a>
          <a class="hover:underline font-thin  text-sm  " href="/CookingProjects">Cooking Projects</a>
          <a class="hover:underline font-thin  text-sm  " href="/CookingProjects">Team</a>
          <a class="hover:underline font-thin  text-sm  " href="/CookingProjects">Contact</a>
        </div>

      </div>

      <hr class="border-gray-700" />

      {/* bottom */}
      <div class=" w-full  flex flex-col-reverse sm:flex-row   sm:justify-between items-center sm:gap-0 gap-4">
        <div class="  text-xs  text-[#D0D5DD] ">Copyright 2022-2023 @ CodeSpot</div>
        <div class="flex text-[#D0D5DD] gap-8">
          <a href="https://www.linkedin.com/" target="_blank"><img src="/Footer/linkdin.png" alt="" class="h-5 cursor-pointer" /></a>
          <a href="https://www.youtube.com/" target="_blank"> <img src="/Footer/Youtube.png" alt="" class="h-5 cursor-pointer" /></a>
          <a href="https://twitter.com/" target="_blank"> <img src="/Footer/Twitter.png" alt="" class="h-5 cursor-pointer" /></a>
          <a href="https://www.instagram.com/" target="_blank"><img src="/Footer/Instagram.png" alt="" class="h-5 cursor-pointer" /></a>
          <a href="https://github.com/" target="_blank"><img src="/Footer/Github.png" alt="" class="h-5 cursor-pointer" /></a>
        </div>
      </div>

    </div>
  )
}

export default Footer