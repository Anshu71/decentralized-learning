import Navbarw from '../../../components/Navbarw';
import Prevnav from '../../../components/Prevnav';
import React, { useState } from 'react';
import YouTube from 'react-youtube';

function Thecodeweb() {
    const [videoState, setVideoState] = useState({
        videoId: 'kUMe1FH4CHE', 
        player: null,
        startSeconds: 56,
        endSeconds: 30, 
    });

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            start: videoState.startSeconds,
            end: videoState.endSeconds,
            autoplay: 1, 
        },
    };

    const onReady = (event) => {
        setVideoState({ ...videoState, player: event.target });
    };

    const onPlayVideo = () => {
        videoState.player.playVideo();
    };
    return (
        <div className='bg-[#101828]'>
            <Navbarw />
            <Prevnav />
            <div className="mx-[23rem] p-4 shadow-lg  justify-center items-center" >
                <div className="relative aspect-w-16 aspect-h-9">
                    <YouTube videoId={videoState.videoId} opts={opts} onReady={onReady} />
                </div>
                <div className="flex flex-col justify-between items-center mt-4 text-center">
                    <button
                        onClick={onPlayVideo}
                        className="mt-5 inline-flex text-white bg-[#01105F] shadow-base shadow-sky-500 border-sky-500 border-y-2 py-2 px-6 focus:outline-none rounded-3xl text:base md:text-lg hover:bg-blue-700 mb-10"
                    >
                        Play Video
                    </button>
                </div>
            </div>

            <div class="flex justify-center">
                <button class="inline-flex text-white bg-[#01105F] shadow-base shadow-sky-500 border-sky-500 border-y-2 py-2 px-6 focus:outline-none rounded-3xl text:base md:text-lg hover:bg-blue-700 mb-10"><a target="_blank" href="https://www.youtube.com/watch?v=kUMe1FH4CHE">Full Youtube Link</a></button>
            </div>

        </div>


    )
}

export default Thecodeweb;