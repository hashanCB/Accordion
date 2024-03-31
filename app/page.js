"use client";
import { useRef, useState } from "react";
import DivComp from "./components/DivComp";
import { Dropdownlist } from "./lib/data";

export default function Home() {
  const [mulitseletion, setmulitseletion] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const refArray = [ref1, ref2, ref3, ref4];

  const singal = (e) => {
    let compValue = e.currentTarget.id;
    compValue = Number(compValue);

    if (compValue === 0) {
      if (ref1.current.classList.contains("hidden")) {
        ref1.current.classList.remove("hidden");
      } else {
        ref1.current.classList.add("hidden");
      }
      if (!mulitseletion) {
        ref2.current.classList.add("hidden");
        ref3.current.classList.add("hidden");
        ref4.current.classList.add("hidden");
      }
    } else if (compValue === 1) {
      if (ref2.current.classList.contains("hidden")) {
        ref2.current.classList.remove("hidden");
      } else {
        ref2.current.classList.add("hidden");
      }
      if (!mulitseletion) {
        ref1.current.classList.add("hidden");
        ref3.current.classList.add("hidden");
        ref4.current.classList.add("hidden");
      }
    } else if (compValue === 2) {
      if (ref3.current.classList.contains("hidden")) {
        ref3.current.classList.remove("hidden");
      } else {
        ref3.current.classList.add("hidden");
      }
      if (!mulitseletion) {
        ref2.current.classList.add("hidden");
        ref1.current.classList.add("hidden");
        ref4.current.classList.add("hidden");
      }
    } else if (compValue === 3) {
      if (ref4.current.classList.contains("hidden")) {
        ref4.current.classList.remove("hidden");
      } else {
        ref4.current.classList.add("hidden");
      }
      if (!mulitseletion) {
        ref2.current.classList.add("hidden");
        ref3.current.classList.add("hidden");
        ref1.current.classList.add("hidden");
      }
    }
  };
  return (
    <>
      <div className="mx-auto justify-between flex my-3">
        <button
          onClick={() => setmulitseletion(!mulitseletion)}
          className={
            (mulitseletion
              ? "bg-green-600 p-3 rounded-lg mx-auto justify-between"
              : "bg-red-400 ") + "p-3 rounded-lg mx-auto justify-between"
          }
        >
          Mulit Seletion
        </button>
      </div>

      {Dropdownlist &&
        Dropdownlist.map((ele, index) => (
          <DivComp
            reff={refArray[ele.id]}
            key={ele.id}
            title={ele.divtitle}
            body={ele.divbody}
            singal={singal}
            id={ele.id}
          ></DivComp>
        ))}
    </>
  );
}
