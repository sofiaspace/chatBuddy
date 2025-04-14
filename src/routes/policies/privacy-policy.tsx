import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/policies/privacy-policy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen w-full  bg-white text-black  flex flex-col items-center justify-center py-10 px-3">
      <h1 className="my-6">
        <span className="text-4xl">Privacy Polisy</span>
      </h1>
      <div className=" w-full lg:w-[1024px] mx-auto flex flex-col gap-5">
        <p className="my-6">Effective Date: 11/04/2025</p>
        <h2 className="text-center mb-3 font-semibold">
          Welcome to ChatBuddy!
        </h2>
        <p>
          This Privacy Policy outlines how ChatBuddy handles user information.
          This App is a personal, non-commercial project created for educational
          purposes only. We take your privacy seriously and aim to be fully
          transparent about how your data is (or isn’t) handled.
        </p>

        <div className="border-b-1 border-light-blue pb-6">
          <h2 className="font-semibold pt-2 pb-3">
            No Personal Data Collection
          </h2>
          <p>
            We do not collect, store, or share any personally identifiable
            information (PII). You can use the App without providing any
            personal data. Even if you choose to sign up, your information is
            not retained, analyzed, or used for any purpose beyond enabling your
            access to the App during that session.
          </p>
        </div>

        <div className="border-b-1 border-light-blue pb-6">
          <h2 className="font-semibold pt-2 pb-3">
            How We Use Your Information
          </h2>
          <p>
            This App does not use cookies, analytics tools (like Google
            Analytics), or any tracking technologies. We do not monitor or log
            user activity.
          </p>
        </div>

        <div className="border-b-1 border-light-blue pb-6">
          <h2 className="font-semibold pt-2 pb-3">AI API Usage</h2>
          <p>
            The App uses a third-party AI service (such as OpenAI's API) to
            generate responses based on user input. Your messages are sent to
            the API temporarily for processing and response generation.
          </p>

          <ul className="list-disc pl-7">
            <li>We do not retain these messages.</li>
            <li>We do not analyze or use them for training.</li>
            <li>We do not control how the third-party API handles data.</li>
          </ul>

          <p>
            Please refer to the privacy policy of the respective AI API provider
            to understand how they handle your data.
          </p>
        </div>

        <div className="border-b-1 border-light-blue pb-6">
          {" "}
          <h2 className="font-semibold pt-2 pb-3">
            Voluntary Account Creation
          </h2>
          <p>If the App allows account creation:</p>
          <ul className="list-disc pl-7">
            <li>
              Your credentials or identifiers (if any) are not stored
              permanently.
            </li>
            <li>No profile data or activity logs are kept.</li>
          </ul>
          <p>
            Accounts exist solely to facilitate usage and session continuity
            during a session.
          </p>
        </div>

        <div className="border-b-1 border-light-blue pb-6">
          <h2 className="font-semibold pt-2 pb-3">Data Security</h2>
          <p>
            Even though we do not store data, basic industry-standard practices
            are followed to secure the infrastructure. However, as this is a
            personal project, no guarantees can be made regarding absolute
            security.
          </p>
        </div>

        <div className="border-b-1 border-light-blue pb-6">
          <h2 className="font-semibold pt-2 pb-3">Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated occasionally. Any significant
            changes will be reflected in the updated version on the App
            interface or repository. Continued use after such changes means you
            accept the updated policy.
          </p>
        </div>

        <div>
          <h2 className="font-semibold pt-2 pb-3">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            feel free to contact us at:
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
