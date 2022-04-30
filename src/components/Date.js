import React from "react";
import "./style/Date.css"
import HeadShake from 'react-reveal/HeadShake';
import Zoom from 'react-reveal/Zoom';


const Date = () => {
    return(
        <>
        <div className="imp-date container">
            <HeadShake>
               <h1>DATES TO REMEMBER</h1>  
            </HeadShake>
           
          
           <table class="table date-table">

  <tbody>
  
 
    <Zoom bottom delay={100}>
    <tr >
      <td >Full Paper Submission Deadline :</td>
      
      <td>25th April, 2022 10th May, 2022</td>
    
    </tr>
    </Zoom>
   
     
    <Zoom bottom delay={300}>
    <tr >
       <td>Notification of Acceptance :</td>
    
     
      <td>6th May, 2022</td>
      </tr>
      </Zoom>

    
    <Zoom bottom delay={500}> 
    <tr>
      <td>
        Camera Ready Paper Submission :  
      </td>
      <td>13th May, 2022</td>
    </tr>
    </Zoom>
  </tbody>
</table>
<br/>
<br/>
<br/>
<hr/>
        </div>
        
        </>
    )
}

export default Date