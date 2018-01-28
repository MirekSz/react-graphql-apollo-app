import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import LoadingWrapper from '../LoadingWrapper';
import { debug } from 'util';
class CourseDetails extends Component {
    add() {
        this.props.mutate({ variables: { input: { name: 'mirek', description: 'szajowski' } } })
    }
    render() {
        const { id, course } = this.props;
        return (
            <div>
                Details <i> {course.description}</i>
                <button onClick={this.add.bind(this)}>Add</button>
            </div>
        );
    }
}

export default compose(graphql(gql`
query CourseQuery($id:ID!) {
    course(id:$id) {
        id
        description
    }
}
`, { options: ({ id }) => ({ variables: { id } }) }),
    graphql(gql`
    mutation Add($input: CourseInput){
        createCourse(input: $input){
            id
        }
    }
`, {
            options: ({ input }) => ({
                variables: { input }, refetchQueries: [
                    'CourseListQuery',
                ],
            })
        }))(LoadingWrapper(CourseDetails, 'course'));