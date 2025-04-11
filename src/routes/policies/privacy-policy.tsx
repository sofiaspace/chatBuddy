import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/policies/privacy-policy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen w-full  bg-white text-black  flex flex-col items-center justify-center py-10">
      <h1 className="my-6">
        <span className="text-4xl">Privacy Polisy</span>
      </h1>
      <div className=" w-full lg:w-[1024px] mx-auto flex flex-col gap-5">
        <p className="my-6">Effective Date: 11/04/2025</p>
        <h2 className="text-center mb-3 font-semibold">
          Welcome to ChatBuddy!
        </h2>
        <p>
          This Privacy Policy outlines how ChatBuddy collects, uses, and
          protects your personal information. We value your privacy and are
          committed to safeguarding any information you provide to us. The app
          is still under development, so no data is collected during this time.
        </p>

        <h2 className="font-semibold pt-2">Information we collect</h2>
        <div>
          <p>
            We may collect the following types of information when you use our
            app:
          </p>
          <ul className="list-disc pl-7">
            <li>
              <b>Personal Information:</b> This includes information such as
              your name, email address, or any other personal data you
              voluntarily provide to us.
            </li>
            <li>
              <b>Usage Data:</b> We may collect information on how the app is
              accessed and used, including your device information, usage
              statistics, and logs.
            </li>
            <li>
              <b>Cookies:</b> Our app may use cookies or similar tracking
              technologies to enhance the user experience and analyze usage
              patterns.
            </li>
          </ul>

          <p className="pt-4 text-sm">
            <b>Note:</b> Since this app is private and currently for development
            use only, the collection of personal information is minimal, and no
            personal data is shared with third parties.
          </p>
        </div>

        <h2 className="font-semibold pt-2">How We Use Your Information</h2>
        <div>
          <p>
            The information we collect is used solely for the following
            purposes:
          </p>
          <ul className="list-disc pl-7">
            <li>
              To provide, maintain, and improve the functionality of our app.
            </li>
            <li>To prevent misuse or unauthorized access to the app.</li>
          </ul>

          <p className="pt-3">
            We do not share your personal data with third parties
          </p>
        </div>

        <h2 className="font-semibold pt-2">Third-Party Links</h2>
        <p>
          Our app may contain links to other websites or services. However, we
          are not responsible for the privacy practices of these third-party
          sites. We recommend reviewing their privacy policies before providing
          any personal information.
        </p>

        <h2 className="font-semibold pt-2">Updates to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will update the "Effective Date" at the top of this page. Any changes
          will be effective immediately upon posting.
        </p>

        <h2 className="font-semibold pt-2">Contact Us</h2>
        <div>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your personal data, feel free to contact us at:
          </p>
          <ul className="list-disc pl-7">
            <li>Email: sofia.zengu@gmail.com</li>
            <li>GitHub: https://github.com/sofiaspace/</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
