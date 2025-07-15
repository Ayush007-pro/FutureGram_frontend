const cron = require("node-cron");
const Letter = require("../models/letter");
const sendEmail = require("../utils/sendEmail");

cron.schedule("0 * * * *", async () => {
  const now = new Date();

  try {
    const letters = await Letter.find({
      scheduledDate: { $lte: now },
      sent: false,
    });

    for (const letter of letters) {
<<<<<<< HEAD
      await sendEmail(letter.email, letter.content);
=======
      const html = `
        <div style="font-family: Poppins, sans-serif; text-align: center;">
          <h2>Dear ${letter.name},</h2>
          <p style="font-size: 16px;">${letter.content}</p>
          <img src="${letter.animePic}" alt="Anime Image" style="width: 200px; height: auto; margin-top: 20px; border-radius: 12px;" />
          <p style="margin-top: 20px;">💌 With love, from your past self</p>
        </div>
      `;

      await sendEmail(letter.email, "Your Letter from the Past 💌", html);

>>>>>>> future/main
      letter.sent = true;
      await letter.save();
      console.log(`✅ Sent letter to ${letter.email}`);
    }
  } catch (err) {
    console.error("❌ Cron error:", err);
  }
});
<<<<<<< HEAD
=======
module.exports = cron;
>>>>>>> future/main
