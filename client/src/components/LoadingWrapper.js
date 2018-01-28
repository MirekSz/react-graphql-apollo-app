import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
/**
 * 
 * @param {*} WrappedComponent 
 * @param {String} waitForProp 
 */
const Wrapper = (WrappedComponent, waitForProp) => (props) => {
    const { data, loading } = props;
    if (loading || !data[waitForProp]) {
        return (<div>Loading</div>)
    }
    return (
        <WrappedComponent {...data} {...props} />
    )
};


export default Wrapper