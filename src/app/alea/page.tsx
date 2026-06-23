"use client";

import { useRef } from "react";

export default function AleaPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const goFullscreen = () => {
    const el = videoRef.current;
    if (!el) return;
    // iOS Safari nutzt webkitEnterFullscreen auf dem <video>-Element
    type FSVideo = HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
    };
    const v = el as FSVideo;
    if (el.requestFullscreen) {
      void el.requestFullscreen();
    } else if (v.webkitEnterFullscreen) {
      v.webkitEnterFullscreen();
    }
  };

  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        src="/alea.mp4"
        loop
        autoPlay
        muted
        playsInline
        controls
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
      <button
        type="button"
        onClick={goFullscreen}
        aria-label="Vollbild"
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 16px",
          border: "none",
          borderRadius: 9999,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(8px)",
          color: "#fff",
          font: "600 14px/1 var(--font-encode-sans), system-ui, sans-serif",
          cursor: "pointer",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 3H5a2 2 0 0 0-2 2v3" />
          <path d="M16 3h3a2 2 0 0 1 2 2v3" />
          <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
          <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
        </svg>
        Vollbild
      </button>
    </main>
  );
}
