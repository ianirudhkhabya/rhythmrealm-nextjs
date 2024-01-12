"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { MdLibraryMusic } from "react-icons/md";

const Library = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <MdLibraryMusic className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md"> Your Library</p>
        </div>
        <AiOutlinePlus
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          size={26}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of playlists</div>
    </div>
  );
};

export default Library;
