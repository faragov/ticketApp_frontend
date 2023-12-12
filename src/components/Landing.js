import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";

export default function Landing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}
