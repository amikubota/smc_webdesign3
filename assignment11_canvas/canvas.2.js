var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');
console.log(canvas);

c.shadowColor = '#00fcfe';
c.shadowBlur = 25;

animate();

function animate(){
      requestAnimationFrame(animate);
      console.log("animation frames");
      c.clearRect(0, 0, canvas.width, canvas.height);

      // circle 

      for (var i = 0; i < 200; i++) {
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
            c.beginPath();
            c.arc (x, y, 0.5, 0, Math.PI * 2, false);
            c.fillStyle = '#00fcfe';
            c.fill();
            c.strokeStyle = '#00fcfe';
            c.stroke()
      };

      for (var i = 0; i < 30; i++) {
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
            c.beginPath();
            c.arc (x, y, 2, 0, Math.PI * 2, false);
            c.fillStyle = '#00fcfe';
            c.fill();
            c.strokeStyle = '#00fcfe';
            c.stroke()
      };

      for (var i = 0; i < 20; i++) {
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
            c.beginPath();
            c.arc (x, y, 4, 0, Math.PI * 2, false);
            c.fillStyle = '#00fcfe';
            c.fill();
            c.strokeStyle = '#00fcfe';
            c.stroke()
      };

      for (var i = 0; i < 20; i++) {
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
            c.beginPath();
            c.arc (x, y, 5, 0, Math.PI * 2, false);
            c.fillStyle = '#00fcfe';
            c.fill();
            c.strokeStyle = '#00fcfe';
            c.stroke()
      };

      for (var i = 0; i < 15; i++) {
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
            c.beginPath();
            c.arc (x, y, 10, 0, Math.PI * 2, false);
            c.fillStyle = '#00fcfe';
            c.fill();
            c.strokeStyle = '#00fcfe';
            c.stroke()
      };

      for (var i = 0; i < 9; i++) {
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
            c.beginPath();
            c.arc (x, y, 30, 0, Math.PI * 2, false);
            c.fillStyle = '#00fcfe';
            c.fill();
            c.strokeStyle = '#00fcfe';
            c.stroke()
      };

      for (var i = 0; i < 3; i++) {
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
            c.beginPath();
            c.arc (x, y, 50, 0, Math.PI * 2, false);
            c.fillStyle = '#00fcfe';
            c.fill();
            c.strokeStyle = '#00fcfe';
            c.stroke()
      };

      for (var i = 0; i < 3; i++) {
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
            c.beginPath();
            c.arc (x, y, 110, 0, Math.PI * 2, false);
            c.fillStyle = '#00fcfe';
            c.fill();
            c.strokeStyle = '#00fcfe';
            c.stroke()
      };
}

