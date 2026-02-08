// 1. Vẽ đường thẳng
var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d");
ctx1.moveTo(0, 0);
ctx1.lineTo(200, 100);
ctx1.stroke();

// 2. Vẽ đường thẳng có màu
var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.moveTo(0, 0);
ctx2.lineTo(200, 100);
ctx2.lineWidth = 10;
ctx2.strokeStyle = "red";
ctx2.stroke();

// 3. Vẽ hình tròn
var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.arc(95, 50, 40, 0, 2 * Math.PI);
ctx3.stroke();

// 4. Vẽ hình chữ nhật
var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext("2d");
ctx4.rect(10, 10, 150, 100);
ctx4.stroke();

// 5. Vẽ hình vuông có màu
var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext("2d");
ctx5.fillStyle = "green";
ctx5.fillRect(10, 10, 100, 100);

// 6. Vẽ hình vuông có màu nền và viền
var c6 = document.getElementById("myCanvas6");
var ctx6 = c6.getContext("2d");
ctx6.fillStyle = "green";
ctx6.fillRect(10, 10, 100, 100);
ctx6.strokeStyle = "blue";
ctx6.lineWidth = 5;
ctx6.strokeRect(10, 10, 100, 100);

// 7. Vẽ hình thang
var c7 = document.getElementById("myCanvas7");
var ctx7 = c7.getContext("2d");
ctx7.beginPath();
ctx7.moveTo(20, 20);
ctx7.lineTo(100, 20);
ctx7.lineTo(175, 100);
ctx7.lineTo(20, 100);
ctx7.lineTo(20, 20);
ctx7.stroke();

// 8. Vẽ hình tam giác
var c8 = document.getElementById("myCanvas8");
var ctx8 = c8.getContext("2d");
ctx8.beginPath();
ctx8.moveTo(100, 20);
ctx8.lineTo(180, 100);
ctx8.lineTo(20, 100);
ctx8.lineTo(100, 20);
ctx8.stroke();

// 9. Xoá hình chữ nhật
var c9 = document.getElementById("myCanvas9");
var ctx9 = c9.getContext("2d");
ctx9.fillStyle = "pink";
ctx9.fillRect(10, 10, 150, 100);
ctx9.clearRect(60, 35, 50, 50);

// 10. Vẽ hình bán nguyệt
var c10 = document.getElementById("myCanvas10");
var ctx10 = c10.getContext("2d");
ctx10.beginPath();
ctx10.arc(95, 50, 40, 0, Math.PI);
ctx10.fillStyle = "red";
ctx10.fill();
ctx10.stroke();

// 11. Vẽ cung tròn 1
var c11 = document.getElementById("myCanvas11");
var ctx11 = c11.getContext("2d");
ctx11.beginPath();
ctx11.arc(95, 50, 40, 0, 0.5 * Math.PI);
ctx11.stroke();

// 12. Vẽ cung tròn 2 (Ngược chiều)
var c12 = document.getElementById("myCanvas12");
var ctx12 = c12.getContext("2d");
ctx12.beginPath();
ctx12.arc(95, 50, 40, 0, 0.5 * Math.PI, true);
ctx12.stroke();

// 13. Vẽ đường cong Quadratic
var c13 = document.getElementById("myCanvas13");
var ctx13 = c13.getContext("2d");
ctx13.beginPath();
ctx13.moveTo(10, 100);
ctx13.quadraticCurveTo(250, 170, 230, 20);
ctx13.stroke();

// 14. Vẽ đường cong Bezier
var c14 = document.getElementById("myCanvas14");
var ctx14 = c14.getContext("2d");
ctx14.beginPath();
ctx14.moveTo(20, 20);
ctx14.bezierCurveTo(110, 150, 180, 10, 210, 140);
ctx14.stroke();

// 15. Vẽ chữ
var c15 = document.getElementById("myCanvas15");
var ctx15 = c15.getContext("2d");
ctx15.font = "30px Arial";
ctx15.fillText("Hello World", 10, 50);

// 16. Vẽ viền chữ
var c16 = document.getElementById("myCanvas16");
var ctx16 = c16.getContext("2d");
ctx16.font = "30px Arial";
ctx16.strokeText("Hello World", 10, 50);

// 17. Vẽ gradient
var c17 = document.getElementById("myCanvas17");
var ctx17 = c17.getContext("2d");
var grd17 = ctx17.createLinearGradient(0, 0, 200, 0);
grd17.addColorStop(0, "red");
grd17.addColorStop(1, "white");
ctx17.fillStyle = grd17;
ctx17.fillRect(10, 10, 150, 80);

// 18. Vẽ gradient xuyên tâm
var c18 = document.getElementById("myCanvas18");
var ctx18 = c18.getContext("2d");
var grd18 = ctx18.createRadialGradient(75, 50, 5, 90, 60, 100);
grd18.addColorStop(0, "red");
grd18.addColorStop(1, "white");
ctx18.fillStyle = grd18;
ctx18.fillRect(10, 10, 150, 80);

// 19. Bóng đổ
var c19 = document.getElementById("myCanvas19");
var ctx19 = c19.getContext("2d");
ctx19.shadowColor = "lightblue";
ctx19.shadowOffsetX = 10;
ctx19.shadowOffsetY = 10;
ctx19.fillStyle = "blue";
ctx19.fillRect(20, 20, 100, 100);
ctx19.lineWidth = 4;
ctx19.strokeStyle = "blue";
ctx19.strokeRect(170, 20, 100, 100);

// 20. Bóng đổ mờ
var c20 = document.getElementById("myCanvas20");
var ctx20 = c20.getContext("2d");
ctx20.shadowColor = "lightblue";
ctx20.shadowBlur = 8;
ctx20.shadowOffsetX = 10;
ctx20.shadowOffsetY = 10;
ctx20.fillStyle = "blue";
ctx20.fillRect(20, 20, 100, 100);
ctx20.lineWidth = 4;
ctx20.strokeStyle = "blue";
ctx20.strokeRect(170, 20, 100, 100);

// 21. Mặt cười
var c21 = document.getElementById("myCanvas21");
var ctx21 = c21.getContext("2d");
ctx21.lineWidth = 5;
// Mặt
ctx21.beginPath();
ctx21.arc(320, 240, 200, 0, 2 * Math.PI);
ctx21.stroke();
ctx21.closePath();
// Mắt trái
ctx21.beginPath();
ctx21.arc(270, 175, 30, 0, 2 * Math.PI);
ctx21.stroke();
ctx21.closePath();
// Mắt phải
ctx21.beginPath();
ctx21.arc(370, 175, 30, 0, 2 * Math.PI);
ctx21.stroke();
ctx21.closePath();
// Miệng
ctx21.beginPath();
ctx21.arc(320, 240, 150, 0, 1 * Math.PI);
ctx21.stroke();
ctx21.closePath();