provider "aws" {
  region = "us-west-2"
}

resource "aws_dynamodb_table" "my_table" {
  name           = "MyDynamoDBTable"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "code"
}
