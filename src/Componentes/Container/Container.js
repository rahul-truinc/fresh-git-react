import React, { Fragment } from 'react'
import './Container.css'

const Container = ({
    classvalue,
    children
}) => {
    return (
        <Fragment>
            <div className={classvalue}>
                <div className='container'>
                    {children}
                </div>
            </div>
        </Fragment>
    )
}

export default Container
