var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');
console.log(canvas);

c.shadowColor = '#00fcfe';
c.shadowBlur = 25;

// line 
c.beginPath(); 
c.moveTo(560,120); // where the line starts 
c.lineTo(800,95); 
c.lineTo(400,600);
c.lineTo(560,120);
c.lineTo(600,200);
c.lineTo(650,650); 
c.lineTo(500,510);
c.lineTo(830,250); 
c.lineTo(600,200); 
c.lineTo(800,95);
c.lineTo(850,550);
c.lineTo(450,250);
c.lineTo(500,510);
c.lineTo(400,600);
c.lineTo(850,650);
c.lineTo(500,510);

c.shadowColor = '#000';
c.shadowBlur = 20;
c.shadowOffsetX = 20;
c.shadowOffsetY = 20;
c.strokeStyle = '#00fcfe';
c.stroke(); // gives stroke 

// line 
c.beginPath(); 
c.moveTo(830,250); // where the line starts 
c.lineTo(850,650);
c.lineTo(550,250);
c.lineTo(450,350);
c.lineTo(850,550);

c.shadowColor = '#000';
c.shadowBlur = 20;
c.shadowOffsetX = 20;
c.shadowOffsetY = 20;
c.strokeStyle = '#00fcfe';
c.stroke(); // gives stroke 

