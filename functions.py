import base64
from mutagen.mp3 import MP3

import logging
import boto3
from botocore.exceptions import ClientError

import json

aws_resources = boto3.resource("s3")
s3 = boto3.client('s3')

for bucket in aws_resources.buckets.all():
    bucket = bucket.name

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

def create_presigned_url(bucket_name, object_name, expiration=2592000):
    """Generate a presigned URL to share an S3 object

    :param bucket_name: string
    :param object_name: string
    :param expiration: Time in seconds for the presigned URL to remain valid
    :return: Presigned URL as string. If error, returns None.
    """

    # Generate a presigned URL for the S3 object
    s3_client = boto3.client('s3')
    try:
        response = s3_client.generate_presigned_url('get_object',
                                                    Params={'Bucket': bucket_name,
                                                            'Key': object_name},
                                                    ExpiresIn=expiration)
    except ClientError as e:
        logging.error(e)
        return None

    # The response contains the presigned URL
    return response


def user_database_upload():
    s3.upload_file(
        Filename="database/user_database.json",
        Bucket=bucket,
        Key="database/user_database.json",
    )
    
def channel_database_upload():
    s3.upload_file(
        Filename="database/channel_database.json",
        Bucket=bucket,
        Key="database/channel_database.json",
    )
    
def episode_database_upload():
    s3.upload_file(
        Filename="database/episode_database.json",
        Bucket=bucket,
        Key="database/episode_database.json",
    )

def user_image_upload(user_img_64, username):
    
    decode = open('USER_IMAGE.png', 'wb')
    decode.write(base64.b64decode(user_img_64))
    
    s3.upload_file(
        Filename="USER_IMAGE.png",
        Bucket=bucket,
        Key = "images/user_img/" + username + ".png"
    )
    
    user_img_url = create_presigned_url(bucket, "images/user_img/" + username + ".png")
    
    if user_img_url is not None:
        return user_img_url
    else:
        return "Error user_image_upload"
    
def channel_image_upload(channel_img_64, username):
    
    decode = open('CHANNEL_IMAGE.png', 'wb')
    decode.write(base64.b64decode(channel_img_64))
    
    s3.upload_file(
        Filename="CHANNEL_IMAGE.png",
        Bucket=bucket,
        Key = "images/channel_image/" + username + ".png"
    )
    
    channel_img_url = create_presigned_url(bucket, "images/channel_image/" + username + ".png")
    
    if channel_img_url is not None:
        return channel_img_url
    else:
        return "Error channel_image_upload"
    
def podcast_data_upload(audio_64, username, channel_name, episode_no):
    
    decode = open('PODCAST_DATA.mp3', 'wb')
    decode.write(base64.b64decode(audio_64))
    
    s3.upload_file(
        Filename="PODCAST_DATA.mp3",
        Bucket=bucket,
        Key = "audio/" + username + "/" + channel_name + "/" + episode_no + ".mp3"
    )
    
    audio_url = create_presigned_url(bucket, "audio/" + username + "/" + channel_name + "/" + episode_no + ".mp3")
    
    if audio_url is not None:
        return audio_url
    else:
        return "Error channel_audio_upload"
    
def data_time(file_name):
    audio = MP3(file_name)
    return audio.info.length 