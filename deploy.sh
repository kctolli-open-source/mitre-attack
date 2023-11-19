#!/bin/bash
echo "Mitre Attack - Deployment --- `date +%m`/`date +%d`/`date +%Y` `date +%r`"

bun lint

# Git Update
git status
git pull 
git add . 
git commit -m "Deploy --- `date +%m`/`date +%d`/`date +%Y` `date +%r`"
git push
