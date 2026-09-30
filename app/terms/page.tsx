import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of The Real Return™ and the journeys, Academy, and experiences it offers.",
  path: "/terms",
});

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" updated="September 21, 2026">
      <div>
        <h2>Acceptance of terms</h2>
        <p>
          By using this website, submitting a reservation or registration, enrolling in the Academy, or paying a deposit, you agree
          to these terms.{" "}
          <em>[The registered legal entity you&apos;re contracting with will be named here once finalized.]</em>
        </p>
      </div>

      <div>
        <h2>What we offer</h2>
        <p>
          The Real Return™ offers curated travel journeys and experiences to Ghana, self-paced online Academy coursework, and a
          reservation process that begins with a deposit or an inquiry. Submitting a reservation, registration, or enrollment is a
          request to work with a steward, not a confirmed booking, until a steward has followed up and confirmed availability,
          dates, and final pricing with you directly.
        </p>
      </div>

      <div>
        <h2>Deposits and payments</h2>
        <p>
          Where online payment is available, deposits are processed through PayPal in USD. A deposit holds your place while a
          steward finalizes your itinerary and tier; it is applied toward the total cost of your journey.
        </p>
        <p>
          <em>
            [Our cancellation and refund policy — including whether and when deposits are refundable — is still being finalized and
            will be published here before deposits go live to the public. Until then, deposit terms are confirmed individually with
            your steward.]
          </em>
        </p>
      </div>

      <div>
        <h2>Assumption of risk</h2>
        <p>
          International travel carries inherent risks, including but not limited to travel delays, health and safety conditions at
          a destination, and activities offered as part of an itinerary. You are responsible for obtaining appropriate travel
          insurance, required documentation (including passports and visas), and any recommended vaccinations, and for assessing
          your own fitness to participate in the activities included in your journey.
        </p>
      </div>

      <div>
        <h2>Academy coursework</h2>
        <p>
          Academy courses are licensed to you for personal, non-commercial use. Course content, including video, text, and
          materials, may not be copied, redistributed, or resold.
        </p>
      </div>

      <div>
        <h2>Acceptable use</h2>
        <p>
          You agree to provide accurate information when submitting a reservation, registration, or enrollment, and not to use the
          site to submit false, fraudulent, or abusive requests.
        </p>
      </div>

      <div>
        <h2>Intellectual property</h2>
        <p>
          The Real Return™ name, marks, and the content on this site (text, images, video, and course materials) are owned by us or
          our licensors and may not be used without permission.
        </p>
      </div>

      <div>
        <h2>Disclaimers and limitation of liability</h2>
        <p>
          <em>
            [Standard disclaimer-of-warranties and limitation-of-liability language belongs here — drafted by counsel to match our
            actual insurance coverage and risk tolerance, rather than boilerplate that may over- or under-promise.]
          </em>
        </p>
      </div>

      <div>
        <h2>Governing law</h2>
        <p>
          <em>
            [The state or country whose law governs these terms, and where disputes will be resolved, will be specified here once
            our legal entity and registration are finalized.]
          </em>
        </p>
      </div>

      <div>
        <h2>Changes to these terms</h2>
        <p>We may update these terms as the business evolves. The date at the top reflects the most recent revision.</p>
      </div>

      <div>
        <h2>Contact us</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:efiewura89@gmail.com" className="text-purple underline underline-offset-2">
            efiewura89@gmail.com
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
