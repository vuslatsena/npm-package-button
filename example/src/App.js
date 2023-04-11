import React from 'react';
import { Button } from 'vuslatui';
import 'vuslatui/dist/index.css';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>VUSLAT UI</h1>
        <Button type='primary' text='Primary Button' /> <br />
        <Button type='secondary' text='Default Button' /> <br />
        <Button type='dashed' text='Dashed Button' /> <br />
        <Button type='link' text='Link Button' /> <br />
        <Button type='download' text="Download Button"></Button><br />
        <Button type='loading' text="Loading Button"></Button><br />
      </div>
    </div>
  )
}

export default App;
