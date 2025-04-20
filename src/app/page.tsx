import FileSharingInfo from "@/components/app/file-sharing-info";
import { UploadForm } from "@/components/app/file-uplode";
import { Navbar } from "@/components/app/navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] min-h-screen pb-10 gap-2 sm:p-4 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <Navbar />
      <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-2 w-full h-full">
        <div className="h-full">
          <UploadForm />
        </div>
        <div className=" h-full">
          <FileSharingInfo />
        </div>
      </div>
    </div>
  );
}
