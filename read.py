import json
x = {
    "talaba":[
        {"id": 1, "ism": "Humoyun", "familya": "Sobirjonov", "email": "humoyun@gmail.com"},
        {"id": 2, "ism": "Rahmonberdi", "familya": "Adashaliyev", "email": "rahmonberdi@gmail.com"}
    ],
    "maxsulot": [
        {"id": 1, "nomi": "Noutbuk", "narxi": 500},
        {"id":2, "nomi": "telefon", "narxi": 100}
    ]
}

y = json.dumps(x)

print(y)