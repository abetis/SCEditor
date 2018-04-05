#!/bin/bash
grunt build $1
read -p "Press [Enter] to continue..."

grunt test $1
read -p "Press [Enter] to continue..."

grunt release $1
