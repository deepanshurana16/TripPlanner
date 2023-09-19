import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Authentication from "./scenes/authentication/LoginSignUp";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  // const {user , loginWithRedirect ,isAuthenticated, logout } = useAuth0();
  // console.log("current user", user );


  return (
    <>
    {/* <div className="App">
      <header className="App-header">
        {isAuthenticated && <h3>Hello {user.name} </h3>}
        { isAuthenticated ? (<button onClick={(e) => logout() }>Logout</button>) : (
          <button onClick={(e) => loginWithRedirect() }>Login With Redirect</button>
        )
        }
      </header>
    </div> */}
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Create a auth provider and inside of that put all private route code  */}
        {/* <Routes>
          <Route path="/auth" element={<Authentication />} />
        </Routes> */}
        
        {/* <RequireAuth> */}
          <div className="app">
            {/* <Authentication className="auth"/> */}
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        {/* </RequireAuth> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  );
}

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const id = localStorage.getItem("authToken");

  useEffect(() => {
    if (!id) {
      navigate("/auth");
    }
  }, [id, navigate]);

  return children;
};

export default App;
