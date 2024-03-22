import { useEffect, useState } from "react";

import {
  AddTreeDialog,
  MapControl,
  SelectLocationDialog,
  SideBar,
} from "@/components";
import { IBounds, ILatLng, ITreeInfo, SideBarMode } from "@/types";
import { useMarkers } from "./hooks";

import "./styles.css";

export const HomePage = () => {
  const { center, markers, reload } = useMarkers();
  const [sideBarMode, setSideBarMode] = useState<SideBarMode>(SideBarMode.DEFAULT);
  const [picker, setPicker] = useState<boolean>(false);

  const [newPosition, setNewPosition] = useState<ILatLng | null>(null);

  const handleBoundsChange = (bounds: IBounds) => {
    reload(bounds);
  };

  const handleAddTree = () => {
    setSideBarMode((prev) => prev === SideBarMode.DEFAULT ? SideBarMode.ADD_TREE : SideBarMode.DEFAULT);
  };

  const handlePicker = (position: ILatLng) => {
    setNewPosition(position);
  };

  const handleContinueAddingTree = () => {
    setSideBarMode(SideBarMode.ADD_TREE_DESCRIPTION);
  };

  const handleTreeCreated = (tree: ITreeInfo) => {
    console.debug("New tree created", tree);
  };

  useEffect(() => {
    setPicker(sideBarMode === SideBarMode.ADD_TREE);
  }, [sideBarMode]);

  return (
    <div className="HomePage">
      <MapControl
        center={center}
        markers={markers}
        onAddTree={handleAddTree}
        onBoundsChange={handleBoundsChange}
        onPick={handlePicker}
        picker={picker}
      />

      {sideBarMode === SideBarMode.ADD_TREE && (
        <SideBar>
          <SelectLocationDialog position={newPosition} onContinue={handleContinueAddingTree} />
        </SideBar>
      )}

      {sideBarMode === SideBarMode.ADD_TREE_DESCRIPTION && newPosition && (
        <SideBar>
          <AddTreeDialog
            center={newPosition}
            onSuccess={handleTreeCreated}
          />
        </SideBar>
      )}
    </div>
  );
};
