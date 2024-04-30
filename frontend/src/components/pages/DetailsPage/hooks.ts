import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IMarkerClickEvent, ITreeDetails } from "@/types";
import { treeMapService } from "@/services/api";
import { mainBus } from "@/bus";
import { routes } from "@/utils";

export const useTreeDetails = (id: string) => {
  const [tree, setTree] = useState<ITreeDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const canShare = !!navigator.share;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await treeMapService.getTreeDetails(id);
        setTree(res);
      } catch (e) {
        setError("Error loading tree details, please try again later.");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleShare = () => {
    if (!tree) {
      return;
    }

    navigator.share({
      title: `${tree.species} -- check out this tree on the Tree Map!`,
      url: window.location.href,
    });
  };

  const handleTreeClick = useCallback((e: IMarkerClickEvent) => {
    navigate(routes.treeDetails(e.id));
  }, [navigate]);

  useEffect(() => {
    mainBus.on("tree_clicked", handleTreeClick);
    return () => mainBus.off("tree_clicked", handleTreeClick);
  }, [handleTreeClick]);

  return {
    tree,
    loading,
    error,
    canShare,
    handleShare,
  };
};
