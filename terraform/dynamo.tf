provider "aws" {
  region = "us-west-2"
}

resource "aws_dynamodb_table" "hangouts" {
  name           = "Hangouts"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "code"

  attribute {
    name = "code"
    type = "S"
  }
}
