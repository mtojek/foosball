#!/bin/bash

set -e

firebase deploy --only database
cat database.json| firebase database:set / -y
