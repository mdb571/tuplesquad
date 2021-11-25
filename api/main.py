from flask import Flask, jsonify, request
#from flask_pymongo import PyMongo
#from bson.json_util import dumps
#from bson.objectid import ObjectId
from flask import jsonify, request
from deta import Deta
import json
from flask_cors import CORS
#import pymongo

app = Flask(__name__)
deta = Deta('c052t59b_4GGFLneztbAy6QQLfkSV1C74uuPQVD4K')
# app.config['MONGO_DBNAME'] = 'greenalt'
# app.config['MONGO_URI'] = 'mongodb+srv://tuplesquad:tuplesquad7@cluster0.co0xz.mongodb.net/greenalt'

# mongo = PyMongo(app)


CORS(app)

shopping = deta.Base("shopping")
users =deta.Base("users")


# client = pymongo.MongoClient("mongodb+srv://midhun1114:midhun1114@cluster0.co0xz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
# db = client.midhun
# collection=db['test']

@app.route('/init', methods=['GET'])
def init():
	browser_id=abs(hash(request.remote_addr))
	footprint= 0
	
	user=users.put({"user_id":browser_id,"footprint":footprint})
	
	return jsonify(user, 201)


@app.route('/add/<key>', methods=['POST'])
def add_alt(key):
    __json = json.loads(request.data)
    _item = __json['item']
    _alt_url = __json['alt_url']
    _alt_title = __json['alt_title']
    _alt_img = __json['alt_img']
    _alt_price = __json['alt_price']
    if _item and _alt_price and _alt_img and _alt_url and _alt_title and request.method == 'POST':
        # id=mongo.db.greentest.insert_one({"item":_item,'alt_title':_alt_title,"alt_url":_alt_url,"alt_price":_alt_price,"alt_img":_alt_img})
        shopping.insert(
            {"item": _item, 'alt_title': _alt_title, "alt_url": _alt_url, "alt_price": _alt_price, "alt_img": _alt_img})
        
        user = users.get(key)
        user['footprint']+=5
        
        users.put(user)
        
        
        resp = jsonify("added")
        resp.status_code = 200
        return resp
    else:
        return not_found()


@app.route('/shopping', methods=['POST'])
def get_green_alt():
    title = json.loads(request.data)
    title = title["title"].lower()
    title = title.split()
    print(title)
    ourItems = ['chair','powerbank','toothbrush','bottle','kitchen','utensil','pen']
    found =[]
    for i in title:
        if i in ourItems:
            found.append(i)

    name = found[0]
    res = shopping.fetch({
        "item?contains": name
    })
    all_items = res.items

    # fetch until last is 'None'
    while res.last:
        res = shopping.fetch({
            "item?contains": name
        }, last=res.last)
        all_items += res.items
    return jsonify(all_items)
# @app.route('/recommendation', methods=['POST'])
# def get_all():
#     res = shopping.fetch()

#     all_items = res.items

#     # fetch until last is 'None'
#     while res.last:
#         res = shopping.fetch()
#         all_items += res.items
#     return jsonify(all_items)

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': "Not Found" + request.url
    }
    resp = jsonify(message)
    resp.status_code = 404
    return resp


if __name__ == "__main__":
    app.run(debug=True)
