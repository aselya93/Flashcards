import React from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";

import { Button } from "antd";

function Navigation() {
  const navigate = useNavigate();

  return (
    <div>

        <div >
          <Button onClick={() => navigate("/")} >
            <Link to='/topics'>
            </Link>
          </Button>
        </div>

       

      <Outlet />
    </div>
  );
}

export default Navigation;
