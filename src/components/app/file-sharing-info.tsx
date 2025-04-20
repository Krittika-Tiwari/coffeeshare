import { ArrowLeftRightIcon, FileLock2Icon, Infinity, Zap } from "lucide-react";
import React from "react";

const FileSharingInfo = () => {
  return (
    <div className="h-fit flex flex-col justify-center items-center py-16 px-6 md:px-16 rounded-xl ">
      <h2 className="text-4xl font-bold text-center mb-4 text-[#4b3621]">
        Share files directly from your device to anywhere
      </h2>
      <p className="text-lg text-center h-full mb-12 text-[#7b5e47] max-w-2xl">
        Send files of any size directly from your device without ever storing
        anything online.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-4xl">
        {/* Feature 1 */}
        <div className="flex flex-col items-center justify-center p-6 bg-[#eaddcf] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-4xl mb-4 text-[#d97706]">
            <Infinity />
          </div>
          <h3 className="text-xl font-semibold text-[#4b3621]">
            No file size limit
          </h3>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center justify-center p-6 bg-[#eaddcf] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-4xl mb-4 text-[#ca8a04]">
            <ArrowLeftRightIcon />
          </div>
          <h3 className="text-xl font-semibold text-[#4b3621]">Peer-to-peer</h3>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center justify-center p-6 bg-[#eaddcf] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-4xl mb-4 text-[#f59e0b]">
            <Zap />
          </div>
          <h3 className="text-xl font-semibold text-[#4b3621]">
            Blazingly fast
          </h3>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center justify-center p-6 bg-[#eaddcf] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-4xl mb-4 text-[#b45309]">
            <FileLock2Icon />
          </div>
          <h3 className="text-xl font-semibold text-[#4b3621]">
            End-to-end encrypted
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FileSharingInfo;
