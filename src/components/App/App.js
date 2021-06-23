import React from "react";
import { useState, useEffect } from "react";
import { getSongsList } from "../../api";
import DataTable from "../DataTable/DataTable";
import Home from './../Home/Home';
import "./App.css";

function App() {
  const [list, setList] = useState({});

  useEffect(() => {
    getSongsList().then((result) => {
      setList(result.songs);
    });
  }, []);

  return <div className="container"><Home list={list} /></div>;
}

export default App;
