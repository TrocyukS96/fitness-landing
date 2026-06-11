import Link from "next/link";

const OffertaAgreement = () => {
  return (
    <>
      <div>
        <p>
          <strong>Polovtsev Kirill Vladimirovich</strong>, TIN{" "}
          <strong>193792826</strong>, registered at:{" "}
          <strong>Minsk, Vostochnaya St., 26, apt. 154</strong>, hereinafter
          referred to as the &quot;Service Provider&quot;, offers to enter into a service
          agreement on the terms of this offer.
        </p>
        <p>Publication date: 14.08.2025</p>
      </div>

      <section>
        <h2>1. Terms and Definitions</h2>
        <p>
          1.1. <strong>Offer</strong> — this document published on the website{" "}
          <strong>polovtsev.by</strong>.
        </p>
        <p>
          1.2. <strong>Acceptance</strong> — full and unconditional acceptance
          of the offer by paying for the services.
        </p>
        <p>
          1.3. <strong>Information resource</strong> — has no expiration date.
        </p>
      </section>

      <section>
        <h2>2. Subject of the Agreement</h2>
        <p>2.1. The Service Provider grants the Client access to:</p>
        <ul>
          <li>Fitness video lessons via a personal account;</li>
          <li>Additional materials.</li>
        </ul>
        <p>2.2. Services are provided remotely via the internet.</p>
      </section>

      <section>
        <h2>3. Service Delivery Procedure</h2>
        <p>3.1. To gain access, the Client:</p>
        <ol>
          <li>Registers on the Website;</li>
          <li>
            Pays for the product via ERIP / Belkart / bank card;
          </li>
          <li>
            Receives automatic access to the content after payment confirmation.
          </li>
        </ol>
        <p>3.2. Access period: unlimited from the moment of payment.</p>
      </section>

      <section>
        <h2>4. Pricing and Payment</h2>
        <p>
          4.1. Subscription prices:
          <p>
            {" "}
            — basic plan — <strong>129.86 BYN;</strong>
          </p>
          <p>
            {" "}
            — premium plan — <strong>286.98 BYN.</strong>
          </p>
        </p>
        <p>
          4.2. The prices specified in clause 4.1 of this Agreement apply
          exclusively to access services for &quot;home Pilates lessons&quot; based on
          pre-recorded video lessons. The cost of other services (individual
          sessions at a fitness club, online consultations, massage services) is
          determined separately and communicated to the parties accordingly.
        </p>
        <p>4.3. Payment is made as a one-time charge for the selected plan.</p>
        <p>
          4.4. A refund is available within <strong>14 days</strong> provided
          the services have not been used.
        </p>
      </section>

      <section>
        <h2>5. Rights and Obligations of the Parties</h2>
        <p>
          <strong>5.1. The Service Provider undertakes to:</strong>
        </p>
        <ul>
          <li>
            Provide access to the content within 24 hours of payment;
          </li>
          <li>
            Ensure Website availability of at least 95% of the time per month.
          </li>
        </ul>
        <p>
          <strong>5.2. The Client undertakes to:</strong>
        </p>
        <ul>
          <li>Not share their login/password with third parties;</li>
          <li>Not copy or distribute the materials.</li>
        </ul>
      </section>

      <section>
        <h2>6. Liability</h2>
        <p>6.1. The Service Provider is not liable for:</p>
        <ul>
          <li>Injuries sustained while performing exercises;</li>
          <li>The operation of payment systems and internet providers.</li>
        </ul>
        <p>
          6.2. The activities are not related to the provision of medical
          services and do not constitute a medical service.
        </p>
        <p>
          6.3. In case of a violation of clause 5.2, access will be blocked
          without a refund.
        </p>
      </section>

      <section>
        <h2>7. Final Provisions</h2>
        <p>7.1. Acceptance of the offer implies agreement with:</p>
        <ul>
          <li>
            <Link href="/policy">Privacy Policy</Link>;
          </li>
          <li>
            <Link href="/terms">Terms of Use</Link>.
          </li>
        </ul>
        <p>
          7.2. Disputes are resolved in accordance with the legislation of the
          Republic of Belarus.
        </p>
        <p>7.3. Service Provider details:</p>
        <div>
          <p>
            <strong>IE Polovtsev Kirill Vladimirovich</strong>
          </p>
          <p>TIN: 193792826</p>
          <p>Bank: Alfa-Bank</p>
          <p>Account: BY14ALFA30132H14230010270000</p>
          <p>Contact email: kirill.v.polovtsev@gmail.com</p>
        </div>
      </section>

      <div>
        <p>Service Provider: _________________/Polovtsev Kirill Vladimirovich/</p>
        <p>Seal (if applicable)</p>
      </div>
    </>
  );
};

export default OffertaAgreement;
