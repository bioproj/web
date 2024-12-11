import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button, Space, DatePicker, version } from "antd";
import "antd/dist/reset.css";

const App = () => (
  <>
    <h1>antd version: {version}</h1>
    <Space>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
    </Space>
  </>
);

createRoot(document.getElementById("container")!).render(<App />);
