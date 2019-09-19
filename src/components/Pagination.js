import React from 'react';
import { Pagination } from 'semantic-ui-react'
function CarCards(props) {
    return(
        <Pagination onPageChange={(e,{activePage}) => props.callbackFromParent(activePage)} defaultActivePage={props.page} totalPages={props.count} />
    )
}
export default CarCards