import React from "react";
import { useState, useEffect } from "react";
import { getSongsList } from "../../api";
import DataTable from "../DataTable/DataTable";
import "./App.css";

function App() {
  const [list, setList] = useState({});

  useEffect(() => {
    getSongsList().then((result) => {
      setList(result.songs);
    });
  }, []);

  return <DataTable list={list} />;
}

export default App;
