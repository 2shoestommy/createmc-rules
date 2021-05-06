import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Redirect = () => {
  useEffect(() => {
    window.location.replace('https://docs.google.com/document/d/1oTaS_toySx46-1URFQiCpjVnruMHqjtLoPi1AnYFMU0/edit?usp=sharing')
  })
  
  return <h1>test</h1>
}

ReactDOM.render(<Redirect />, document.getElementById('root'))
