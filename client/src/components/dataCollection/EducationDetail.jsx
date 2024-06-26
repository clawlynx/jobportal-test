import React, { useState } from "react";
import EducationElt from "./EducationElt";
import { useDispatch } from "react-redux";
import {
  setBasicDetails,
  setEducationDetails,
  setWorkDetails,
} from "../../slices/dataCollectionSlice";

export default function EducationDetail() {
  const [newForm, setNewForm] = useState(1);
  const dispatch = useDispatch();
  function handleBack() {
    dispatch(setEducationDetails("pending"));
    dispatch(setBasicDetails("current"));
  }
  function handleNext() {
    dispatch(setEducationDetails("completed"));
    dispatch(setWorkDetails("current"));
  }
  return (
    <div className="p-4 bg-secondary w-11/12 lg:w-1/2 rounded-lg mt-3">
      <h1 className="text-xl my-2">Education</h1>
      {Array.from({ length: newForm }).map((_, index) => (
        <EducationElt key={index} />
      ))}

      <div>
        <div className="flex justify-end">
          <button
            className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            onClick={() => setNewForm(newForm + 1)}
            className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
          >
            Add New
          </button>
          <button
            className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
