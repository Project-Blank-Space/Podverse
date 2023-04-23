import boto3  # pip install boto3

# Let's use Amazon S3
aws_resources = boto3.resource("s3")

# Print out bucket names
for bucket in aws_resources.buckets.all():
    bucket = bucket.name
    
s3 = boto3.client('s3')

# s3.upload_file(
#     Filename="channel_database.json",
#     Bucket=bucket,
#     Key="database/channel_database.json",
# )

s3.download_file(
    Bucket= bucket, Key="database/channel_database.json", Filename="database/channel_database.json"
)