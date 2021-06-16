# owasp-meetup-demo-thamtar
owasp-meetup-demo-thamtar created by GitHub Classroom

- สมาชิกกลุ่ม
นายธีรัช ประสิทธิ์เวช 6110613178
นายธาม เธียระวิบูลย์ 6110680565

- การจัดระเบียบไฟล์
1. ไฟล์ทั้งหมดถูกเก็บอยู่ในโฟลเดอร์โปรเจค same-origin-policy
2. ภายในโฟลเดอร์ same-origin-policy มีการเก็บโฟลเดอร์แยกอีก 2 ตัวคือ
1) โฟลเดอร์ a เก็บ a.js, a.png และ sitea.css
2) โฟลเดอร์ b เก็บ b.js, b.png และ siteb.css

- วิธีการรันโปรเจค
1. cd terminal ไปที่โฟลเดอร์ same-origin-policy เปิดให้ครบทั้งหมด 3 terminal
2. terminal แรกใส่คำสั่ง nodemon serverA.js เพื่อรัน server A
3. terminal ที่สองใส่คำสั่ง nodemon serverB.js เพื่อรัน server B
4. terminal สุดท้ายใส่คำสั่ง nodemon serverParent.js เพื่อรัน server Parent
5. เปิดเว็บ sitea ด้วยการใส่ลิงค์ http://localhost:4001/sitea
6. เปิดเว็บ siteb ด้วยการใส่ลิงค์ http://localhost:4003/siteb
7. เปิดเว็บ parentsite ด้วยการใส่ลิงค์ http://localhost:4005/parentsite

[ส่วนของธาม]

20. ทดสอบ web storage ด้วยการเปิดเว็บ sitea กดปุ่ม F12 ไปที่หน้า Application แล้วสร้างตัวแปรโดยกำหนดชื่อ Key กับค่า Value เป็นอะไรก็ได้ เก็บไว้ใน
Local Storage และ Session Storage ที่มี origin อยู่ที่ http://localhost:4001
21. ไปที่หน้า Console ใส่คำสั่งดังต่อไปนี้ทีละคำสั่ง
window.localStorage["<ชื่อ Key ที่สร้างไว้ใน Local Storage>"] 
window.sessionStorage["<ชื่อ Key ที่สร้างไว้ใน Session Storage>"]
ดูผลลัพท์
22. เปิด tab ใหม่เป็นเว็บ sitea
23. ไปที่หน้า Console ใส่คำสั่งดังต่อไปนี้ทีละคำสั่ง
window.localStorage["<ชื่อ Key ที่สร้างไว้ใน Local Storage เดิม>"] 
window.sessionStorage["<ชื่อ Key ที่สร้างไว้ใน Session Storage เดิม>"]
ดูผลลัพท์เปรียบเทียบ

24. ทดสอบ frame ด้วยการเปิดเว็บ parentsite กดปุ่ม F12 ไปที่หน้า Console แล้วใส่คำสั่งดังต่อไปนี้ทีละคำสั่ง
window.framea.location.replace("http://localhost:4005/child")
window.frameb.location.replace("http://localhost:4005/child")
window.parent.location.replace("https://account.google.com")
ดูผลลัพท์
25. เปิดเว็บ sitea กดปุ่ม F12 ไปที่หน้า Console แล้วใส่คำสั่งดังต่อไปนี้
var newwin = window.open("http://localhost:4003/siteb", "right")
26. ไปที่หน้าเว็บ siteb ที่ถูกเปิดขึ้นมาเป็น tab ใหม่ กดปุ่ม F12 ไปที่หน้า Console แล้วใส่คำสั่งดังต่อไปนี้
window.opener.location.replace("https://www.google.com")
กลับไปดูผลลัพท์ที่หน้า sitea ใน tab ที่แล้ว

27. ทดสอบ XMLHttpRequest ด้วยการเปิดเว็บ sitea กดปุ่ม F12 ไปที่หน้า Console แล้วใส่คำสั่งดังต่อไปนี้ทีละคำสั่ง
xhr.open("GET", "http://localhost:4001/sitea", false);
xhr.send()
xhr.responseText
ดูผลลัพท์
xhr.open("GET", "http://localhost:4001/sitea", false);
xhr.send()
xhr.responseText
ดูผลลัพท์เปรียบเทียบ

- ลิงค์ video