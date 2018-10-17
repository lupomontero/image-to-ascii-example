import fps from './fps';
// import imageToAsciiJS from './image-to-ascii';
const imageToAsciiWasm = import('image-to-ascii');


const video = document.createElement('video');
const canvas = document.createElement('canvas');
const pre = document.createElement('pre');
const fpsOut = document.createElement('div');
const ctx = canvas.getContext('2d');


document.body.appendChild(pre);
document.body.appendChild(fpsOut);


const meter = fps(({ frameTime, endTime }) => {
  fpsOut.innerHTML = `
    <div>${(1000 / frameTime).toFixed(1)} fps</div>
    ${endTime ? `<div>${endTime} ms</div>` : ''}
  `;
});


Promise.all([
  // imageToAsciiJS,
  imageToAsciiWasm,
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
      meter.begin();
      ctx.drawImage(video, 0, 0, width, height);
      pre.innerHTML = imageToAscii.fromCanvas(canvas, 'plain');
      meter.end();
      requestAnimationFrame(update);
    };

    window.addEventListener('resize', onResize);

    onResize();
    update();
  })
  .catch(console.error);
