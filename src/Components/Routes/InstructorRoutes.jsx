import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";

// eslint-disable-next-line react/prop-types
const InstructorRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default InstructorRoutes;
