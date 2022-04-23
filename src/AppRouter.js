import { Routes, Route } from "react-router-dom";
import { ApiController } from "./LessonsContext";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Course from "./components/Course";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

const AppRouter = () => {
  return (
    <ApiController>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course/:lessonId" element={<Course />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz/:lessonId/:questionId" element={<Quiz />} />
          <Route path="/quiz/result/:lessonId" element={<QuizResult />} />
          <Route path="/user/:userId" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </ApiController>
  );
};

export default AppRouter;
