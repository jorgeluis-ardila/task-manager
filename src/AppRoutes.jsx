import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from 'core';
import { Category, EditTask, Home, Login, NotFound, Task } from 'views';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/:categorySlug"
        element={
          <ProtectedRoute>
            <Category />
          </ProtectedRoute>
        }
      />
      <Route
        path="/:categorySlug/:taskSlug"
        element={
          <ProtectedRoute>
            <Task />
          </ProtectedRoute>
        }
      />
      <Route
        path="/:categorySlug/:taskSlug/edit-task"
        element={
          <ProtectedRoute>
            <EditTask />
          </ProtectedRoute>
        }
      />
      {/* <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    /> */}
      <Route path="/login" element={<Login />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export { AppRoutes };
