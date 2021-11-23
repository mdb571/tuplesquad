from flask import Flask, jsonify, request
from flask.ext.pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'midhun'
app.config['MONGO_URI'] = 'mongodb+srv://midhun1114:midhun1114@cluster0.co0xz.mongodb.net'

mongo = PyMongo(app)
client = pymongo.MongoClient("mongodb+srv://midhun1114:midhun1114@cluster0.co0xz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.midhun
collection=db['test']
post1 ={"_id" :0,"item": "chair" ,"alt_url":"hjh"}
post2 ={"_id" :1, "item": "table" ,"alt_url":"ghgh"}
collection.insert_many([post1,post2])

@app.route('/framework', methods=['GET'])
def get_all_frameworks():
    framework = mongo.db.framework

    output = []

    for q in framework.find():
        output.append({'item' : q['item'], 'alt_url' : q['alt_url']})

    return jsonify({'result' : output})

@app.route('/framework/<name>', methods=['GET'])
def get_one_framework(item):
    framework = mongo.db.framework

    q = framework.find_one({'item' : item})

    if q:
        output = {'item' : q['item'], 'item' : q['item']}
    else:
        output = 'No results found'

    return jsonify({'result' : output})

@app.route('/framework', methods=['POST'])
def add_framework():
    framework = mongo.db.framework

    item = request.json['item']
    alt_url = request.json['alt_url']

    framework_id = framework.insert({'item' : item, 'alt_url' : alt_url})
    new_framework = framework.find_one({'_id' : framework_id})

    output = {'item' : new_framework['item'], 'alt_url' : new_framework['alt_url']}

    return jsonify({'result' : output})

if __name__ == '__main__':
    app.run(debug=True)
