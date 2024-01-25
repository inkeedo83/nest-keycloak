import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Protected = ({ token }) => {
  return (
    <div>
      Protected
      <p>{token}</p>
    </div>
  );
};

export default Protected;
