import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";

export default function Cart() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}
