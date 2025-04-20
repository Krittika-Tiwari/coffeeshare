"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { BorderBeam } from "@/components/magicui/border-beam";

export const UploadForm = () => {
  const [file, setFile] = React.useState<File>();
  const [isUploading, setIsUploading] = React.useState(false);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const currentFile = event.target.files[0];
      setFile(currentFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    console.log("file", file);

    try {
      setIsUploading(true);

      // Upload logic goes here

      toast.success("File uploaded successfully", {
        description: "Redirecting to video page...",
      });

      router.push("/");
    } catch (error) {
      toast.error("Upload failed", {
        description: "Please try again later",
      });
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="h-full w-full  flex items-center justify-center p-4">
      <Card className=" h-full w-full relative">
        <CardContent className="h-full flex  flex-col justify-center items-center space-y-6 p-8">
          <label
            htmlFor="file-upload"
            className="flex flex-col h-full items-center justify-center w-full "
          >
            <Upload className="size-10 text-[#4b3621] animate-bounce  " />

            <span className="text-base  font-semibold text-[#7b5e47]">
              {file ? file.name : "Click to upload file"}
            </span>
            <span className="text-lg font-semibold mt-1 text-[#7b5e47]">
              Click to browse or drag files here to start sharing
            </span>
            <input
              type="file"
              accept="
    .txt,.pdf,.doc,.docx,.xls,.xlsx,.csv,.ppt,.pptx,
    .json,.xml,.md,.zip,.rar,.7z,.tar,
    image/*,
    audio/*,
    application/*"
              id="file-upload"
              className="sr-only"
              onChange={handleFileChange}
            />

            {file && (
              <div className="w-full flex justify-center pt-4 ">
                <Button
                  onClick={handleUpload}
                  disabled={isUploading}
                  className="w-32 bg-amber-950"
                >
                  {isUploading ? "Uploading..." : "Upload"}
                </Button>
              </div>
            )}
          </label>
        </CardContent>
        <BorderBeam
          duration={6}
          size={800}
          className="from-transparent via-amber-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={800}
          className="from-transparent via-orange-700 to-transparent"
        />
      </Card>
    </div>
  );
};
