import Stats from 'stats.js';


const stats = new Stats();
const video = document.createElement('video');
const canvas = document.createElement('canvas');
const pre = document.createElement('pre');
const ctx = canvas.getContext('2d');


document.body.appendChild(pre);
document.body.appendChild(stats.dom);


Promise.all([
  import('image-to-ascii'),
  navigator.mediaDevices.getUserMedia({ video: true }),
])
  .then(([imageToAscii, stream]) => {
    const streamSettings = stream.getVideoTracks()[0].getSettings();
    const width = 80;
    const height = streamSettings.height * (width / streamSettings.width);

    video.setAttribute('width', width);
    video.setAttribute('height', height);
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    video.srcObject = stream;
    video.play();

    const onResize = () => {
      pre.style.fontSize = `${(pre.offsetWidth / width) + 2.775}px`;
    };

    const update = () => {
      stats.begin();
      ctx.drawImage(video, 0, 0, width, height);
      pre.innerHTML = imageToAscii.fromCanvas(canvas, 'plain');
      stats.end();
      requestAnimationFrame(update);
    };

    window.addEventListener('resize', onResize);

    onResize();
    update();
  })
  .catch(console.error);
