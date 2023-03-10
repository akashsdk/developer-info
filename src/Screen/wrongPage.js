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
          title="500"
          subTitle="Sorry, something went wrong."
          extra={<Button type="primary">Back Home</Button>}
        />
      </div>
    </div>
  );
}
