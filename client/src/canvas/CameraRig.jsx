import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 900;
    const isMobile = window.innerWidth <= 600;

    // set the initial model position
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [-0.16, 0.2, 2];
      if (isMobile) targetPosition = [0, 0.4, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2];
      else targetPosition = [0, 0, 1.5];
    }

    // set camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 2, -state.pointer.x / 2, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
