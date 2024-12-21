import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ControlledEditor from "@monaco-editor/react";
import "tailwindcss/tailwind.css";
import userGlobalStore from "../store/userStore";
import { useParams } from "react-router-dom";

const SyntaxSpringEditor = () => {
  const [code, setCode] = useState<string>("");
  const [language, setLanguage] = useState<string>("javascript");
  const [aiHelpOpen, setAiHelpOpen] = useState(false);
  const [previewOutput, setPreviewOutput] = useState<string>("");
  const [challenge, setChallenge] = useState<any>(null);
  const { challengeId } = useParams();

  const { challenges } = userGlobalStore();

  const handleFilterChallenges = () => {
    const filteredChallenges = challenges?.filter(
      (index) => index.toString() === challengeId
    );
    setChallenge(filteredChallenges);
  };

  useEffect(() => {
    handleFilterChallenges();
  }, [challenges]);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || "");
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setLanguage(event.target.value as string);
  };

  const runCode = () => {
    if (
      language === "html" ||
      language === "css" ||
      language === "javascript" ||
      language === "react"
    ) {
      setPreviewOutput(code);
    } else {
      setPreviewOutput("Running your code...\n[Output]: \n" + code);
    }
  };

  const toggleAiHelpDialog = () => {
    setAiHelpOpen(!aiHelpOpen);
  };

  const askAiHelp = async (question: string) => {
    try {
      const response = await fetch("/api/ai-help", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      alert(data.answer || "AI response unavailable.");
    } catch (error) {
      console.error("Error with AI help request:", error);
    }
  };

  return (
    <Box className="min-h-screen bg-gray-900 text-white p-4">
      {challenge ? (
        <>
          <Box className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-teal-300">
              {challenge.title}
            </h1>
            <Box className="flex gap-4 items-center">
              <Select
                value={language}
                onChange={handleLanguageChange}
                className="bg-gray-800 text-teal-300 border-teal-500 rounded-md"
              >
                {challenge.supportedLanguages.map((lang: string) => (
                  <MenuItem key={lang} value={lang}>
                    {lang}
                  </MenuItem>
                ))}
              </Select>
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
            </Box>
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
                minimap: { enabled: false },
                automaticLayout: true,
              }}
            />
          </Box>

          <Box className="border rounded-lg overflow-hidden shadow-lg bg-gray-800 p-4">
            <h2 className="text-lg font-bold text-teal-300 mb-2">Output</h2>
            {language === "html" ||
            language === "css" ||
            language === "react" ||
            language === "javascript" ? (
              <iframe
                className="w-full h-64 bg-white rounded-md"
                srcDoc={previewOutput}
                title="Preview"
              />
            ) : (
              <pre className="w-full h-64 bg-gray-900 text-teal-300 p-2 rounded-md overflow-auto">
                {previewOutput}
              </pre>
            )}
          </Box>

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
            <DialogContent className="bg-gray-800 text-white">
              <p className="mb-4 text-gray-400">
                Type your question below, and our AI bot will assist you!
              </p>
              <textarea
                className="w-full h-32 p-2 bg-gray-900 text-white border border-teal-500 rounded-md"
                placeholder="Ask your question here..."
              ></textarea>
              <Button
                variant="contained"
                className="mt-4 bg-teal-500 hover:bg-teal-400 w-full"
                onClick={() => askAiHelp("Example question")}
              >
                Submit
              </Button>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <p>Loading challenge...</p>
      )}
    </Box>
  );
};

export default SyntaxSpringEditor;
