var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');
console.log(canvas);

c.shadowColor = '#00fcfe';
c.shadowBlur = 25;

/*
c.fillStyle = '#00fcfe';
c.fillRect(0, 100, 100, 100);
c.fillRect(100, 225, 100, 100);
c.fillRect(100, 350, 100, 100);
*/
/*(x,y,width,height)*/

// line 
/*
c.beginPath(); 
c.moveTo(50,500); // where the line starts 
c.lineTo(200,500); // where the ling go to 
c.lineTo(300,600);
c.strokeStyle = '#00fcfe';
c.stroke(); // gives stroke 
*/

// circle 
/*arc(x: number, y: number, radius: number, startAngle: number, 
      endAngle: number, anticlockwise?: boolean): void*/
/*
c.beginPath();
c.arc (600, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = '#00fcfe';
c.stroke() 
*/



for (var i = 0; i < 2000; i++) {
      var x = Math.random() * window.innerWidth;
      var y = Math.random() * window.innerHeight;
      c.beginPath();
      c.arc (x, y, 30, 0, Math.PI * 2, false);
      /*
      var color = ['#FD5200', '#F3DE2C', '#F3DE2C'];
      var strokeStyle = color[Math.floor(Math.random() * color.length)];
      c.strokeStyle = 'strokeStyle;';
      */
      c.strokeStyle = '#00fcfe';
      c.stroke()
};