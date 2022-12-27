import { gql } from "@apollo/client";

export const UPLOAD = gql`
	mutation createCard($name: String!, $image: Upload!) {
		createCard(input: { 
				fields: { 
						name: $name, 
						image: { 
								upload: $image
						} 
				} 
		}) {
			card {
				id
				name
			}
		}
	}
`

export const CREATE = gql`
	mutation update ($image: Upload!){
			createFile(input: {
					upload: $image
			}) {
					fileInfo {
							name
							url
          }
			}
	}
`
export const DOWNLOAD = gql`
	mutation download ($name: String!, $file: Upload!){
			createCard(
					input: {
						fields: {
								name: $name
								image: {
									upload: $file
								}
						}
				}){
					card {
							name
							image {
									__typename
									name
									url
              }
          }
			}
	}
`
