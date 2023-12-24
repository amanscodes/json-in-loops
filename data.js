const ResumeData = {
    "personalInformation": {
      "firstName": "Aman",
      "lastName": "Mehta",
      "email": "beingamanmehta@gmail.com",
      "phone": "9467799880",
      "address": "House no.137, near pnb, bhiwani"
    },
    "education": [
      {
        "degree": "Bachelor of Commerce",
        "school": "Techno Global University",
        "graduationYear": 2017
      }
    ],
    "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "MySQL",
      "Problem-solving"
    ],
    "projects": [
      {
        "title": "E-commerce Website",
        "description": "Developed a responsive e-commerce website using React",
      },
    ],
  };
  console.log(ResumeData);
  // Using a for loop to iterate over the array
for (let i = 0; i < ResumeData.length; i++) {
    const personalInformation = ResumeData[i].personalInformation;
    
    console.log(`Personal Information for entry ${i + 1}:`);
    console.log(`First Name: ${personalInformation.firstName}`);
    console.log(`Last Name: ${personalInformation.lastName}`);
    console.log(`Email: ${personalInformation.email}`);
    console.log(`Phone: ${personalInformation.phone}`);
    console.log(`Address: ${personalInformation.address}`);
}
// Using for...in loop to iterate over the array
for (let i = 0; i < ResumeData.length; i++) {
    const entry = ResumeData[i];
  
    console.log(`Entry ${i + 1}:`);
    
    // Using for...in loop to iterate over the properties of personalInformation
    for (const key in entry.personalInformation) {
      if (entry.personalInformation.hasOwnProperty(key)) {
        console.log(`${key}: ${entry.personalInformation[key]}`);
      }
    }
    console.log("\n");
}
// Using for...of loop to iterate over the array
for (const entry of ResumeData) {
    console.log("Entry:");
  
    // Using for...of loop to iterate over the properties of personalInformation
    for (const [key, value] of Object.entries(entry.personalInformation)) {
      console.log(`${key}: ${value}`);
    }
    console.log("\n");
}
// Using forEach on the array
ResumeData.forEach((entry, index) => {
    console.log(`Entry ${index + 1}:`);
  
    // Using forEach on the properties of personalInformation
    Object.entries(entry.personalInformation).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
    console.log("\n");
});
  