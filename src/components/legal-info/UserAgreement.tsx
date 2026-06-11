import Link from "next/link";

const UserAgreement = () => {
  return (
    <>
      <p>Effective date: 14.08.2025</p>

      <section>
        <h2>1. General Provisions</h2>
        <p>
          1.1. The website <strong>polovtsev.by</strong> (hereinafter — the
          &quot;Service&quot;) is owned by{" "}
          <strong>
            Polovtsev Kirill Vladimirovich / IE Polovtsev Kirill Vladimirovich
          </strong>
          , TIN <strong>193792826</strong>, and provides access to paid fitness
          programs.
        </p>
        <p>
          1.2. By registering or paying for a product, you accept the terms of:
        </p>
        <ul>
          <li>
            <Link href="/oferta">Offer Agreement</Link>;
          </li>
          <li>
            <Link href="/policy">Privacy Policy</Link>.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Usage Rules</h2>
        <p>
          <strong>2.1. Permitted:</strong>
        </p>
        <ul>
          <li>Watching video lessons for personal use;</li>
          <li>Using mobile devices to access the Service.</li>
        </ul>

        <p>
          <strong>2.2. Prohibited:</strong>
        </p>
        <ul>
          <li>Sharing your login/password with third parties;</li>
          <li>Downloading, copying, or distributing content;</li>
          <li>Attempting to hack or breach the Service;</li>
          <li>Using content for commercial purposes.</li>
        </ul>
      </section>

      <section>
        <h2>3. Access Conditions</h2>
        <p>3.1. To gain access, you must:</p>
        <ol>
          <li>Register by providing accurate information;</li>
          <li>Pay for the product via ERIP / Belkart / bank card.</li>
        </ol>
        <p>3.2. Access is granted for the entire duration of product use.</p>
      </section>

      <section>
        <h2>4. Liability</h2>
        <p>4.1. The administration is not liable for:</p>
        <ul>
          <li>Injuries sustained while performing exercises;</li>
          <li>Technical failures of payment systems.</li>
        </ul>
        <p>
          4.2. In case of a violation of clause 2.2, the account will be
          blocked without a refund.
        </p>
      </section>

      <section>
        <h2>5. Changes to the Terms</h2>
        <p>
          5.1. The administration reserves the right to amend this agreement.
          Updated terms take effect upon publication on the Website.
        </p>
        <p>
          5.2. Continued use of the Service constitutes acceptance of the
          changes.
        </p>
      </section>

      <section>
        <h2>6. Contact</h2>
        <p>
          For inquiries: <strong>kirill.v.polovtsev@gmail.com</strong> or
          phone:{" "}
          <strong>+375(29)850-10-33.</strong>
        </p>
      </section>
    </>
  );
};

export default UserAgreement;
