import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Example companies array
const companies = [
  {
    id: 1,
    name: "Company Name",     // <-- Company Name
    location: "Islamabad",    // <-- Company Location
    phone: "00000000000",     // <-- Company Phone
    email: "company@email.com", // <-- Company Email
  },
  // ➕ Add more companies here
];

console.log("Total Software Houses:", companies.length);

// ✅ Replace with your Gmail + Google App Password
let user = "your_email@gmail.com";        // <-- Your Gmail
let pass = "your_google_app_password";    // <-- Your App Password

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

// Function to create email body
function createEmailBody(companyName) {
  return `
Hello ${companyName},

// 👉 Write your introduction here
// 👉 Mention your technical skills here
// 👉 Explain why you want internship/job
// 👉 Add portfolio/LinkedIn/contact details

📎 I have attached my resume for your review.

Thank you for your time and consideration.  
Best regards,  
[Your Name]
`;
}

// Loop through companies and send emails
async function sendEmails() {
  const failedEmails = [];
  let sendCompanyCount = 0;

  for (const company of companies) {
    if (!company.email) {
      console.log(`⏩ Skipping ${company.name} (no email found)`);
      continue;
    }

    const mailOptions = {
      from: `"Your Name" <${user}>`, // <-- Replace with your name
      to: company.email,
      subject: `Exploring Opportunities with ${company.name}`, // ✅ Subject line
      text: createEmailBody(company.name),
      attachments: [
        {
          filename: "Resume.pdf", // <-- Replace with your resume filename
          path: path.join(__dirname, "Resume.pdf"), // <-- Place resume file in same folder
          contentType: "application/pdf",
        },
      ],
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      sendCompanyCount++;
      console.log(
        `${sendCompanyCount} :) ✅ Email sent to ${company.name} (${company.email}) - Message ID: ${info.messageId}`
      );
    } catch (err) {
      console.error(
        `❌ Failed to send email to ${company.name} (${company.email})`,
        err.message
      );
      failedEmails.push(company);
    }
  }

  if (failedEmails.length > 0) {
    console.log("\n⚠️ Summary: Failed to send emails to these companies:");
    console.table(failedEmails);
  } else {
    console.log("\n🎉 All emails sent successfully!");
  }
}

sendEmails();