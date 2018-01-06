import requests,sys
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn import neighbors
from sklearn.covariance import EllipticEnvelope

serverAPI="http://192.168.43.35:3607/server/api/updatePredictionForACrime"

crimeId=sys.argv[1]
latitude=float(sys.argv[2])
longitude=float(sys.argv[3])

df=pd.read_csv("C:/Users/Sangameswaran/WebstormProjects/WonderWoman/PythonScripts/crime.csv")
df=df.drop(['crimetime'],axis=1)
X=np.array(df.drop(['type'],1))
y=np.array(df['type'])

elliptic = EllipticEnvelope(contamination=0.15)
elliptic.fit(X)
prediction = elliptic.predict([[latitude,longitude]])


if prediction==-1:
    possibility="Safe zone"
else:
    X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.2)
    clf = neighbors.KNeighborsClassifier(n_neighbors=5)
    clf.fit(X_train, y_train)
    clf.score(X_test, y_test)
    val=np.array([[latitude,longitude]])
    p=clf.predict(val)
    if p==0:
        possibility="Sexual abuse"
    elif p==1:
        possibility="Robbery"
    elif p==2:
        possibility="Rape"
    elif p==3:
        possibility="Homicide"


print(possibility)
data={  "crimeId":crimeId,
        "prediction":possibility
     }
r=requests.post(url=serverAPI,data=data)