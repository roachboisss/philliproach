const businessInfo = {
  "name": "The Business Name",
  "number": "(123) 456-7890",
  "year": "2025",
  "businessemail": "businessemail@gmail.com",
  "about": "About the business",
  "owner": "John Doe",
  "mission": "Mission statement",
  "service1": "Service 1 name",
  "service1desc": "About service 1",
  "service2": "Service 2 name",
  "service2desc": "About service 2",
  "service3": "Service 3 name",
  "service3desc": "About service 3"
};

document.addEventListener('DOMContentLoaded', function() {
  document.title = businessInfo.name;
  
  const nameElements = document.querySelectorAll('#name');
  nameElements.forEach(element => {
    element.textContent = businessInfo.name;
  });
  
  if(document.getElementById("number")) document.getElementById("number").textContent = businessInfo.number;
  if(document.getElementById("year")) document.getElementById("year").textContent = businessInfo.year;
  if(document.getElementById("businessemail")) document.getElementById("businessemail").textContent = businessInfo.businessemail;
  if(document.getElementById("about")) document.getElementById("about").textContent = businessInfo.about;
  if(document.getElementById("owner")) document.getElementById("owner").textContent = businessInfo.owner;
  if(document.getElementById("mission")) document.getElementById("mission").textContent = businessInfo.mission;
  if(document.getElementById("service1")) document.getElementById("service1").textContent = businessInfo.service1;
  if(document.getElementById("service1desc")) document.getElementById("service1desc").textContent = businessInfo.service1desc;
  if(document.getElementById("service2")) document.getElementById("service2").textContent = businessInfo.service2;
  if(document.getElementById("service2desc")) document.getElementById("service2desc").textContent = businessInfo.service2desc;
  if(document.getElementById("service3")) document.getElementById("service3").textContent = businessInfo.service3;
  if(document.getElementById("service3desc")) document.getElementById("service3desc").textContent = businessInfo.service3desc;
});
