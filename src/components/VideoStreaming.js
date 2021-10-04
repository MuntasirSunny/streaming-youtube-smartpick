import React, { useState } from "react";
import {
    BrowserView,
    MobileView
} from "react-device-detect";
import ReactPlayer from 'react-player';

function VideoStreaming() {

    const [show, setShow] = useState(false);
    const [data, setData ] = useState(true);
    const [quiz, setQuiz] = useState(true);
    const [videoEnd, setVideoEnd] = useState(false);

    const handleVideoEnd = () => {
        console.log('ended');
        setShow(true);
      }
    
      const getalert = () => {
          //alert('called');
          //setSteps(2);
        //alert('Please watch this video before moving to the next step!')
        if (videoEnd){
            alert('Success!!')
          } else {
            alert('Please watch this video before moving to the next step!')
          }
      }
    
      const proceed = () => {
          //console.log(quiz)
          if (videoEnd){
            alert('Success!! Next Page')
          } else {
            alert('Please watch this video before moving to the next step!')
          }

          //quiz == 'true' ? console.log('ok') : console.log('not ok')
        //   if(sessionstatus == 'DONE' && experienceid == id){
        //     //return to thanks
        //     if(coupon_code == 'BVB01skSmrtPk'){
        //       quiz == 'true' ? setSteps(2) : setSteps(3);
        //     }
        //     else{
        //       alert('You have already submitted the form');
        //       history.push({
        //             pathname: '/thanks'
        //           });
        //       return;
        //     }
        //   }
        //   else{
        //     quiz == 'true' ? setSteps(2) : setSteps(3);
        //   }
    
      }
    
      const playPause = () => {
        var myVideo = document.getElementById("vid");
        var playButton = document.getElementById("playButton");
        if (myVideo.paused)
        {
          myVideo.play();
          playButton.style.display = "none";
        }
        else
        {
          myVideo.pause();
          playButton.style.display = "block";
        }
      }


    return (
    <div>
        <div className="container">
            <h2 className="h5 mb-3" style={{textAlign: 'center', paddingBottom: 30, paddingLeft: 10, paddingRight: 10, zIndex: 1}}>প্রোডাক্ট</h2>
        </div>
        <div style={{display: "flex", paddingTop: 10,justifyContent: 'center', alignItems: 'center'}}>
            <div id="playButton" onClick={playPause} style={{ justifyContent: 'center'}}></div>
            <BrowserView>
                <ReactPlayer 
                    url='https://www.youtube.com/embed/1miPERr029E'
                    onEnded={()=>{setVideoEnd(true); console.log("ENDED")}}
                />
            </BrowserView>
            <MobileView>
                <ReactPlayer 
                        url='https://www.youtube.com/embed/1miPERr029E'
                        width='560'
                        height='315'
                        onEnded={()=>{setVideoEnd(true); console.log("ENDED")}}
                    />
            </MobileView>
        </div>
        <div style={{display: "flex", paddingTop: 10,justifyContent: 'center', alignItems: 'center'}}>
        <h2 className="h5 mb-3 mt-3" style={{fontSize: 13, paddingLeft: 20, zIndex: 1}}>*পরবর্তী অংশে যাবার আগে ভিডিওটি পুরো দেখুন</h2>
        </div>
        <div style={{display: "flex", paddingTop: 10,justifyContent: 'center', alignItems: 'center'}}>
        {show ? (<div className="row justify-content-end" style={{paddingTop: 10, paddingBottom: 10}}>
            {quiz == 'true' ?
            <button type="button" onClick={proceed}>পরবর্তী</button> :
            <button to="#" onClick={proceed} className="btn btn-outline-info btn next" style={{ zIndex: 1, marginBottom: 20}}>পরবর্তী</button>
            }

        </div>) : <div className="row justify-content-end" style={{ paddingTop: 10, paddingBottom: 10}} data-title="Finish watching the video to go to the next step">
            <button to="#" className="btn btn-outline-info btn-outline-info-cobra next22" style={{ zIndex: 1, marginBottom: 20}} onClick={getalert} >পরবর্তী</button>
        </div>}
        </div>
    </div>
    )
};

export default VideoStreaming;
