import React from "react";

const styles = {
  page: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    background: "linear-gradient(135deg, #e3f0ff 0%, #b3cfff 100%)",
    minHeight: "100vh",
    padding: "40px 0",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(44, 98, 186, 0.12)",
    padding: "40px",
    color: "#234078",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#2c62ba",
    marginBottom: "24px",
    textAlign: "center",
    letterSpacing: "1px",
  },
  sectionTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#2c62ba",
    marginTop: "32px",
    marginBottom: "12px",
  },
  list: {
    marginLeft: "20px",
    marginBottom: "16px",
  },
  contact: {
    background: "#e3f0ff",
    borderRadius: "8px",
    padding: "16px",
    marginTop: "24px",
    color: "#234078",
  },
  hr: {
    border: "none",
    borderTop: "1px solid #b3cfff",
    margin: "32px 0",
  },
};

export default function PrivacyPolicy() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p>
          This Privacy Policy explains how ReddingtonGlobal (“we”, “us”, or “our”) collects, uses, shares, and protects your information when you engage with our website, services, or representatives.
        </p>
        <hr style={styles.hr} />

        <h2 style={styles.sectionTitle}>1. Information We Collect</h2>
        <ul style={styles.list}>
          <li>
            <strong>Personal Information:</strong> Full name, phone number, email address, mailing address, date of birth, Social Security Number (if required).
          </li>
          <li>
            <strong>Financial Information:</strong> Debt balances, credit score insights, income, banking details, payment history, and other relevant financial data.
          </li>
          <li>
            <strong>Usage Information:</strong> Browser type, IP address, device type, time spent, pages visited, and user behavior.
          </li>
          <li>
            <strong>Communications Data:</strong> Emails, call recordings, chat transcripts, support tickets, and other service interactions.
          </li>
          <li>
            <strong>Third-Party Data:</strong> Credit bureaus and affiliate partners may share your data under your authorization.
          </li>
        </ul>

        <h2 style={styles.sectionTitle}>2. How We Use Your Information</h2>
        <ul style={styles.list}>
          <li>Deliver personalized debt relief and financial consulting services.</li>
          <li>Conduct credit assessments and offer tailored program recommendations.</li>
          <li>Communicate important updates, reminders, confirmations, and service notices.</li>
          <li>Improve our platform functionality, analytics, and user experience.</li>
          <li>Fulfill legal obligations and protect our business interests.</li>
        </ul>

        <h2 style={styles.sectionTitle}>3. TCPA & Consent to Contact</h2>
        <p>
          By providing your phone number (landline or mobile), you expressly consent, in accordance with the Telephone Consumer Protection Act (TCPA), to receive calls (including pre-recorded or artificial voice messages), text messages (SMS/MMS), and emails from ReddingtonGlobal and its service providers or affiliates for account servicing, informational updates, and marketing offers related to debt relief or financial services. This may include automated systems such as auto-dialers or predictive dialers. Consent is not a condition of purchase.
        </p>
        <p>
          You may opt-out at any time by replying "STOP" to SMS messages, clicking "unsubscribe" in emails, calling us at: [Insert Support Number], or emailing: privacy@reddingtonglobal.com
        </p>

        <h2 style={styles.sectionTitle}>4. Data Sharing & Disclosure</h2>
        <ul style={styles.list}>
          <li>With trusted third-party vendors (CRM, payment processors, credit report services) under strict confidentiality terms.</li>
          <li>With government or law enforcement agencies, if legally compelled.</li>
          <li>With affiliates or marketing partners only with your express written consent.</li>
          <li>We never sell your personal information.</li>
        </ul>

        <h2 style={styles.sectionTitle}>5. Your Privacy Rights</h2>
        <ul style={styles.list}>
          <li><strong>Access:</strong> View the personal data we hold.</li>
          <li><strong>Correction:</strong> Update inaccurate or outdated data.</li>
          <li><strong>Deletion:</strong> Request removal of your personal information (subject to legal limitations).</li>
          <li><strong>Objection:</strong> Restrict use of your data for certain purposes.</li>
          <li><strong>Withdraw Consent:</strong> Revoke marketing or communication permissions at any time.</li>
        </ul>
        <div style={styles.contact}>
          To exercise your rights, please contact us at:<br />
          📧 <a href="mailto:privacy@reddingtonglobal.com" style={{ color: "#2c62ba", textDecoration: "underline" }}>privacy@reddingtonglobal.com</a>
        </div>

        <h2 style={styles.sectionTitle}>6. Cookies & Tracking</h2>
        <ul style={styles.list}>
          <li>Analyze traffic and user behavior</li>
          <li>Improve page performance and UX</li>
          <li>Personalize your experience</li>
        </ul>
        <p>
          You may control cookie settings via your browser preferences.
        </p>

        <h2 style={styles.sectionTitle}>7. Security Measures</h2>
        <ul style={styles.list}>
          <li>SSL encryption</li>
          <li>Secure access controls</li>
          <li>Third-party security audits</li>
          <li>Data minimization & retention policies</li>
        </ul>

        <h2 style={styles.sectionTitle}>8. Data Retention</h2>
        <p>
          Your information is retained only as long as necessary to fulfill services or comply with legal obligations. It is then securely archived or deleted.
        </p>

        <h2 style={styles.sectionTitle}>9. Children's Privacy</h2>
        <p>
          Our services are intended only for individuals aged 18 and above. We do not knowingly collect data from minors under 13.
        </p>

        <h2 style={styles.sectionTitle}>10. Changes to This Policy</h2>
        <p>
          We may update this policy periodically. The most recent version will always be posted on this page with the revised effective date.
        </p>

        <h2 style={styles.sectionTitle}>11. Contact Us</h2>
        <div style={styles.contact}>
          For questions or requests, reach out to:<br />
          📧 <a href="mailto:privacy@reddingtonglobal.com" style={{ color: "#2c62ba", textDecoration: "underline" }}>privacy@reddingtonglobal.com</a><br />
          📍 ReddingtonGlobal Solutions<br />
          📞 (Number)<br />
          🌐 <a href="https://www.reddingtonglobal.com" style={{ color: "#2c62ba", textDecoration: "underline" }}>www.reddingtonglobal.com</a>
        </div>
      </div>
    </div>
  );
}