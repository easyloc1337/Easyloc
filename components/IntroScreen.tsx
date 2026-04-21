"use client";

import Image from "next/image";

export function IntroScreen() {
  return (
    <div className="intro-screen" aria-hidden="true">
      <div className="intro-overlay" />
      <div className="intro-rings intro-rings-one" />
      <div className="intro-rings intro-rings-two" />
      <div className="intro-beam intro-beam-one" />
      <div className="intro-beam intro-beam-two" />
      <div className="intro-particles" />
      <div className="intro-center">
        <div className="intro-logo-wrap">
          <Image
            src="/logo.jpg"
            alt="EasyLoc"
            width={1200}
            height={316}
            priority
            className="intro-logo"
          />
        </div>
        <div className="intro-shine" />
      </div>
    </div>
  );
}
