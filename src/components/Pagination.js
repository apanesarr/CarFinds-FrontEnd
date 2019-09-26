import React from 'react';
import { Pagination,Responsive } from 'semantic-ui-react'
function CarCards(props) {
    return(
        <div>
            <Responsive maxWidth={560}>
                <Pagination  boundaryRange={0} onPageChange={(e,{activePage}) => props.callbackFromParent(activePage)} defaultActivePage={props.page} ellipsisItem={null} firstItem={null} lastItem={null} siblingRange={1} totalPages={props.count} />
            </Responsive>
            <Responsive minWidth = {561}>
                <Pagination onPageChange={(e,{activePage}) => props.callbackFromParent(activePage)} defaultActivePage={props.page} totalPages={props.count} />
             </Responsive>
        </div> 
    )
}
export default CarCards
