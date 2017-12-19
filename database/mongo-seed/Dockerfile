FROM mongo

#COPY /data/users.json /users.json
#COPY /data/widgets.json /widgets.json
#CMD mongoimport --host database --db testingdata --collection users --type json --file /seeddata/users.json --jsonArray
#CMD mongoimport --host database --db testingdata --collection widgets --type json --file /seeddata/widgets.json --jsonArray

#CMD ["mongod"]
CMD ["/seeddata/senddata.sh"]
