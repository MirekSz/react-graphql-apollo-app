import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Course from './Course';

class CourseList extends Component {
    render() {
        const { allCourses, loading } = this.props.data;
        if (loading) {
            return (<div>Loading</div>)
        }
        if (!allCourses) return null;
        console.log(allCourses);
        const coursesHTML = allCourses.map(course => {
            return (<div key={course.id}>
                <Course id={course.id} />
            </div>
            );
        });
        return coursesHTML;
    }
}

export default graphql(gql`
    query CourseListQuery {
        allCourses {
            id
            name
        }
    }
`)(CourseList);