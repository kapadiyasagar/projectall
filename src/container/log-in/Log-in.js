import React from 'react';
import { Button } from 'reactstrap';
import{Alert} from'reactstrap';

function Login(props) {
    return (
        <div>
            <Button
                color="primary"
            >
                Click Me
            </Button>
            
<div>
  <Alert
    color="primary"
  >
    Hey! Pay attention.
  </Alert>
</div>
        </div>
        
    );
}

export default Login;