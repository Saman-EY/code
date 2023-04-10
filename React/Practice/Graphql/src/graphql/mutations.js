import { gql } from "@apollo/client";

const CREATE_USER = gql`
    mutation createUser ($name: String!, $username: String!, $email: String! ) {
        createUser(
            input: {
                name: $name
                username: $username
                email: $email
            }
        ){
            id
            email
            name
            phone
        }
    }
`

export {CREATE_USER}