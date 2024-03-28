import { Routes, Route, useLocation } from 'react-router-dom';
import { LoggedLayout, UnLoggedLayout } from 'core';
import { Categories, Category, Home, Login, NotFound, Register, ResetPass, Task } from 'views';

const AppRoutes = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Routes>
      <Route element={<LoggedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/boards" element={<Categories />} loader={() => {}} />
        <Route path="/boards/:categorySlug" element={<Category />} />
        <Route path="/boards/:categorySlug/t/:taskSlug" element={<Task.View />} />
        <Route path="/boards/:categorySlug/t/:taskSlug/edit" element={<Task.Edit />} />
      </Route>
      {/* <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    /> */}
      <Route element={<UnLoggedLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/reset-pass" element={<ResetPass />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { AppRoutes };
