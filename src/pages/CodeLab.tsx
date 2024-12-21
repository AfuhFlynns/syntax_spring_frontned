import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ControlledEditor from "@monaco-editor/react";
import "tailwindcss/tailwind.css";
import userGlobalStore from "../store/userStore";
import { useNavigate } from "react-router-dom";
import { challengesDataTypes } from "../TYPES";
import globalAppStore from "../store/appStore";
import { CustomLoader1 } from "../components";

const SyntaxSpringEditor = () => {
  const [code, setCode] = useState<string>(""); // Holds the current code in the editor
  const [language, setLanguage] = useState<string>(""); // Holds the selected language
  const [aiHelpOpen, setAiHelpOpen] = useState(false);
  const [previewOutput, setPreviewOutput] = useState<string>(""); // Holds the preview output
  const [aiResponse, setAiResponse] = useState<string | undefined>(""); // Holds AI response
  const [challenge, setChallenge] = useState<
    challengesDataTypes | null | undefined
  >(null);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false); // State for details dialog
  const [incorrectCodeDialogOpen, setIncorrectCodeDialogOpen] = useState(false); // State for incorrect code dialog
  const navigate = useNavigate();

  const { challenges, askAiHelp, error, loading } = userGlobalStore();
  const { challengeTitle } = globalAppStore();

  const handleFilterChallenges = () => {
    if (!challenges) return; // Exit if challenges are not available yet

    const filteredChallenge = challenges?.find(
      (item) => item.title === challengeTitle
    );
    setChallenge(filteredChallenge); // Set the matched challenge
    setLanguage(String(challenge?.type));
  };

  useEffect(() => {
    handleFilterChallenges();
  }, [challenges]); // Re-run when challenges are updated

  useEffect(() => {
    if (challenge && challenge.initialCode) {
      setCode(challenge.initialCode); // Set the initial code in the editor
    }
  }, [challenge]);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || ""); // Update the code when the editor content changes
  };

  const runCode = () => {
    if (code !== challenge?.solution) {
      setIncorrectCodeDialogOpen(true); // Show the incorrect code popup if the code doesn't match the solution
    } else {
      try {
        // For demonstration purposes, assuming the challenge language is JS
        if (language === "js" || language === "ts") {
          const output = eval(code); // Running the JS code (dangerous in production)
          setPreviewOutput(output);
        } else {
          setPreviewOutput("Code executed successfully.");
        }
      } catch (error: any | { message: string }) {
        setPreviewOutput(`Error: ${error?.message}`);
      }
    }
  };

  const toggleAiHelpDialog = () => {
    setAiHelpOpen(!aiHelpOpen);
  };

  const toggleDetailsDialog = () => {
    setDetailsDialogOpen(!detailsDialogOpen); // Toggle the visibility of the details dialog
  };

  const toggleIncorrectCodeDialog = () => {
    setIncorrectCodeDialogOpen(!incorrectCodeDialogOpen); // Toggle the visibility of the incorrect code dialog
  };

  const handleAiHelp = async () => {
    console.log("Clicked");
    const msg = await askAiHelp(
      String(challenge?.title),
      String(challenge?.description),
      String(challenge?.initialCode),
      String(challenge?.solution)
    );
    setAiResponse(String(msg)); // Set the AI response
    alert(msg);
  };

  return (
    <Box className="min-h-screen bg-gray-900 text-white p-4">
      {!challenges ? (
        <p>Loading challenges...</p> // Loading message if challenges are not available
      ) : challenge ? (
        <>
          <Box className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">{challengeTitle}</h1>
            <Box className="flex gap-4 items-center">
              <div className="bg-gray-300 w-[5rem] h-[2rem] flex flex-row items-center justify-center text-black border-teal-500 rounded-md cursor-default font-bold text-h3">
                <span>{challenge.type}</span>
              </div>
              <Button
                variant="contained"
                className="bg-teal-500 hover:bg-teal-400"
                onClick={runCode}
              >
                Run Code
              </Button>
              <Button
                variant="contained"
                className="bg-teal-500 hover:bg-teal-400"
                onClick={toggleAiHelpDialog}
              >
                Ask AI for Help
              </Button>
              <Button
                variant="contained"
                className="bg-teal-500 hover:bg-teal-400"
                onClick={toggleDetailsDialog}
              >
                View Details
              </Button>
            </Box>
          </Box>

          {/* Back to Home Button */}
          <Box className="mb-4">
            <Button
              variant="contained"
              className="bg-teal-500 hover:bg-teal-400"
              onClick={() => navigate("/challenges")}
            >
              Back to Challenges
            </Button>
          </Box>

          <Box className="border rounded-lg overflow-hidden shadow-lg mb-4">
            <ControlledEditor
              height="60vh"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={handleEditorChange}
              options={{
                fontSize: 14,
                fontFamily: "'JetBrains Mono', monospace",
                minimap: { enabled: false },
                automaticLayout: true,
                wordWrap: "on",
                suggest: {
                  filterGraceful: true,
                },
              }}
            />
          </Box>

          <Box className="border rounded-lg overflow-hidden shadow-lg bg-gray-800 p-4">
            <h2 className="text-lg font-bold text-teal-300 mb-2">Output</h2>
            {["html", "css", "js", "tailwindcss", "ts"].includes(language) ? (
              <iframe
                className="w-full h-64 bg-white rounded-md"
                srcDoc={previewOutput}
                title="Preview"
              />
            ) : (
              <pre className="w-full h-64 bg-gray-700 text-teal-300 p-2 rounded-md overflow-auto">
                {previewOutput}
              </pre>
            )}
          </Box>

          {/* Challenge Details Dialog */}
          <Dialog
            open={detailsDialogOpen}
            onClose={toggleDetailsDialog}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle className="bg-gray-800 text-teal-300">
              Challenge Details
              <IconButton
                aria-label="close"
                onClick={toggleDetailsDialog}
                sx={{ position: "absolute", right: 8, top: 8, color: "#fff" }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent className="bg-gray-800 text-white">
              <p>{challenge.description}</p>
            </DialogContent>
          </Dialog>

          {/* Incorrect Code Dialog */}
          <Dialog
            open={incorrectCodeDialogOpen}
            onClose={toggleIncorrectCodeDialog}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle className="bg-gray-800 text-teal-300">
              Incorrect Code
              <IconButton
                aria-label="close"
                onClick={toggleIncorrectCodeDialog}
                sx={{ position: "absolute", right: 8, top: 8, color: "#fff" }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent className="bg-gray-800 text-white">
              <p>Your code doesn't match the expected solution.</p>
              <pre className="bg-gray-700 text-teal-300 p-4 rounded-md">
                Try again
              </pre>
            </DialogContent>
          </Dialog>

          {/* Ai Help Modal for AI response */}
          {aiResponse && aiResponse.length > 6 && (
            <Modal
              open={aiHelpOpen}
              onClose={toggleAiHelpDialog}
              className="flex justify-center items-center"
            >
              <Box className="bg-gray-900 p-6 rounded-lg shadow-lg w-[80%]">
                <h1 className="text-teal-500 text-2xl font-bold mb-4">
                  AI Response
                </h1>
                <pre className="bg-gray-800 text-teal-300 p-4 rounded-md">
                  {aiResponse}
                </pre>
                <Button
                  variant="contained"
                  className="bg-teal-500 hover:bg-teal-400 mt-4"
                  onClick={toggleAiHelpDialog}
                >
                  Close
                </Button>
              </Box>
            </Modal>
          )}

          {/* AI Help Dialog */}
          <Dialog
            open={aiHelpOpen}
            onClose={toggleAiHelpDialog}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle className="bg-gray-800 text-teal-300">
              AI Assistance
              <IconButton
                aria-label="close"
                onClick={toggleAiHelpDialog}
                sx={{ position: "absolute", right: 8, top: 8, color: "#fff" }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <div className="bg-gray-800 text-white p-4 flex flex-col items-center text-left">
              <p className="mb-4 text-primary-text text-regular">
                Press the button below to get a hint from AI!
              </p>
              {error ? (
                <p className="mb-4 text-red-600 text-regular">{error}</p>
              ) : (
                <p className="mb-4 text-primary-text text-regular">
                  {aiResponse}
                </p>
              )}
              <Button
                className="mt-4 bg-teal-500 hover:bg-teal-400 w-full"
                onClick={handleAiHelp}
              >
                {loading ? <CustomLoader1 /> : <span>Ask AI</span>}
              </Button>
            </div>
          </Dialog>
        </>
      ) : (
        <p>Challenge not found.</p> // Display message if challenge is not found
      )}
    </Box>
  );
};

export default SyntaxSpringEditor;
