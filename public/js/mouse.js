document.onmousemove = animateCircles;

var colors = ['#ccc','#6cf','#eba13a'];

function animateCircles (event){
			var circle = document.createElement("div");
			circle.setAttribute("class", "circle");
			document.body.appendChild(circle);

			circle.style.left = event.clientX +5+ 'px';
			circle.style.top = event.clientY +5+ 'px';

			var color = colors[Math.floor(Math.random() * colors.length)];
			circle.style.borderColor = color;

			circle.style.transition = "all 0.2s linear 0s";

			circle.style.left = circle.offsetLeft +40+ 'px';
			circle.style.top = circle.offsetTop +40+ 'px';


			circle.style.opacity = 0;

			setTimeout(() => $(circle).remove(), 200);

		}
