# import boto3  # pip install boto3

# # Let's use Amazon S3
# aws_resources = boto3.resource("s3")

# # Print out bucket names
# for bucket in aws_resources.buckets.all():
#     bucket = bucket.name
    
# s3 = boto3.client('s3')

# s3.download_file(
#     Bucket= bucket, Key="img7.jpg", Filename="downloaded_from_s3.jpg"
# )

# s3.upload_file(
#     Filename="downloaded_from_s3.jpg",
#     Bucket=bucket,
#     Key="data/img67676.jpg",
# )


# import logging
# import boto3
# from botocore.exceptions import ClientError


# def create_presigned_url(bucket_name, object_name, expiration=3600):
#     """Generate a presigned URL to share an S3 object

#     :param bucket_name: string
#     :param object_name: string
#     :param expiration: Time in seconds for the presigned URL to remain valid
#     :return: Presigned URL as string. If error, returns None.
#     """

#     # Generate a presigned URL for the S3 object
#     s3_client = boto3.client('s3')
#     try:
#         response = s3_client.generate_presigned_url('get_object',
#                                                     Params={'Bucket': bucket_name,
#                                                             'Key': object_name},
#                                                     ExpiresIn=expiration)
#     except ClientError as e:
#         logging.error(e)
#         return None

#     # The response contains the presigned URL
#     return response

# import requests    # To install: pip install requests

# url = create_presigned_url(bucket, "database/user_database.json")
# if url is not None:
#     response = requests.get(url)

# from mutagen.mp3 import MP3
# audio = MP3("podcast_data.mp3")
# print(audio.info.length)

dic = {
    "channel_name" : {
        "episode_no." : {
            "episode_url" : "url_of_the_episode",
            "episode_title" : "title_of_the_episode",
            "episode_description" : "description_of_the_episode",
            "episode_time" : "runtime_of_the_episode"
        },
        "episode_no.1" : {
            "episode_url" : "url_of_the_episode",
            "episode_title" : "title_of_the_episode",
            "episode_description" : "description_of_the_episode",
            "episode_time" : "runtime_of_the_episode"
        }
    }
}


print(len(dic["channel_name"].values()))