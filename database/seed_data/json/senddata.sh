#!/usr/bin/env bash
mongoimport --host database --db testingdata --collection users --type json --file /seeddata/users.json --jsonArray
mongoimport --host database --db testingdata --collection widgets --type json --file /seeddata/widgets.json --jsonArray
