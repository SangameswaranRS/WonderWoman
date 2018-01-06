import requests
import sys,datetime

serverAPI="http://172.16.48.35:5959/server/api/updateBio"

bio=sys.argv[1]

'''crimeId=sys.argv[1]
time=sys.argv[2]
latitude=sys.argv[3]
longitude=sys.argv[4]
'''
#time=datetime.datetime.fromtimestamp(1347517370).strftime('%c')
#time=time[11:13]


#print(crimeId,time,latitude,longitude)
data={  "userId":4,
        "newBio":bio
     }
r=requests.post(url=serverAPI,data=data)
print(r.text)
