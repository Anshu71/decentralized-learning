import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Navbarw from '../../components/Navbarw';

function WebHtml() {
    return (
        <div>
        <Navbarw />
        <section class="text-[#D0D5DD] body-font bg-[#101828]">
            <div class="centre container mx-52 px-5 py-24 items-center flex flex-wrap">
                <img class="lg:w-1/6 mb-2 object-cover object-center rounded" alt="hero" src="images/html.jpg" />
                <div class="md:w-3/5 md:pl-6">
                <h2 class="sm:text-3xl text-2xl text-[] font-medium title-font mb-2 md:w-2/5">HTML</h2>
                    <p class="leading-relaxed text-base">HTML, short for Hypertext Markup Language, is the foundational language of the web. It uses tags to structure and present content, such as headings, paragraphs, links, and images. By combining these tags, HTML allows for the creation of interactive and visually appealing websites.</p>
                </div>
            </div>





        </section>
        </div>
    )
}

export default WebHtml;