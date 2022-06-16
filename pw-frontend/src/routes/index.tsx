import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "../Pages/Homepage/Homepage";
import { LoginPage } from "../Pages/Login/Login";
import { RegistrationPage } from "../Pages/Registration/Registration";
import RequireAuth from "../utils/requireAuth";

const AppRouter = (): React.ReactElement => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default AppRouter;
