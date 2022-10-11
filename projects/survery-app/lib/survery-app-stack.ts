import {
  Stack, StackProps,
} from 'aws-cdk-lib'
import { Construct } from 'constructs'
// import * as sqs from 'aws-cdk-lib/aws-sqs'
import { WebAppConstruct } from './webapp/webapp-construct'
import { DynamoCostruct } from './dynamodb/dynamo-construct'
import { GraphQLConstruct } from './graphql/graphql-builder-construct'

export class SurveryAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const db = new DynamoCostruct(this, 'survey-table')
    db.addKeys('id', 'recordType')

    const webapp = new WebAppConstruct(this, 'survey-webapp')
    webapp.addAssets('./webapp')

    const gql = new GraphQLConstruct(this, 'survey-gql')

    gql.createApi('./data-model/schema.gql')

    // gql.query('getRoomUsers')
    //   .fn(async function (event) {
    //     // [ ] get
    //   }, { name: 'get-user-rooms' })
    //   .end()

  }
}


const userExample = {
  id: '',
  recordType: 'user:session',
  level: 100, // this will be the value
}