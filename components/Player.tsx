"use client";

import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import useGetSongById from "@/hooks/useGetSongById";
import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  const songPath = useLoadSongUrl(song!);

  if (!song || !songPath || !player.activeId) {
    return null;
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 px-4 h-[80px]">
      <PlayerContent key={songPath} song={song} songPath={songPath} />
    </div>
  );
};

export default Player;
