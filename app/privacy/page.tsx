import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How The Real Return™ collects, uses, and protects your information.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 21, 2026">
      <div>
        <h2>Who we are</h2>
        <p>
          The Real Return™ (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is a heritage and legacy travel platform for the African diaspora, operating this
          website and the journeys, Academy courses, and experiences it describes.{" "}
          <em>
            [The registered legal entity behind The Real Return™, and its state of incorporation, will be added here once
            finalized.]
          </em>
        </p>
      </div>

      <div>
        <h2>Information we collect</h2>
        <p>We collect information you choose to give us when you use the site, specifically:</p>
        <ul>
          <li>
            <strong>Reservation and inquiry details</strong> (the Reserve page): name, email, phone, WhatsApp number, country,
            preferred travel dates, number of travelers, interests, travel style, and any message you include.
          </li>
          <li>
            <strong>Experience registrations</strong>: the same categories of contact and trip-planning information, tied to the
            specific experience you&apos;re registering interest in.
          </li>
          <li>
            <strong>Academy enrollments</strong>: name, email, phone, country, the course you&apos;re enrolling in, and any message.
          </li>
          <li>
            <strong>Deposit payments</strong>: when you pay a reservation deposit, PayPal processes the transaction directly. We
            receive confirmation that a payment succeeded and the amount, tier, and PayPal order ID — we do not receive or store
            your card or bank details.
          </li>
        </ul>
        <p>
          We don&apos;t currently run third-party analytics or advertising trackers on this site. If that changes, this policy will
          be updated to describe what&apos;s added and why.
        </p>
      </div>

      <div>
        <h2>How we use your information</h2>
        <ul>
          <li>To respond to your inquiry or reservation and have a steward follow up with you.</li>
          <li>To process and confirm deposit payments.</li>
          <li>To send confirmation and operational emails about the journey, course, or experience you signed up for.</li>
          <li>To maintain an internal record of leads and their status, so nothing you send us gets lost.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </div>

      <div>
        <h2>Who we share it with</h2>
        <p>We share information only with the service providers that make the site work:</p>
        <ul>
          <li>
            <strong>Supabase</strong> stores reservation, registration, and enrollment records, and powers staff sign-in for our
            internal admin dashboard.
          </li>
          <li>
            <strong>Resend</strong> delivers the confirmation and internal-notification emails triggered by your submission.
          </li>
          <li>
            <strong>PayPal</strong> processes deposit payments and handles your payment details directly under its own privacy
            policy.
          </li>
          <li>
            <strong>Sanity</strong> hosts the editorial content (courses, packages, page copy) shown on this site; it does not
            receive your personal information.
          </li>
        </ul>
      </div>

      <div>
        <h2>How long we keep it</h2>
        <p>
          We keep reservation, registration, and enrollment records for as long as needed to respond to you and maintain our
          business records, or until you ask us to delete them.
        </p>
      </div>

      <div>
        <h2>Your choices</h2>
        <p>
          You can ask us to access, correct, or delete the information we hold about you at any time by emailing us at the address
          below.
        </p>
      </div>

      <div>
        <h2>Children&apos;s privacy</h2>
        <p>
          This site is not directed at children, and we do not knowingly collect information from children under 13 outside of the
          traveler details a parent or guardian provides as part of planning a family journey.
        </p>
      </div>

      <div>
        <h2>Changes to this policy</h2>
        <p>We may update this policy as the site and our practices evolve. The date at the top reflects the most recent revision.</p>
      </div>

      <div>
        <h2>Contact us</h2>
        <p>
          Questions about this policy, or requests about your information, can be sent to{" "}
          <a href="mailto:efiewura89@gmail.com" className="text-purple underline underline-offset-2">
            efiewura89@gmail.com
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
