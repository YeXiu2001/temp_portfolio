import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const img2 = require('./assets/capstone/img2.png');
const img1 = require('./assets/capstone/img1.png');
const img3 = require('./assets/capstone/img3.png');
const img4 = require('./assets/capstone/img4.png');
const img5 = require('./assets/capstone/img5.png');

const images = [img2, img1, img3, img4, img5];

let currentIndex = 0;
const capsimg = document.getElementById('capsimg');
const prevButton = document.getElementById('capsprev');
const nextButton = document.getElementById('capsnext');

function showImage(index) {
  capsimg.src = images[index];
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);
});

const limg1 = require('./assets/laundry/img1.png');
const limg2 = require('./assets/laundry/img2.png');
const limg3 = require('./assets/laundry/img3.png');
const limg4 = require('./assets/laundry/img4.png');
const limg5 = require('./assets/laundry/img5.png');
const limg6 = require('./assets/laundry/img6.png');

const limages = [limg1, limg2, limg3, limg4, limg5, limg6];

const limg = document.getElementById('launimg');
const lprev = document.getElementById('lprev');
const lnext = document.getElementById('lnext');

function lshowImage(index) {
    limg.src = limages[index];
  }
  
  lprev.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? limages.length - 1 : currentIndex - 1;
    lshowImage(currentIndex);
  });
  
  lnext.addEventListener('click', () => {
    currentIndex = (currentIndex === limages.length - 1) ? 0 : currentIndex + 1;
    lshowImage(currentIndex);
  });


  const mimg1 = require('./assets/bwapp/bw1.png');
    const mimg2 = require('./assets/bwapp/bw2.png');
    const mimg3 = require('./assets/bwapp/bw3.png');
    const mimg4 = require('./assets/bwapp/bw4.png');
    const mimg5 = require('./assets/bwapp/bw5.png');
    const mimg6 = require('./assets/bwapp/bw6.png');

    const mimages = [mimg1, mimg2, mimg3, mimg4, mimg5, mimg6];

    const mimg = document.getElementById('bwimg');
    const mprev = document.getElementById('bwprev');
    const mnext = document.getElementById('bwnext');

    function mshowImage(index) {
        mimg.src = mimages[index];
      }

        mprev.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? mimages.length - 1 : currentIndex - 1;
            mshowImage(currentIndex);
        });

        mnext.addEventListener('click', () => {
            currentIndex = (currentIndex === mimages.length - 1) ? 0 : currentIndex + 1;
            mshowImage(currentIndex);
        });

        const timg1 = require('./assets/IOT/timg1.png');
        const timg2 = require('./assets/IOT/timg2.png');
        const timg4 = require('./assets/IOT/timg4.png');
        const timg5 = require('./assets/IOT/timg5.png');
        const timg6 = require('./assets/IOT/timg6.png');
    
        const timages = [timg1,timg2,timg4,timg5,timg6];
    
        const timg = document.getElementById('timg');
        const tprev = document.getElementById('tprev');
        const tnext = document.getElementById('tnext');
    
        function tshowImage(index) {
          timg.src = timages[index];
          }
    
          tprev.addEventListener('click', () => {
                currentIndex = (currentIndex === 0) ? timages.length - 1 : currentIndex - 1;
                tshowImage(currentIndex);
            });
    
            tnext.addEventListener('click', () => {
                currentIndex = (currentIndex === timages.length - 1) ? 0 : currentIndex + 1;
                tshowImage(currentIndex);
            });
