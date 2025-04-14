import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/policies/terms-of-use")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen w-full  bg-white text-black  flex flex-col items-center justify-center py-10 px-3">
      <h1 className="my-6">
        <span className="text-4xl">Terms of use</span>
      </h1>
      <div className=" w-full lg:w-[1024px] mx-auto flex flex-col gap-8">
        <p className="my-6">Effective Date: 14/04/2025</p>
        <p>Dear users, welcome to ChatBuddy!</p>
        <p>
          This application was created solely for educational and experimental
          purposes by an individual developer exploring web development and AI
          technologies. By using the App, you agree to the following terms:
        </p>

        <div className="border-b-1 border-light-blue pb-6">
          <h2 className="font-semibold pb-3">Non-Commercial Use</h2>
          <p>
            This App is provided as a personal project for learning and
            development. It is not intended for commercial use. No fees are
            charged, and no services are sold.
          </p>
        </div>
        <div className="border-b-1 border-light-blue pb-6">
          <h2 className="font-semibold pb-3">User Accounts</h2>
          <p>
            You may create an account to use the App. Account creation is
            optional and is only intended to allow interaction with the
            application. No personal data will be collected, stored, or used
            beyond what is strictly necessary for functionality (e.g., temporary
            session handling).
          </p>
        </div>
        <div className="border-b-1 border-light-blue pb-6">
          <h2 className="font-semibold pb-3">No Data Collection</h2>
          <p>
            We do not collect, store, or share any personal data. No user
            messages, credentials, or interactions are saved permanently or used
            for any purpose other than displaying responses during your session.
          </p>
        </div>
        <div className="border-b-1 border-light-blue pb-6">
          <h2 className="font-semibold pb-3">Third-Party AI API</h2>
          <p>
            The App uses a third-party AI service to generate chat responses. By
            using this App, you acknowledge that your messages may be sent to
            and processed by that third-party service. While we do not store
            your data, we cannot control or make guarantees about how the
            third-party service handles your input. Please refer to the third
            party's terms and privacy policy for more information.
          </p>
        </div>
        <div className="border-b-1 border-light-blue pb-6">
          <h2 className="font-semibold pb-3">No Guarantees</h2>
          <p>
            This App is experimental and provided "as is." It may contain bugs
            or errors and may be taken down at any time. No guarantees are made
            about the accuracy, reliability, or appropriateness of the responses
            provided by the AI.
          </p>
        </div>
        <div className="border-b-1 border-light-blue pb-6">
          <h2 className="font-semibold pb-3">Responsible Use</h2>
          <p>
            You agree to use the App only for lawful purposes and in a manner
            that does not harm or infringe on the rights of others. Abuse or
            misuse of the App is not permitted.
          </p>
        </div>
        <div>
          <h2 className="font-semibold pb-3">Changes to the Terms</h2>
          <p>
            These Terms may be updated from time to time. Significant changes
            will be posted within the App. Your continued use of the App after
            changes have been made will constitute your acceptance of the
            revised Terms.
          </p>
        </div>

        <p>
          If you have any questions or feedback about this App, feel free to
          reach out via the GitHub repository.
        </p>
      </div>
    </div>
  );
}
