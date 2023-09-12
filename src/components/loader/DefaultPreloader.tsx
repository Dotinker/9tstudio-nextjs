import React, { useEffect, useState } from "react";

export default function DefaultPreloader() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
   
      <div
      suppressHydrationWarning={true}
        className="preloader-wrap"
        data-firstline="Stay"
        data-secondline="Relaxed"
      >
        <div className="outer"     >
          <div className="inner">
            <div className="trackbar">
              <ul className="preloader-intro">
                <li className="preloader-list">bold</li>
                <li className="preloader-list">brave</li>
                <li className="preloader-list">iconic</li>
                <li className="preloader-list">simple</li>
                <li className="preloader-list">louder</li>
              </ul>
              <div className="loadbar"></div>
            </div>
         
            <div className="percentage-wrapper">
            
              <div suppressHydrationWarning={true} className="percentage" id="precent"  ></div>
          
            </div>
        
            <div className="percentage-intro">Please Wait</div>
          </div>
        </div>
      </div>
     
      <div suppressHydrationWarning={true} id="app"></div>
    </>
  );
}
