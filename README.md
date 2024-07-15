# Karthik's - AWS Resume
## About The Project
This is my Cloud Resume Challenge built on AWS. It's a static website hosted on AWS S3 bucket, with a visitor counter built on AWS Lambda functions. The website is built with HTML and CSS. The visitor counter is built with Python and AWS lambda functions. 

![architecture](./assets/images/architecture.png)


## Structure

- `.github/workflows/`: Folder contains CI/CD workflow configurations.
- `frontend/`: Folder contains the website.
    - `index.html`: file contains frontend website code and code to retrieve & update the visitors count
- `infra/`: Folder contains the infrastructure codes.
    - `lambda/lambda_function.py`: Contains the visitor counter code which is deployed on lambda function.
    - `main.tf`: Contains the backend infrastructure written as terraform code.

## AWS Services Used
- Cloudfront
- S3 bucket
- Lambda function
- API Gateway
- Dynamo DB
