import {gql} from "@apollo/client"
export const TEST_QUERY =gql`query{
    hello
  }`;

export const TEST_MUTATION = gql`
  mutation tokenAuth($username:String!,$password:String!)
      {
          tokenAuth(username:$username,password:$password)
          {
              token
              payload
          }
      }
  
`;

export const UPLOAD_CSV = gql`
mutation  uploadCsv($batch:Int!,$instituteId:String!,$semester:Int!,$subject:String!,$url:String)
  {
    uploadCsv(batch:$batch,instituteId:$instituteId,semester:$semester,subject:$subject,url:$url)
    {
    __typename
    }
  }

`