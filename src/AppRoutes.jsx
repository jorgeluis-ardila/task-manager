import { Routes, Route, Outlet } from 'react-router-dom';
import { LoggedLayout, ProtectedRoute } from 'core';
import { Category, EditTask, Home, Login, NotFound, Task } from 'views';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <LoggedLayout>
              <Outlet />
            </LoggedLayout>
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/c/:categorySlug" element={<Category />} />
        <Route path="/c/:categorySlug/t/:taskSlug" element={<Task />} />
        <Route path="/c/:categorySlug/t/:taskSlug/edit" element={<EditTask />} />
      </Route>
      {/* <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    /> */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { AppRoutes };
