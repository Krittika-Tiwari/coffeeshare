"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, ClipboardCopy } from "lucide-react";
import React from "react";

import { BorderBeam } from "@/components/magicui/border-beam";
import { QRCodeSVG } from "qrcode.react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

export const UploadForm = () => {
  const [file, setFile] = React.useState<File>();
  const [isUploading, setIsUploading] = React.useState(false);
  const [roomId, setRoomId] = React.useState<string | null>(null);

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

      const newRoomId = uuidv4();
      setRoomId(newRoomId);

      toast.success("File uploaded successfully", {
        description: "Share this QR code to send the file",
      });
    } catch (error) {
      toast.error("Upload failed", {
        description: "Please try again later",
      });
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  const shareUrl = roomId ? `http://localhost:3000/?roomId=${roomId}` : "";

  const handleCopy = () => {
    if (shareUrl) {
      navigator.clipboard.writeText(shareUrl);
      toast.success("Link copied to clipboard");
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-4">
      <Card className="h-full w-full relative">
        <CardContent className="h-full flex flex-col justify-center items-center space-y-6 p-8">
          {!roomId ? (
            <label
              htmlFor="file-upload"
              className="flex flex-col h-full items-center justify-center w-full"
            >
              <Upload className="size-10 text-[#4b3621] animate-bounce" />

              <span className="text-base font-semibold text-[#7b5e47]">
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
                <div className="w-full flex justify-center pt-4">
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
          ) : (
            <div className="mt-8 text-center flex flex-col justify-center items-center gap-4 bg-amber-50 p-6 rounded-xl shadow-lg">
              <p className="text-lg font-semibold text-[#5c3d26]">
                📲 Scan this QR code to receive the file
              </p>
              <QRCodeSVG
                value={shareUrl}
                size={200}
                className="shadow-md border rounded-lg"
              />
              <p className="text-sm text-[#7b5e47] font-medium">
                File: {file?.name}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#5c3d26] font-medium truncate max-w-xs">
                  {shareUrl}
                </span>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleCopy}
                  className="hover:bg-amber-200"
                >
                  <ClipboardCopy className="w-4 h-4 text-[#5c3d26]" />
                </Button>
              </div>
              <Button
                variant="outline"
                className="mt-4 text-[#5c3d26] border-[#5c3d26] hover:bg-amber-100"
                onClick={() => setRoomId(null)}
              >
                ⬅ Back to Upload
              </Button>
            </div>
          )}
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
