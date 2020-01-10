// import font from './font'

export default function svg (text) {
  let halfway = Math.floor(text.length / 2)
  const before = text.lastIndexOf(' ', halfway)
  const after = text.indexOf(' ', halfway + 1)
  halfway = (halfway - before < after - halfway) ? before : after

  const line1 = text.substr(0, halfway)
  const line2 = text.substr(halfway + 1)

  return `<?xml version="1.0" encoding="utf-8"?>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 1750 341" style="enable-background:new 0 0 1750 341;" xml:space="preserve">
     <style type="text/css">
       
       .st0{fill:url(#SVGID_1_);}
       .st1{fill:#FFFFFF;}
       .st2{fill:#353949;}
       .st3{fill:url(#SVGID_2_);}
     </style>
     <defs>
     </defs>
     <g>
       <text transform="matrix(1 0 0 1 975.806 69.4859)"><tspan x="0" y="0" style="fill:#979AA4; font-family:'Manrope-Medium'; font-size:68.0757px; letter-spacing:-2;">${line1}</tspan><tspan x="0" y="70" style="fill:#979AA4; font-family:'Manrope-Medium'; font-size:68.0757px; letter-spacing:-2;">${line2}</tspan></text>
       <g>
         <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="122.7419" y1="-17.15" x2="40.2278" y2="170.5804">
           <stop  offset="0" style="stop-color:#F29027"/>
           <stop  offset="0.2356" style="stop-color:#EC8027"/>
           <stop  offset="0.6924" style="stop-color:#DD5727"/>
           <stop  offset="1" style="stop-color:#D13827"/>
         </linearGradient>
         <path class="st0" d="M143.1,160.1H17c-9.4,0-17-7.6-17-17V17C0,7.6,7.6,0,17,0h126.1c9.4,0,17,7.6,17,17v126.1
           C160.1,152.4,152.4,160.1,143.1,160.1z"/>
         <g>
           <path class="st1" d="M130.6,94.2l6.2,7.9c-16.2,13.4-34.4,20.3-56.7,20.3c-22.3,0-40.6-6.9-56.7-20.3l6.2-7.9
             c16,11.4,29.1,16.6,50.5,16.6S114.6,105.6,130.6,94.2"/>
           <path class="st1" d="M53.1,45.7h17.8v17H54.6c-10.2,0-16.9-2.5-21.3-12.4l6.8-3.9c3.1,6.3,6.8,7.8,13.1,7.8V45.7z"/>
           <rect x="95.1" y="45.7" class="st1" width="17.8" height="17"/>
         </g>
       </g>
       <g>
         <path class="st2" d="M240.5,56.3c3.8,0,7.3,1.2,10.3,3.5c3,2.4,5.1,5.6,6.4,9.7l19.2-5.2c-1.8-8-5.9-14.3-12.3-19.1
           c-6.4-4.7-14.2-7.1-23.3-7.1c-8,0-14.9,1.8-20.9,5.5c-6,3.6-10.6,8.6-13.9,15c-3.3,6.4-4.9,13.6-4.9,21.6c0,8,1.6,15.2,4.8,21.6
           c3.2,6.4,7.8,11.4,13.7,15.1c5.9,3.6,12.9,5.5,21,5.5c9.2,0,16.8-2.2,23-6.7c6.2-4.5,10.5-10.9,12.8-19.3l-19.6-4.3
           c-1.4,4.1-3.3,7.2-5.8,9.2c-2.5,2-6,3-10.4,3c-6.1,0-10.8-2.2-14.1-6.6c-3.3-4.4-4.9-10.2-4.9-17.5c0-7.2,1.6-13,4.8-17.4
           C229.4,58.5,234.2,56.3,240.5,56.3z"/>
         <path class="st2" d="M338.2,43.6c-6.2-3.6-13.2-5.4-21-5.4c-7.7,0-14.6,1.8-20.7,5.3c-6.1,3.5-10.9,8.5-14.3,14.9
           c-3.4,6.4-5.1,13.7-5.1,21.9c0,8.2,1.7,15.4,5,21.8c3.3,6.3,8.1,11.3,14.2,14.9c6.1,3.6,13,5.4,20.8,5.4c7.9,0,14.9-1.8,21-5.3
           c6.1-3.5,10.9-8.5,14.3-14.9c3.4-6.4,5.1-13.7,5.1-21.9c0-8.2-1.7-15.4-5-21.8C349.1,52.2,344.3,47.2,338.2,43.6z M332,97.8
           c-3.4,4.4-8.3,6.6-14.8,6.6c-6.4,0-11.3-2.1-14.6-6.4c-3.3-4.3-5-10.2-5-17.6c0-7.4,1.6-13.2,4.9-17.6c3.2-4.3,8.2-6.5,14.8-6.5
           c6.5,0,11.4,2.1,14.8,6.4c3.4,4.3,5.1,10.2,5.1,17.6C337.1,87.6,335.4,93.4,332,97.8z"/>
         <path class="st2" d="M454,38.5c-5.3,0-10.2,1.2-14.5,3.5c-4.1,2.2-7.3,5.2-9.8,9c-0.9-1.6-1.9-3-3-4.4c-4.6-5.5-11.3-8.2-20.2-8.2
           c-5.4,0-10.3,1.2-14.8,3.6c-3.4,1.9-6.3,4.2-8.6,7.2v-8.9h-17v79.7h19.3V71.6c0-4.7,1.3-8.6,4-11.5s6.1-4.4,10.3-4.4
           c4.4,0,8,1.5,10.6,4.5c2.6,3,3.9,7.2,3.9,12.5v47.6h19.2V71.6c0-4.8,1.3-8.7,4-11.6c2.7-2.9,6.1-4.4,10.3-4.4
           c4.4,0,7.9,1.5,10.6,4.5c2.6,3,3.9,7.2,3.9,12.5l-0.1,47.6h19.3V67.6c0-9-2.4-16-7.2-21.3C469.6,41.1,462.8,38.5,454,38.5z"/>
         <path class="st2" d="M551,43.6c-5.7-3.6-12.2-5.4-19.7-5.4c-7.4,0-13.7,1.8-18.9,5.5c-0.8,0.5-1.5,1.1-2.2,1.7v-5h-17v115.2h19.3
           v-38.7c0,0,0,0,0.1,0.1c5.4,3.6,11.9,5.5,19.6,5.5c7.2,0,13.6-1.8,19.1-5.5c5.6-3.6,9.9-8.7,12.9-15.1c3.1-6.4,4.6-13.6,4.6-21.6
           c0-8.1-1.6-15.3-4.7-21.7C561,52.2,556.6,47.2,551,43.6z M543.5,98.3c-3.2,4.6-8.1,6.9-14.5,6.9c-6.5,0-11.3-2.2-14.3-6.6
           c-3.1-4.4-4.6-10.5-4.6-18.4c0-7.8,1.5-13.9,4.5-18.3c3-4.4,7.6-6.6,13.8-6.6c6.5,0,11.4,2.3,14.8,7c3.4,4.7,5.1,10.7,5.1,17.9
           C548.4,87.7,546.8,93.7,543.5,98.3z"/>
         <path class="st2" d="M612.7,40.7c-3.6,0.6-6.8,1.9-9.7,3.8c-2.5,1.4-4.5,3.2-6.2,5.4c-0.8,1.1-1.5,2.2-2.2,3.4V40.5h-17v79.7H597
           V79.6c0-4.7,0.9-8.7,2.7-12c1.8-3.3,4.5-5.8,8-7.6c2.5-1.2,5.1-1.9,8-2.1c2.9-0.2,5.5,0,7.9,0.7v-18C620,40,616.3,40,612.7,40.7z"
           />
         <path class="st2" d="M685.5,43.6c-6.2-3.6-13.2-5.4-21-5.4c-7.7,0-14.6,1.8-20.7,5.3c-6.1,3.5-10.9,8.5-14.3,14.9
           c-3.4,6.4-5.1,13.7-5.1,21.9c0,8.2,1.7,15.4,5,21.8c3.3,6.3,8.1,11.3,14.2,14.9c6.1,3.6,13,5.4,20.8,5.4c7.9,0,14.9-1.8,21-5.3
           c6.1-3.5,10.9-8.5,14.3-14.9c3.4-6.4,5.1-13.7,5.1-21.9c0-8.2-1.7-15.4-5-21.8C696.4,52.2,691.7,47.2,685.5,43.6z M679.3,97.8
           c-3.4,4.4-8.3,6.6-14.8,6.6c-6.4,0-11.3-2.1-14.6-6.4c-3.3-4.3-5-10.2-5-17.6c0-7.4,1.6-13.2,4.9-17.6c3.2-4.3,8.2-6.5,14.8-6.5
           c6.5,0,11.4,2.1,14.8,6.4c3.4,4.3,5.1,10.2,5.1,17.6C684.4,87.6,682.7,93.4,679.3,97.8z"/>
         <path class="st2" d="M801.4,38.5c-5.3,0-10.2,1.2-14.5,3.5c-4.1,2.2-7.3,5.2-9.8,9c-0.9-1.6-1.9-3-3-4.4
           c-4.6-5.5-11.3-8.2-20.2-8.2c-5.4,0-10.3,1.2-14.8,3.6c-3.4,1.9-6.3,4.2-8.6,7.2v-8.9h-17v79.7h19.3V71.6c0-4.7,1.3-8.6,4-11.5
           s6.1-4.4,10.3-4.4c4.4,0,8,1.5,10.6,4.5c2.6,3,3.9,7.2,3.9,12.5v47.6h19.2V71.6c0-4.8,1.3-8.7,4-11.6c2.7-2.9,6.1-4.4,10.3-4.4
           c4.4,0,7.9,1.5,10.6,4.5c2.6,3,3.9,7.2,3.9,12.5l-0.1,47.6h19.3V67.6c0-9-2.4-16-7.2-21.3C816.9,41.1,810.1,38.5,801.4,38.5z"/>
         <polygon class="st2" points="869.7,2.6 828.8,17 833.7,30.9 874.5,16.7"/>
         <rect x="842.1" y="40.5" class="st2" width="19.2" height="79.7"/>
         <path class="st2" d="M937.8,85.6c-1.7-3-4.4-5.5-8-7.5c-3.7-2.1-8.6-3.9-14.8-5.5c-6.5-1.7-11.2-3-14.1-3.9
           c-2.9-0.9-4.9-1.9-5.9-2.8c-1-0.9-1.6-2.2-1.6-3.8c0-2.5,1.2-4.3,3.5-5.6c2.4-1.3,5.5-1.8,9.5-1.6c3.9,0.2,7.1,1.2,9.5,3
           c2.4,1.8,3.7,4.3,4.1,7.5l19.6-3.5c-0.6-4.8-2.4-9-5.3-12.6c-3-3.5-6.9-6.3-11.7-8.2c-4.9-1.9-10.4-2.9-16.6-2.9
           c-6.4,0-12,1-16.7,3.1c-4.7,2.1-8.4,4.9-11,8.6c-2.6,3.7-3.9,8.1-3.9,13.2c0,4,0.9,7.5,2.6,10.3c1.7,2.9,4.5,5.3,8.3,7.4
           c3.8,2.1,9.1,3.9,15.8,5.6c6.2,1.6,10.6,2.9,13.1,3.8c2.6,1,4.3,1.9,5.2,2.9c0.9,0.9,1.3,2.3,1.3,4.1c0,2.7-1.1,4.7-3.2,6.2
           c-2.1,1.5-5.1,2.2-8.9,2.2c-4.6,0-8.4-1.1-11.4-3.2c-3-2.2-4.9-5.1-5.8-8.9l-19.6,3c1.4,8.3,5.1,14.6,11.3,19.1
           c6.2,4.5,14.2,6.7,24.1,6.7c10.4,0,18.6-2.3,24.4-6.9c5.9-4.6,8.8-11,8.8-19.2C940.3,92.1,939.5,88.6,937.8,85.6z"/>
       </g>
     </g>
     </svg>`
}
