import React from 'react';
import '../../css/home/rang_fiza_video_home.css';
function Video(){
    return (
        <div className='container_1'>
            <div className='video-box'>
                <div className='image-wrapper'>
                    <img src='./assets/picture/video_1.png' className='video-image' alt='video_1'/>
                    <img src='./assets/logo/play-circle-fill.svg' className='play-button' alt='play_1'/>
                     </div>
                    <div className='text-overlay'>
                    <div className='text-head'>RANG</div>
                    <div className='text-below'>Summer'25</div>
                </div>
            </div>
            <div className='video-box'>
                <div className='image-wrapper'>
                <img src='./assets/picture/video_2.png' className='video-image' alt='video_2'/>
                <img src='./assets/logo/play-circle-fill.svg' className='play-button' alt='play_1'/>
                <div className='text-overlay'>
                <div className='text-head'>Fiza</div>
                <div className='text-below'>Spring'25</div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Video;