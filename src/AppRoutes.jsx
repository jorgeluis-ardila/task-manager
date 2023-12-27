import { Routes, Route } from 'react-router-dom';
import { LoggedLayout } from 'core';
import { Category, Home, Login, NotFound, Task } from 'views';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<LoggedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/c/:categorySlug" element={<Category />} />
        <Route path="/c/:categorySlug/t/:taskSlug" element={<Task.View />} />
        <Route path="/c/:categorySlug/t/:taskSlug/edit" element={<Task.Edit />} />
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
