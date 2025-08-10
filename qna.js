const qnaDB = {
  "deadline": "The last date for application acceptance for A.Y. 24-25 is 31st July 2025.",
  "eligibility": "You can check the eligibility by clicking apply now buttion",
  "apply": "Please visit the Apply Now section on our site and follow the instructions carefully.",
  "contact": "Reach out to the Scholarship Department at scholarship@srtmun.ac.in or visit the office.",
  "fees": "there is no fees to submit the scholership foam",
  "documents": "Documens are vary scheme to scheme you can check the official website",
  "Process" : "you follow the websites by searching  your eligibility or visiting  the department",
  "aaple sarkar dbt": "Aaple Sarkar DBT (Direct Benefit Transfer) is a portal launched by the Government of Maharashtra to transfer the benefits and subsidies of various social welfare schemes like E-Scholarships, Pension, Disaster, etc., directly into the bank account of the beneficiary.",
  "who can apply": "Any Citizen of India can register on the portal. Eligibility and disbursement will be according to the schemes as displayed.",
  "otp validity": "OTP is valid for 30 minutes.",
  "aadhaar based dbt benefit": "Aadhaar seeding your scheme ensures that nobody else can claim your share of the benefits by impersonating you as a person. In case of cash transfers, the money reaches directly to your Aadhaar linked bank account. All benefits go to your latest Aadhaar linked bank account.",
  "uidai rejection": "If rejected by UIDAI, the reason and steps will be communicated. Retrieve your Aadhaar number via UID/EID, contact 1947, or download eAadhaar from the Resident Portal.",
  "aadhaar letter time": "Aadhaar generation may take up to 90 days. It is delivered by post and you will also get an SMS if your mobile number is registered.",
  "register change mobile": "For online updates, you must have your mobile number registered with UIDAI. Otherwise, visit the nearest UIDAI enrollment center.",
  "aadhaar for dbt": "Government of Maharashtra encourages all citizens to have an Aadhaar number so benefits can be transferred directly into your Aadhaar-seeded bank account.",
  "multiple accounts": "Submit your Aadhaar letter and bank account details to the bank where you want funds. The account most recently linked with Aadhaar will receive the money.",
  "offshore banking": "Banking Correspondents use handheld devices for various transactions on your Aadhaar linked account, like balance enquiry, cash withdrawal, bill payment, remittance, and more.",
  "aadhaar schemes": "Aadhaar helps schemes to eliminate duplicates/fakes, reduce costs, and increase transparency for direct benefit programmes.",
  "correction aadhaar details": "Visit the nearest enrollment center or use the SSUP portal to correct name, age, address, mobile number, etc. Submit relevant documentary proof.",
  "aadhaar bank account consent": "An Aadhaar enabled bank account will be opened for every resident if they consent at the time of enrollment.",
  "aadhaar vs normal bank account": "Aadhaar enabled accounts allow disbursement of social security benefits like scholarships, pensions, wages, etc. They can be accessed via micro-ATMs, internet payments with biometric authentication, or mobile.",
  "aadhaar linked multiple payments": "You can choose which bank to use for each Aadhaar-based digital payment.",
  "aadhaar vs other id": "Aadhaar is a unique, verifiable 12-digit number for residents. It helps deliver social benefits, plug leaks, and improve transparency.",
  "check eligibility": "Check eligibility fetches schemes applicable to you based on inputs you provide.",
  "accepted formats": "Accepted file formats are JPG and PNG.",
  "max file size": "Maximum file size for uploading is 250 KB.",

  // Merit Scholarships
  "merit scholarships": "This scholarship is awarded to help economically backward class students continue their further education. (Boys students from Class XI and XII only).",
  "check status": "Login to the MahaDBT Portal, go to Application Tracking, and enter your Application ID to see your application status.",
  "edit after submission": "Yes, if the Institute sends back the application for modification, you can modify specific fields.",
  "store draft": "Yes, the applicant can store the application form in draft mode.",
  "funds credited": "Update your mobile number in your bank to receive SMS alerts for DBT. You can also check your balance via ATM, microATM, internet banking, or by contacting your bank.",
  "ssc hsc dropdown missing": "Select 'Other board' in SSC/HSC details and manually fill all mandatory fields.",
  "college course missing": "Tick the checkbox shown below the field to manually add your College Name & Course Name.",

  // Username, course eligibility
  "forgot username": "Go to Support Desk and enter your scholarship application number, registered mobile number, or name as per Aadhaar to retrieve your username.",
  "partially completed courses": "No. If you discontinue a course and start another, you are not eligible for the scholarship.",
  "non professional after professional": "No. You cannot get a scholarship for a non-professional course after completing a professional course."

};

document.getElementById("submitQuestion").onclick = function() {
  const userQ = document.getElementById("userQuestion").value.toLowerCase();
  let answer = "Sorry, I couldn't find an answer. Please contact the scholarship office for help.";

  for (const key in qnaDB) {
    if (userQ.includes(key)) {
      answer = qnaDB[key];
      break;
    }
  }
  document.getElementById("answerArea").innerText = answer;
};

document.querySelectorAll(".kiosk-btn").forEach(btn => {
  btn.onclick = function() {
    const type = btn.getAttribute("data-type");
    document.getElementById("answerArea").innerText = qnaDB[type];
    
  };
});

