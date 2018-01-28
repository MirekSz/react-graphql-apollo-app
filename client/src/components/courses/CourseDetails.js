import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import LoadingWrapper from '../LoadingWrapper';
import { debug } from 'util';
class CourseDetails extends Component {
    render() {
        const { id, course } = this.props;
        return (
            <div>
                Details <i> {course.description}</i>
            </div>
        );
    }
}

export default graphql(gql`
query CourseQuery($id:ID!) {
    course(id:$id) {
        id
        description
    }
}
`, { options: ({ id }) => ({ variables: { id } }) })(LoadingWrapper(CourseDetails, 'course'));