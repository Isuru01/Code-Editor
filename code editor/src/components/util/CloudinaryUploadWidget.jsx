import { useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";

const CloudinaryUploadWidget = (props) => {
  const { setTask } = props;

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const [pdfPublicId, setPdfPublicId] = useState(null);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dpmszkaff",
        uploadPreset: "mklwjsd",
        sources: ["local", "url"],
        resourceType: "raw",
        clientAllowedFormats: ["pdf"],
      },
      async (error, result) => {
        if (!error && result && result.event === "success") {
          setPdfPublicId(result.info.public_id);
          setTask((prev) => ({
            ...prev,
            taskPdf: `https://res.cloudinary.com/dpmszkaff/raw/upload/${result.info.public_id}`,
          }));
        }
      }
    );
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Button
        variant="outlined"
        sx={{ mt: 2, textAlign: "left" }}
        onClick={() => widgetRef.current.open()}
      >
        Upload Labsheet
      </Button>
      {pdfPublicId && (
        <a
          href={`https://res.cloudinary.com/dpmszkaff/raw/upload/${pdfPublicId}`}
        >
          Open PDF
        </a>
      )}
    </Box>
  );
};

export default CloudinaryUploadWidget;
