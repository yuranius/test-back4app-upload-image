import {gql} from "@apollo/client";

export const CREATE = gql`
	mutation createCard ($name: String!, $image: File!) {
			createCard(input: {
					fields: {
							name: $name,
							image: {
									file: $image
							}
					}
			}){
					card {
							id
							name
							image {
									url
									name
              }
          }
			}
	}
`