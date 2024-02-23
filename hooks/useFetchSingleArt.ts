// Dependencies
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// Services
import { fetchArtById } from "@/services/api";

// Types
import { ArtModel } from "@/types/ArtModel";

export const useFetchSingleArt = () => {
  const [singleArt, setSingleArt] = useState<ArtModel>();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      // Ensure id is a string and convert it to a number
      if (typeof id === 'string') {
        const numericId = parseInt(id, 10);
        if (!isNaN(numericId)) {
          const art = await fetchArtById(numericId);
          setSingleArt(art);
        }
      }
    }
    fetchData();
  }, [id]);

  return { singleArt };
};
