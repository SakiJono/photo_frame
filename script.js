window.onload = function Init() {
  startVideo();
}

const video = document.getElementById('video');
const make = document.getElementById('make');

function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function (stream) {
      document.getElementById('video').srcObject = stream;
      // localVideo.muted = true;
      // localVideo.srcObject = localStream;
      document.getElementById('video').playsInline = true;
      // await video.play().catch(console.error);
    }).catch(function (error) { // 失敗時の処理はこちら.
      console.error('mediaDevice.getUserMedia() error:', error);
      return;
    });

}

function getMyVideo() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    return document.getElementById('video');
  }
}


make.onclick = function draw() {
  const canvas = document.getElementById('canvas').getContext('2d');
  const img = new Image();
  img.onload = function () {
    canvas.scale(-1, 1);
    canvas.drawImage(video, -28, 13, -video.videoWidth, video.videoHeight);
    canvas.drawImage(img, 0, 0, -700, 700);
  };
  img.src = '牛フレーム反転.png';

}

document.getElementById("save").onclick = (event) => {
  const canvas = document.getElementById("canvas");

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "test.png";
  link.click();

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, -700, 700);
}

document.getElementById("clear").onclick = function () {
  const canvas = document.getElementById("canvas").getContext('2d');
  canvas.clearRect(0, 0, -700, 700);
}