import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

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
         <Button type="primary" htmlType="submit"
         style={{
            background:'rgb(10, 153, 153)',
         }}>
             <Link  to="/">Go Back</Link>
          </Button>
      </div>
    </div>
  );
}
