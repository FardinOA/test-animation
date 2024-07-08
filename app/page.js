"use client";
import { toggleAnimation } from "@/lib/store/features/animation/animationSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function Home() {
    const dispatch = useDispatch();
    return (
        <main className="container py-10 mx-auto px-4">
            <button
                onClick={(e) => {
                    e.dataTransfer.setData("startAnimation", true);
                }}
                className="bg-blue-500 px-6 py-2 rounded-md "
            >
                Show Four
            </button>
        </main>
    );
}
