import { useNavigate } from "react-router-dom";
import { NavBar } from "../components";
import userGlobalStore from "../store/userStore";
import globalAppStore from "../store/appStore";

const ChallengesPage = () => {
  const navigate = useNavigate();
  const { challenges } = userGlobalStore();
  const { setChallengeTitle } = globalAppStore();

  const handleCardClick = (challengeId: string, challengeTitle: string) => {
    navigate(`/playground/${challengeId}`); // Navigate to playground with challenge ID
    setChallengeTitle(challengeTitle); // Set new challenge id
  };

  return (
    <div className="bg-primary-bg min-h-screen ">
      <NavBar />
      <div className="py-10 px-5">
        <h1 className="text-3xl font-bold text-center text-primary-white mb-8">
          Explore Challenges
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges && challenges.length === 0 ? (
            <p className="text-center text-primary-text">
              Loading challenges...
            </p>
          ) : (
            challenges &&
            challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-secondary-bg shadow-md rounded-lg p-6 hover:shadow-lg cursor-pointer border border-blue-200"
                onClick={() =>
                  handleCardClick(index.toString(), challenge.title)
                } // Use index or a unique challenge ID
              >
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-primary-white">
                    {challenge.title}
                  </h2>
                  <span
                    className={`inline-block px-3 py-1 mt-2 text-sm font-medium rounded-full ${
                      challenge.difficulty.toLowerCase() === "easy"
                        ? "bg-green-100 text-green-800"
                        : challenge.difficulty.toLowerCase() === "medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {challenge.difficulty}
                  </span>
                </div>
                <p className="text-primary-text mb-4">
                  {challenge.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {challenge.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm font-medium bg-blue-100 text-blue-800 rounded-full px-3 py-1"
                    >
                      #{tag.tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;
