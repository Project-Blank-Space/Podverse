from flask import Flask,request,jsonify
import base64
import json

# import os

import functions

from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

# model_load("./model.pickle")


@app.route('/')
def index():    
    return ("This is PodVerse-API. Please use the following endpoints to access the API")

@app.route('/create_user/<username>', methods=['POST'])
def create_user(username):
    if request.method == 'POST':
        new_user_data = request.get_json()
        
        user_img_url = functions.user_image_upload(new_user_data["user_img"], username)
        
        with open('database/user_database.json', "r") as x:
            user_database = json.load(x)
        
        user_database['username'] = {
        "user_img" : user_img_url,
        "unique_id" : new_user_data["unique_id"],
        "user_name" : new_user_data["user_name"],
        "user_email" : new_user_data["user_email"],
        "user_description" : new_user_data["user_description"],
        } 
        with open('database/user_database.json', "w") as y:
            json.dump(user_database, y)
        
        functions.user_database_upload()
        
        return jsonify({'user_created': 'True'})


@app.route('/<username>/create_channel', methods=['POST'])
def create(username):
    if request.method == 'POST':
        new_channel_data = request.get_json()
        
        channel_image_url = functions.channel_image_upload(new_channel_data["channel_image"], username)
        
        with open('database/channel_database.json', "r") as x:
            channel_database = json.load(x)
            
        channel_database['username'] = {
        "channel_image" : channel_image_url,
        "channel_Name" : new_channel_data["channel_name"],
        "channel_description" : new_channel_data["channel_description"]
        }
        
        with open('database/channel_database.json', "w") as y:
            json.dump(channel_database, y)
            
        functions.channel_database_upload()  # uploads the channel to the database.
        
        return jsonify({'channel_created': 'True'})

@app.route('/check_channel/<username>', methods=['GET'])
def check_channel(username):
    if request.method == 'GET':  # if the user is looking for a channel, then it will check if the username is in the database. If it is, then it will return true, else it will return false.
        with open('database/channel_database.json', "r") as x:
            channel_database = json.load(x)
            
        if username in list(channel_database.keys()):
            return jsonify({'channel_exists': 'True'})
        else:
            return jsonify({'channel_exists': 'False'})   












# @app.route('/<username>/home')
# def user_home(username):
#     return 0

 
    

        
    


# @app.route('/<channel_name>/upload', methods=['POST'])
# def upload(channel_name):
#     if request.method == 'POST':
        
#         img_base64 = request.get_json()
        
#         decode = open('IMAGE.png', 'wb')
#         decode.write(base64.b64decode(img_base64['png']))
        
#         # file_base64 = request.get_json()
        
#         # print(file_base64)
        
#         # encoded_file = 'data:application/pdf;base64,' + file_base64['png']
#         # print(file_base64)
        
#         # encoded_file_utf = encoded_file.encode('utf-8')
#         # print(encoded_file_utf)            # encoded_file_utf is now a bytes-object with the encoded data. Use bytes.decode()
        
#         # file = base64.b64decode(file_base64['png']) # encoded_file_utf is now a bytes-object with the encoded data. Use bytes.decode()
#         s3.upload_file(
#             Filename="IMAGE.png",
#             Bucket=bucket,
#             Key="new.jpg",
#         )
#         return 0   
        
        
        


if __name__ == '__main__':
    # port = os.environ.get('PORT', '5000')
    # app.run(debug=False, host='0.0.0.0', port=port)
    app.run()