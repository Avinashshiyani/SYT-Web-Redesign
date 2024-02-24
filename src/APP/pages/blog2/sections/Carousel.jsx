import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";

function Carousel() {
  const [currentStep, setCurrentStep] = useState(0);
  const [moving, setMoving] = useState("right");

  const [steps, setSteps] = useState([
    { name: "Step 1", href: "#", status: "current" },
    { name: "Step 2", href: "#", status: "upcoming" },
    { name: "Step 3", href: "#", status: "upcoming" },
    { name: "Step 4", href: "#", status: "upcoming" },
  ]);

  const prevStep = () => {
    setMoving("left");
    setSteps((old) =>
      old.map((v, i) => {
        if (i === currentStep) {
          v.status = "upcoming";
        } else if (i === currentStep - 1) {
          v.status = "current";
        }
        return v;
      })
    );
    setCurrentStep(currentStep - 1);
    return false;
  };

  const nextStep = async () => {
    setMoving("right");
    // getValues('firstname')

    if (true) {
      setSteps((old) =>
        old.map((v, i) => {
          if (i === currentStep) {
            v.status = "complete";
          } else if (i === currentStep + 1) {
            v.status = "current";
          }
          return v;
        })
      );
      setCurrentStep(currentStep + 1);
    }
    return false;
  };

  const wrapper = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (wrapper.current !== null) {
        setWrapperWidth(wrapper.current.offsetWidth);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-top py-12 px-4 sm:px-6 ">
        <h1>test</h1>
        <div
          className="flex items-start overflow-hidden w-96 sm:w-full"
          ref={wrapper}
        >
          <div className="flex flex-nowrap ">
            <Transition
              appear={false}
              unmount={false}
              show={currentStep === 0}
              enter="transform transition ease-in-out duration-500"
              enterFrom={
                moving === "right"
                  ? `translate-x-96 opacity-0`
                  : `-translate-x-96 opacity-0`
              }
              enterTo={`translate-x-0 opacity-100`}
              leave="transform transition ease-in-out duration-500 "
              leaveFrom={`translate-x-0 opacity-100`}
              leaveTo={
                moving === "right"
                  ? `-translate-x-full opacity-0`
                  : `translate-x-full opacity-0`
              }
              className="w-0 bg-green-200 overflow-visible"
              as="div"
            >
              <div
                className="bg-green-200"
                style={{ width: `${wrapperWidth}px` }}
              >
                <h2>stuff</h2>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
              </div>
            </Transition>

            <Transition
              appear={false}
              unmount={false}
              show={currentStep === 1}
              enter="transform transition ease-in-out duration-500"
              enterFrom={
                moving === "right"
                  ? `translate-x-96 opacity-0`
                  : `-translate-x-96 opacity-0`
              }
              enterTo={`translate-x-0 opacity-100`}
              leave="transform transition ease-in-out duration-500 "
              leaveFrom={`translate-x-0 opacity-100`}
              leaveTo={
                moving === "right"
                  ? `-translate-x-96 opacity-0`
                  : `translate-x-96 opacity-0`
              }
              className="bg-red-200 w-0 overflow-visible"
              as="div"
            >
              <div style={{ width: `${wrapperWidth}px` }}>
                <h2>stuff 2</h2>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
              </div>
            </Transition>

            <Transition
              appear={false}
              unmount={false}
              show={currentStep === 2}
              enter="transform transition ease-in-out duration-500"
              enterFrom={
                moving === "right"
                  ? `translate-x-96 opacity-0`
                  : `-translate-x-96 opacity-0`
              }
              enterTo={`translate-x-0 opacity-100`}
              leave="transform transition ease-in-out duration-500 "
              leaveFrom={`translate-x-0 opacity-100`}
              leaveTo={
                moving === "right"
                  ? `-translate-x-96 opacity-0`
                  : `translate-x-96 opacity-0`
              }
              className="w-0 overflow-visible"
              as="div"
            >
              <div style={{ width: `${wrapperWidth}px` }}>
                <h2>stuff 3</h2>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
              </div>
            </Transition>

            <Transition
              appear={false}
              unmount={false}
              show={currentStep === 3}
              enter="transform transition ease-in-out duration-500"
              enterFrom={
                moving === "right"
                  ? `translate-x-96 opacity-0`
                  : `-translate-x-96 opacity-0`
              }
              enterTo={`translate-x-0 opacity-100`}
              leave="transform transition ease-in-out duration-500 "
              leaveFrom={`translate-x-0 opacity-100`}
              leaveTo={
                moving === "right"
                  ? `-translate-x-96 opacity-0`
                  : `translate-x-96 opacity-0`
              }
              className="bg-blue-200 w-0 overflow-visible"
              as="div"
            >
              <div style={{ width: `${wrapperWidth}px` }}>
                <h2>stuff 4</h2>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
                <p>blar blar blar</p>
              </div>
            </Transition>
          </div>
        </div>
        <div className={`mt-2`}>
          <p className="text-sm font-medium mb-1 mt-3 text-center">
            Step {steps.findIndex((step) => step.status === "current") + 1} of{" "}
            {steps.length}
          </p>
          <nav
            className="flex items-center justify-center"
            aria-label="Progress"
          >
            <button
              type="button"
              disabled={currentStep === 0}
              onClick={() => prevStep()}
            >
              Prev
            </button>
            <ol className="mx-8 flex items-center space-x-5">
              {steps.map((step, i) => (
                <li key={`step_${i}`}>
                  {step.status === "complete" ? (
                    <a
                      href={step.href}
                      className="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900"
                    >
                      <span className="sr-only"></span>
                    </a>
                  ) : step.status === "current" ? (
                    <a
                      href={step.href}
                      className="relative flex items-center justify-center"
                      aria-current="step"
                    >
                      <span
                        className="absolute w-5 h-5 p-px flex"
                        aria-hidden="true"
                      >
                        <span className="w-full h-full rounded-full bg-indigo-200" />
                      </span>
                      <span
                        className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full"
                        aria-hidden="true"
                      />
                      <span className="sr-only"></span>
                    </a>
                  ) : (
                    <a
                      href={step.href}
                      className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
                    >
                      <span className="sr-only" />
                    </a>
                  )}
                </li>
              ))}
            </ol>
            <button
              type="button"
              disabled={currentStep === 3}
              onClick={() => nextStep()}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
      <div className="block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={
            "https://images.unsplash.com/photo-1628187112480-1ff4c21d43bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1972&q=80"
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default Carousel;
