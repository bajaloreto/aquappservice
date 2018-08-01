# Aquapp

Aquapp is an application that monitors the quality of the water over time.

## Setup

The whole application is dockerized, just run the following command (with docker
and docker-compose installed, of course):

$ docker-compose up

The container with the mongo database uses the official mongo container, but the
other 2 containers are maintained by me. If you need the Dockerfiles of those
containers, here you are:

- [Frontend (nginx + node)](https://hub.docker.com/r/esperantodeparture/nginx-node/)
- [Backend (nginx + uwgsi)](https://hub.docker.com/r/esperantodeparture/python3-uwsgi-nginx/)

The application needs initial data to work, execute seed_db.py in /seed_db. Use
pipenv to avoid polluting your python installation.

$ cd seed_db

$ pipenv install

$ pipenv shell

$ python seed_db.py

[About pipenv](https://docs.pipenv.org/)
