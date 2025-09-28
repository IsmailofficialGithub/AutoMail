# 📧 Automated Job Application Sender (Node.js + Nodemailer)

This project allows you to send **personalized job application emails** automatically to multiple companies using **Node.js** and **Nodemailer**.  
It dynamically customizes email content for each company and attaches your resume.

---

## 🚀 Features
- ✉️ Send emails to multiple companies with **one command**  
- ⏭️ Automatically **skip companies without emails**  
- 📎 Attach your **resume (PDF)** to every email  
- 📝 **Custom email subject line** that looks professional  
- ✅ Clear **success & failure logs** with company names  
- 📂 Store all companies inside a simple **array of objects**

---

## 📂 Project Structure
```bash
📦 auto-emailing
 ┣ 📜 index.js                # Main code (Nodemailer logic)
 ┣ 📜 Resume_Ismail_Abbasi.pdf # Your resume (replace with yours)
 ┣ 📜 package.json
 ┣ 📜 .gitignore
 ┗ 📜 README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/IsmailofficialGithub/AutoMail.git
cd AutoMail
```

### 2️⃣ Install Dependencies
```bash
npm install nodemailer
```

### 3️⃣ Create `.gitignore`
```gitignore
node_modules/
.env
```

### 4️⃣ Generate Gmail App Password
1. Go to **Google Account Security**  
2. Enable **2-Step Verification**  
3. Create a new **App Password** for "Mail"  
4. Copy the **16-character password**  

---

## 🖊️ Usage

Update your `index.js` file:

```js
const companies = [
  {
    id: 1,
    name: "Company Name",   // <-- Replace
    location: "City",
    phone: "0000000000",
    email: "hr@company.com", // <-- Replace
  },
  // Add more companies...
];

let user = "yourGmail@gmail.com";   // <-- Your Gmail
let pass = "your_app_password";     // <-- Gmail App Password
```

Run the script:
```bash
node index.js
```

---

## 📧 Example Email Body
```text
Hello [Company Name],

I am writing to express my interest in internship or entry-level opportunities at your company.

🔹 Technical Skills
- Frontend: JavaScript, React.js, Next.js 15, TypeScript
- Backend: Node.js, Express.js, TypeScript
- Database: MongoDB, MySQL, Supabase
- DevOps: Docker, Docker Compose, AWS, CI/CD, Microservices, Monitoring, Secrets Management
- Others: GitHub, C++ (Basic), Postman, Shadcn, WebSockets (Socket.io), Redux Toolkit

Portfolio: https://www.ismailabbasi.qzz.io/  
LinkedIn: https://www.linkedin.com/in/ismailabbasi/  
Email: ismail.officail295@gmail.com  
Phone: +92 325 5028225  

Best regards,  
Ismail Abbasi
```

---

## 🛠️ Technologies Used
- Node.js  
- Nodemailer  
- JavaScript (ESM)  
- Gmail App Passwords  

---

## 👤 Author
**Ismail Abbasi**  

🌐 Portfolio: [ismailabbasi.qzz.io](https://www.ismailabbasi.qzz.io)  
💼 LinkedIn: [linkedin.com/in/ismailabbasi](https://www.linkedin.com/in/ismailabbasi)  
📧 Email: ismail.officail295@gmail.com  
📱 Phone: +92 325 5028225  

---

## ⚠️ Disclaimer
This project is for **educational purposes only**. Please use responsibly and avoid spamming 🚫.
