import json
import boto3
from decimal import Decimal

def lambda_handler(event, context):
    # Initialize DynamoDB client
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('VisitorCount')
    
    # Increment the visitor count
    response = table.update_item(
        Key={
            'id': 'count'
        },
        UpdateExpression='SET visitor_count = visitor_count + :inc',
        ExpressionAttributeValues={
            ':inc': 1
        },
        ReturnValues='UPDATED_NEW'
    )
    
    # Fetch the updated count and convert Decimal to int
    new_count = int(response['Attributes']['visitor_count'])
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'visitor_count': new_count})
    }
