### 🔗 Application Routing Structure
```jsx
<Routes>
  {/* Redirect root to /signup */}
  <Route path="/" element={<Navigate to="/signup" replace />} />

  {/* Signup page */}
  <Route path="/signup" element={<Signup />} />

  {/* Login page */}
  <Route path="/login" element={<Login />} />

  {/* Forgot password page */}
  <Route path="/forgot-password" element={<ForgotPassword />} />

  {/* Logout handler */}
  <Route path="/logout" element={<Logout />} />

  {/* 404 fallback */}
  <Route
    path="*"
    element={
      <div className="min-h-screen flex items-center justify-center text-white">
        Page not found
      </div>
    }
  />
</Routes>
```