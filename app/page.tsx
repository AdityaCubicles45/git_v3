"use client";
import Spline from '@splinetool/react-spline/next';
import { Header } from './components/Header';
export default function Home() {
  return (
    <main>
      <Header />
      <Spline
        scene="https://prod.spline.design/akmr2-VadMmoJIjm/scene.splinecode" 
        />
    </main>
  );
}
