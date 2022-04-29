import React from "react";
import "./style/Date.css"
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';

const Date = () => {
    return(
        <>
        <div className="imp-date container">
            <HeadShake>
               <h1>DATES TO REMEMBER</h1>  
            </HeadShake>
           
          
           <table class="table date-table">

  <tbody>
    <tr className="table-text">
 
    <Fade bottom cascade>
      <td > Full Paper Submission Deadline :</td>
      
      <td>25th April, 2022 10th May, 2022</td>
      </Fade>
    </tr>
    <tr>
     
    <Fade bottom cascade>
    
      <td>Notification of Acceptance :</td>
      <td> 6th May, 2022</td>
      </Fade>

    </tr>
    <tr>
    <Fade bottom cascade>
   
      <td>Camera Ready Paper Submission :</td>
      <td>13th May, 2022</td>
      </Fade>

    </tr>
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