// إنشاء الخريطة
var map = L.map('map').setView([19.615, 37.216], 6);

// إضافة طبقة الخرائط
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// إضافة Marker في بورتسودان
L.marker([19.615, 37.216]).addTo(map)
  .bindPopup('Port Sudan')
  .openPopup();
