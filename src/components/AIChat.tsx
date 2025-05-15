import { useState } from "react";
import Logo from "../assets/chatgpt-icon.png";
import { useFetch } from "../hooks/useFetch";
import { useAuth } from "../hooks/useAuth";

export const AIChat = () => {
  const [prompt, setPrompt] = useState<string>("");

  const { isLoading, error, data, fetchData } = useFetch();

  const handleSend = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (prompt.trim()) fetchData(prompt);

    setPrompt("");
  };

  return (
    <div className="py-10 px-14 w-full flex flex-col gap-3 justify-center items-center">
      <img src={Logo} alt="logo" className="w-[50px] h-[50px] animate-logo" />

      <h1>Welcome to ChatBuddy!</h1>

      <form method="post" className="w-full my-8 relative">
        <input
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          type="text"
          name="ai_chat"
          id="ai_chat"
          className="h-[39px] w-[80%] mx-auto pr-12 block bg-[#e8f0f8] rounded-full outline-none text-black px-3"
        />
        <label htmlFor="ai_chat" className="hidden">
          AI chat input
        </label>
        <button
          onClick={handleSend}
          type="submit"
          className="absolute top-0.5 right-12 p-2 rounded-full bg-gradient-to-r from-[#8A2A9B]  to-[#06238F] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="white"
            viewBox="0 0 16 16"
            className="abs"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
          </svg>
        </button>

        <div className="mt-8 text-md overflow-y-auto max-h-[400px]">
          {isLoading && <p>Loading answer...</p>} {data}
        </div>
      </form>
    </div>
  );
};
