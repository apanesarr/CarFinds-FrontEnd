import React from 'react';
import { Pagination,Responsive } from 'semantic-ui-react'
function CarCards(props) {
    if(props.count>1){
    console.log("Greater then 1")
    }

    return(
        <div>
            <Responsive maxWidth={560}>
                {props.count > 1 ? 
                <Pagination  boundaryRange={0} onPageChange={(e,{activePage}) => props.callbackFromParent(activePage)} defaultActivePage={props.page} ellipsisItem={null} firstItem={null} lastItem={null} siblingRange={1} totalPages={props.count} />
                :null}
                
            </Responsive>
            <Responsive minWidth = {561}>
                {props.count > 1 ?
                <Pagination boundaryRange={0} onPageChange={(e,{activePage}) => props.callbackFromParent(activePage)} defaultActivePage={props.page} totalPages={props.count} ellipsisItem={null}/>
                :
                null}
                
             </Responsive>
        </div> 
    )
}
export default CarCards
