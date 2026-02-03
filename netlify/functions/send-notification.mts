import type { Context, Config } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { message, claimType } = await req.json();

    if (!message || typeof message !== "string" || message.trim() === "") {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const phoneNumber = "3607721843";
    const emailAddress = "dannywhite984@gmail.com";
    const claimLabel = claimType === "ramen" ? "Free Ramen" : "GA Item";
    const fullMessage = `[${claimLabel} Claim] ${message.trim()}`;

    const results = {
      sms: { sent: false, error: null as string | null },
      email: { sent: false, error: null as string | null },
    };

    // Send SMS via Twilio
    const twilioAccountSid = Netlify.env.get("TWILIO_ACCOUNT_SID");
    const twilioAuthToken = Netlify.env.get("TWILIO_AUTH_TOKEN");
    const twilioFromNumber = Netlify.env.get("TWILIO_FROM_NUMBER");

    if (twilioAccountSid && twilioAuthToken && twilioFromNumber) {
      try {
        const twilioResponse = await fetch(
          `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Basic ${btoa(`${twilioAccountSid}:${twilioAuthToken}`)}`,
            },
            body: new URLSearchParams({
              To: `+1${phoneNumber}`,
              From: twilioFromNumber,
              Body: fullMessage,
            }),
          }
        );

        if (twilioResponse.ok) {
          results.sms.sent = true;
        } else {
          const errorData = await twilioResponse.json();
          results.sms.error = errorData.message || "Failed to send SMS";
        }
      } catch (smsError) {
        results.sms.error = smsError instanceof Error ? smsError.message : "SMS sending failed";
      }
    } else {
      results.sms.error = "Twilio credentials not configured";
    }

    // Send Email via SendGrid
    const sendgridApiKey = Netlify.env.get("SENDGRID_API_KEY");
    const sendgridFromEmail = Netlify.env.get("SENDGRID_FROM_EMAIL");

    if (sendgridApiKey && sendgridFromEmail) {
      try {
        const emailResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sendgridApiKey}`,
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: emailAddress }],
              },
            ],
            from: { email: sendgridFromEmail },
            subject: `New ${claimLabel} Claim from Deysi's Website`,
            content: [
              {
                type: "text/plain",
                value: `You have a new claim submission!\n\nType: ${claimLabel}\nMessage: ${message.trim()}\n\nSent from Deysi's Website`,
              },
            ],
          }),
        });

        if (emailResponse.ok || emailResponse.status === 202) {
          results.email.sent = true;
        } else {
          const errorText = await emailResponse.text();
          results.email.error = errorText || "Failed to send email";
        }
      } catch (emailError) {
        results.email.error = emailError instanceof Error ? emailError.message : "Email sending failed";
      }
    } else {
      results.email.error = "SendGrid credentials not configured";
    }

    // Check if at least one notification was sent
    const success = results.sms.sent || results.email.sent;

    return new Response(
      JSON.stringify({
        success,
        message: success
          ? "Your message has been sent!"
          : "Unable to send notification. Please try again later.",
        details: results,
      }),
      {
        status: success ? 200 : 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to process request",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const config: Config = {
  path: "/api/send-notification",
};
