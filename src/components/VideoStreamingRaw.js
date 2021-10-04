import React, { useState } from "react";
import {
    BrowserView,
    isIOS, MobileView
} from "react-device-detect";


function VideoStreamingRaw() {

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
        <div className="AppBebe">
      <section className="bg-secondary">
        <div className="container">
            <div className="d-flex justify-content-center mb-3">
              <h2 className="h5 mb-3" style={{textAlign: 'center', paddingBottom: 30, paddingLeft: 10, paddingRight: 10, zIndex: 1}}>৩টি সহজ ধাপে আপনার প্রোডাক্টটি  নিন</h2>
            </div>
            <div style={{display: "flex", paddingTop: 10,justifyContent: 'center', alignItems: 'center'}}>
              <div id="playButton" className="playButton" onClick={playPause}></div>
              <BrowserView>
                {/* <video muted id="vid" onEnded={() => handleVideoEnd()} style={{zIndex: 1}} onClick={playPause}>
                    {data ? <source src={data.video ? BASE_URL+"experience/video/"+videoWebWatch : ''} type="video/mp4" /> : <div></div>}
                </video> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1miPERr029E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"
                onEnded={()=> console.log("ENDED")}
                ></iframe>
                   

              </BrowserView>
              <MobileView>
                  {isIOS? 
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/1miPERr029E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/1miPERr029E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen={true} onEnded={() => handleVideoEnd()} onClick={playPause}></iframe>
                    }
              </MobileView>

            </div>
            <div className="row justify-content-md-center">
              <h2 className="h5 mb-3 mt-3" style={{fontSize: 13, paddingLeft: 20, zIndex: 1}}>*পরবর্তী অংশে যাবার আগে ভিডিওটি পুরো দেখুন</h2>
            </div>
            {/* <div className="col-lg-10 offset-lg-1">
              {show ? (<div className="row justify-content-end" style={{paddingTop: 10, paddingBottom: 10}}>
                {quiz == 'true' ?
                  <Link to="#" onClick={proceed} className="btn btn-outline-info btn next" style={{ zIndex: 1, marginBottom: 20}}>পরবর্তী</Link> :
                  <Link to="#" onClick={proceed} className="btn btn-outline-info btn next" style={{ zIndex: 1, marginBottom: 20}}>পরবর্তী</Link>
                }

              </div>) : <div className="row justify-content-end" style={{ paddingTop: 10, paddingBottom: 10}} data-title="Finish watching the video to go to the next step">
                <Link to="#" className="btn btn-outline-info btn-outline-info-cobra next22" style={{ zIndex: 1, marginBottom: 20}} onClick={getalert} >পরবর্তী</Link>
              </div>}
            </div> */}
        </div>

      </section>
    </div>
    )
}

export default VideoStreamingRaw;
