import React, { useContext, useState } from "react";
import { Box, Autocomplete, TextField } from "@mui/material";
import Editor from "@monaco-editor/react";
import { AssigmentContext } from "../../context/CreateAssigmentProvider";

const EditorUI = ({ handleChange, task, setTask }) => {
  // Find the preset code for the selected language
  const selectedLanguage = languages.find((lang) => lang.label === task?.lang);
  const presetCode = selectedLanguage ? selectedLanguage.preset : "";

  return (
    <Box>
      <Autocomplete
        sx={{ mb: 4 }}
        name="lang"
        size="small"
        disablePortal
        id="combo-box-demo"
        options={languages}
        onChange={(event, value) => handleChange("lang", value.label)}
        renderInput={(params) => <TextField {...params} label="language" />}
      />

      <Editor
        height="90vh"
        onChange={(value) => handleChange("code", value)}
        language={task.lang || "javascript"}
        value={task.code || presetCode}
        options={editorOptions}
      />
    </Box>
  );
};

// Define languages and their respective presets
const languages = [
  { label: "javascript", preset: "// Your JavaScript code here" },
  { label: "java", preset: "// Your Java code here" },
  { label: "python", preset: "# Your Python code here" },
  // Add more languages and presets as needed
];

const editorOptions = {
  acceptSuggestionOnCommitCharacter: true,
  acceptSuggestionOnEnter: "on",
  accessibilitySupport: "auto",
  autoIndent: false,
  automaticLayout: true,
  codeLens: true,
  colorDecorators: true,
  contextmenu: true,
  cursorBlinking: "blink",
  cursorSmoothCaretAnimation: false,
  cursorStyle: "line",
  disableLayerHinting: false,
  disableMonospaceOptimizations: false,
  dragAndDrop: false,
  fixedOverflowWidgets: false,
  folding: true,
  foldingStrategy: "auto",
  fontLigatures: false,
  formatOnPaste: false,
  formatOnType: false,
  hideCursorInOverviewRuler: false,
  highlightActiveIndentGuide: true,
  links: true,
  mouseWheelZoom: false,
  multiCursorMergeOverlapping: true,
  multiCursorModifier: "alt",
  overviewRulerBorder: true,
  overviewRulerLanes: 2,
  quickSuggestions: true,
  quickSuggestionsDelay: 100,
  readOnly: false,
  renderControlCharacters: false,
  renderFinalNewline: true,
  renderIndentGuides: true,
  renderLineHighlight: "all",
  renderWhitespace: "none",
  revealHorizontalRightPadding: 30,
  roundedSelection: true,
  rulers: [],
  scrollBeyondLastColumn: 5,
  scrollBeyondLastLine: true,
  selectOnLineNumbers: true,
  selectionClipboard: true,
  selectionHighlight: true,
  showFoldingControls: "mouseover",
  smoothScrolling: false,
  suggestOnTriggerCharacters: true,
  wordBasedSuggestions: true,
  wordSeparators: "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
  wordWrap: "off",
  wordWrapBreakAfterCharacters: "\t})]?|&,;",
  wordWrapBreakBeforeCharacters: "{([+",
  wordWrapBreakObtrusiveCharacters: ".",
  wordWrapColumn: 80,
  wordWrapMinified: true,
  wrappingIndent: "none",
};

export default EditorUI;
