import React, { Component } from 'react';
import Details from './CourseDetails';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import LoadingWrapper from '../LoadingWrapper';
class Course extends Component {
    render() {
        const { id, course } = this.props;
        return (
            <div>
                {id} {course.name}
                <Details id={id} />
            </div>
        );
    }
}

export default graphql(gql`
query CourseQuery($id:ID!) {
    course(id:$id) {
        id
        name
    }
}
`, { options: ({ id }) => ({ variables: { id } }) })(LoadingWrapper(Course, 'course'));