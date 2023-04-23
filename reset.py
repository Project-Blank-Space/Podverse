import boto3  # pip install boto3

# Let's use Amazon S3
aws_resources = boto3.resource("s3")

# Print out bucket names
for bucket in aws_resources.buckets.all():
    bucket = bucket.name
    
s3 = boto3.client('s3')

s3.upload_file(
    Filename="database_reset/user_database.json",
    Bucket=bucket,
    Key="database/user_database.json",
)

s3.upload_file(
    Filename="database_reset/episode_database.json",
    Bucket=bucket,
    Key="database/episode_database.json",
)

s3.upload_file(
    Filename="database_reset/channel_database.json",
    Bucket=bucket,
    Key="database/channel_database.json",
)

s3.upload_file(
    Filename="database_reset/favourite_database.json",
    Bucket=bucket,
    Key="database/favourite_database.json",
)

# To download user_database    
s3.download_file(
    Bucket= bucket, Key="database/user_database.json", Filename="database/user_database.json"
)

#To download channel_database
s3.download_file(
    Bucket= bucket, Key="database/channel_database.json", Filename="database/channel_database.json"
)

# To download episode_database
s3.download_file(
    Bucket= bucket, Key="database/episode_database.json", Filename="database/episode_database.json"
)

# TO download favourite_database
s3.download_file(
    Bucket= bucket, Key="database/favourite_database.json", Filename="database/favourite_database.json"
)