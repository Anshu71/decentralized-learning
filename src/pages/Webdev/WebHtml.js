import React, { useState } from 'react';
import Navbarw from '../../components/Navbarw';

function WebHtml() {
    const [tasks, setTasks] = useState([
        {
            parent: 'Getting Started',
            children: [
                { Title: 'The Core Web Technology', link: '/Html/thecodeweb' },
                { Title: 'What is HTML?', link: '/Thecoreweb' },
            ],
        },
        {
            parent: 'HTML Code',
            children: [
                { Title: 'The Core Web Technology', link: '/Thecoreweb' },
                { Title: 'What is HTML?', link: '/Thecoreweb' },
            ],
        },
    ]);

    const [openParentIndex, setOpenParentIndex] = useState(null);

    const toggleDropdown = (index) => {
        if (openParentIndex === index) {
            // Clicking on the same parent again will close it
            setOpenParentIndex(null);
        } else {
            setOpenParentIndex(index);
        }
    };

    return (
        <div>
            <Navbarw />
            <section className="text-[#D0D5DD] body-font bg-[#101828] py-10">
                <div className="centre ml-52 px-5 py-14 items-center flex flex-wrap">
                    <img
                        className="lg:w-1/6 mb-2 object-cover object-center rounded"
                        alt="hero"
                        src="images/html.jpg"
                    />
                    <div className="md:w-3/5 md:pl-6">
                        <h2 className="sm:text-3xl text-2xl text-[] font-medium title-font mb-2 md:w-2/5">
                            HTML
                        </h2>
                        <p className="leading-relaxed text-base">
                            HTML, short for Hypertext Markup Language, is the foundational
                            language of the web. It uses tags to structure and present content,
                            such as headings, paragraphs, links, and images. By combining these
                            tags, HTML allows for the creation of interactive and visually
                            appealing websites.
                        </p>
                    </div>
                </div>

                <div className=" mx-80 ">
                    {tasks.map((task, index) => (
                        <div className='py-2 text-center mx-auto' key={index}>
                            <button
                                onClick={() => toggleDropdown(index)}
                                className="w-11/12 text-lg mb-2   text-white bg-[#01105F] shadow-base shadow-sky-500 border-sky-500 border-y-2 py-2 px-6 focus:outline-none rounded-3xl text:base md:text-lg hover:bg-blue-700 "
                            >
                                {task.parent}
                            </button>
                            <div
                                className={`${openParentIndex === index ? 'block' : 'hidden'
                                    } transition-all duration-500 ease-in-out`}
                            >
                                <ul className="p-4 gap-5 ">
                                    {task.children.map((child, childIndex) => (
                                        <a key={childIndex} href={child.link}>
                                            <li
                                                className="border-1 rounded-3xl mx-10  hover:underline cursor-pointer bg-[#475467] mb-2 text-[#E0EAFF] border-white py-1 px-2 focus:outline-none  md:mt-0 hover:bg-[#475467] hover:text-[#E0EAFF] text-lg"
                                            >
                                                {child.Title}
                                            </li>
                                        </a>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default WebHtml;
