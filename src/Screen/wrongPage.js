import React from "react";
import { Button, Result } from "antd";

export default function wrongPage() {
  return (
    <div style={{height:'800px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    }}>
      <div >
        <Result
          status="500"
          
        />
        <h3 style={{
            color:'#fff',
            marginTop:'-30px'
        }}>Sorry, something went wrong.</h3>
         <Button className="contactButton" type="primary" htmlType="submit">
            Submit
          </Button>
      </div>
    </div>
  );
}
