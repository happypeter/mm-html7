#!/usr/bin/env bash

middleman build&& rsync -arv --progress --delete build/ peter@happycasts.net:~/apps/html7/
