/**
 * BACKEND SERVER: GỬI MÃ XÁC THỰC OTP QUA GMAIL SMTP VỚI NODEMAILER
 * 
 * Hướng dẫn sử dụng:
 * 1. Cài đặt thư viện: npm install express cors nodemailer dotenv
 * 2. Cấu hình thông tin Gmail bên dưới (hoặc tạo file .env)
 * 3. Chạy server: node server.js
 * 4. Website auth.html sẽ tự động kết nối tới http://localhost:3000/api/send-otp
 */

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Cấu hình tài khoản Gmail gửi thư (Sử dụng Mật khẩu ứng dụng - Google App Password)
const GMAIL_CONFIG = {
  user: process.env.GMAIL_USER || "your_email@gmail.com",
  pass: process.env.GMAIL_PASS || "your_16_char_app_password", // Mật khẩu ứng dụng 16 ký tự của Google
};

// Khởi tạo Transporter cho Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_CONFIG.user,
    pass: GMAIL_CONFIG.pass,
  },
});

// API nhận yêu cầu gửi mã OTP
app.post("/api/send-otp", async (req, res) => {
  const { email, otp, username } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: "Thiếu địa chỉ email hoặc mã OTP!" });
  }

  const mailOptions = {
    from: `"Triển lãm Nghệ thuật Ngôn từ Distil" <${GMAIL_CONFIG.user}>`,
    to: email,
    subject: `[Distil] Mã xác thực đặt lại mật khẩu: ${otp}`,
    html: `
      <div style="font-family: 'Be Vietnam Pro', Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; background-color: #FCF9F0; border: 1px solid #E3D8C3; border-radius: 4px;">
        <h2 style="font-family: 'Playfair Display', Georgia, serif; color: #7B1113; margin-top: 0; font-size: 24px;">Khôi phục mật khẩu</h2>
        <p style="color: #2D1A1A; font-size: 15px; line-height: 1.6;">
          Xin chào <strong>${username || "Độc giả"}</strong>,
        </p>
        <p style="color: #7A6363; font-size: 14px; line-height: 1.6;">
          Hệ thống nhận được yêu cầu đặt lại mật khẩu cho tài khoản liên kết với địa chỉ Gmail này. Dưới đây là mã xác thực OTP của bạn:
        </p>
        <div style="background-color: #F6F0E0; border: 1px dashed #7B1113; padding: 18px; text-align: center; margin: 24px 0; border-radius: 4px;">
          <span style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #7A6363; display: block; margin-bottom: 6px;">Mã xác thực OTP (hiệu lực 10 phút)</span>
          <span style="font-family: 'Playfair Display', Georgia, serif; font-size: 32px; font-weight: 700; letter-spacing: 0.25em; color: #7B1113;">${otp}</span>
        </div>
        <p style="color: #7A6363; font-size: 13px; line-height: 1.5;">
          Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua thư này để bảo mật tài khoản.
        </p>
        <hr style="border: none; border-top: 1px solid #E3D8C3; margin: 24px 0;" />
        <p style="color: #7A6363; font-size: 12px; margin-bottom: 0;">
          © Triển lãm Nghệ thuật Ngôn từ Distil — distilreview.com
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`[Email Sent] Đã gửi mã OTP đến ${email}: Message ID ${info.messageId}`);
    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("[Email Error] Lỗi gửi thư qua Gmail:", error);
    return res.status(500).json({ error: error.message || "Gửi thư thất bại" });
  }
});

app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`[Server] Distil OTP Mail Server dang chay tai http://localhost:${PORT}`);
  console.log(`[API] San sang tiep nhan tai POST http://localhost:${PORT}/api/send-otp`);
  console.log(`=================================================`);
});
